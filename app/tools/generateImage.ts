import fs from "fs";
import path from "path";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";
import { experimental_generateImage, tool } from "ai";
import { put } from "@vercel/blob";

const isProd = process.env.NODE_ENV === "production";

export const generateImage = tool({
  description: "Generate an image",
  inputSchema: z.object({
    prompt: z.string().describe("The prompt to generate the image from"),
  }),
  execute: async ({ prompt }) => {
    let imageUrl: string = ""; // Initialize outside try block

    try {
      // 1. Generate the image from OpenAI
      const { image } = await experimental_generateImage({
        model: openai.imageModel("dall-e-3"),
        prompt,
      });

      if (isProd) {
        // 2a. Production: upload to Vercel Blob Storage
        const blob = await put(
          `images/${Date.now()}.png`,
          Buffer.from(image.base64, "base64"),
          { access: "public", contentType: "image/png" }
        );
        imageUrl = blob.url;
      } else {
        
        const fileName = `image-${Date.now()}.png`;
        const filePath = path.join(process.cwd(), "public", "images", fileName);

        // Ensure /public/images exists
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        // Save file
        fs.writeFileSync(filePath, Buffer.from(image.base64, "base64"));

        imageUrl = `/images/${fileName}`;
        // URL relative to your dev server
      }

      console.log("Generated image URL:", imageUrl);

      // 3. Return URL and prompt
      return {
        url: imageUrl,
        prompt,
      };
    } catch (error) {
      console.error("Error generating image:", error);
      return "Error generating images";
    }
  },
});

export const tools = { generateImage };
