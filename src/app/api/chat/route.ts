import Anthropic from "@anthropic-ai/sdk";
import { GTAS_SYSTEM_PROMPT } from "@/lib/gtas-system-prompt";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages, moduleContext } = await req.json();

    const systemPrompt = moduleContext
      ? `${GTAS_SYSTEM_PROMPT}\n\n## Current Module Context\nThe user is currently studying: ${moduleContext}. Tailor your responses to be relevant to this module's topics when appropriate.`
      : GTAS_SYSTEM_PROMPT;

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          const stream = anthropic.messages.stream({
            model: "claude-opus-4-8",
            max_tokens: 4096,
            thinking: { type: "adaptive" },
            system: systemPrompt,
            messages,
          });

          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              const data = JSON.stringify({ text: chunk.delta.text });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          const errorMsg = JSON.stringify({
            error: error instanceof Error ? error.message : "Stream error",
          });
          controller.enqueue(encoder.encode(`data: ${errorMsg}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
