import { GoogleGenAI } from "@google/genai";
import type { AIProvider, TextGenerationInput } from "@/lib/ai/types";

export class GeminiProvider implements AIProvider {
  private readonly client: GoogleGenAI;
  private readonly model: string;

  constructor(apiKey: string, model: string) {
    this.client = new GoogleGenAI({ apiKey });
    this.model = model;
  }

  async generateText({ system, prompt, temperature, maxOutputTokens }: TextGenerationInput) {
    const response = await this.client.models.generateContent({
      model: this.model,
      contents: prompt,
      config: {
        systemInstruction: system,
        ...(temperature === undefined ? {} : { temperature }),
        ...(maxOutputTokens === undefined ? {} : { maxOutputTokens }),
      },
    });

    return response.text ?? "";
  }
}
