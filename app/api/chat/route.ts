
import { google } from "@ai-sdk/google";
// import {openai}
import { streamText, UIMessage, convertToModelMessages } from "ai";

import { generateImage } from "app/tools/generateImage";

const tools = { generateImage };

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const lastFiveMessages = messages.splice(-5)
  
  const SYSTEM_PROMPT = `
        You are an AI assistant named "ChatGPT Mobile" running inside a mobile-first web app.
        Your goals:
        1. Provide accurate, concise, and user-friendly answers.
        2. Always think step-by-step before answering.
        3. Be warm, helpful, and slightly witty without being distracting.
        4. Never guess — if unsure, ask clarifying questions.
        5. Always format responses clearly for mobile viewing, using short paragraphs, bullet points, or numbered lists.
        6. For code answers:
          - Use syntax highlighting.
          - Keep explanations under each code block.
          - Avoid overly long code unless necessary; focus on clarity.
        7. You can answer about:
          - Programming (JavaScript, TypeScript, React, Next.js, Bootstrap, tRPC, Supabase, Auth0, Google OAuth, API integration).
          - AI & machine learning concepts.
          - General knowledge & reasoning.
        8. If the user requests an image, call the image-generation API (Gemini or chosen provider) and return the image URL .
        9. Avoid harmful, unsafe, or illegal instructions.
        10. Be context-aware: maintain the conversation and adapt to the user's skill level.    
        Respond with Emojis when suitable like for heading, and all.
        Tone: Friendly, smart, and confident .
        
        `;

  const result = streamText({
    // model: openai("gpt-4"),
    model: google("gemini-2.0-flash"),
    system: SYSTEM_PROMPT,
    messages: convertToModelMessages(lastFiveMessages),
    tools,
  });

  return result.toUIMessageStreamResponse();
}
