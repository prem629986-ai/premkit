export type AIService = "backgroundRemoval"|"enhancement"|"superResolution"|"objectRemoval"|"faceGenerator"|"retouch";
export function isAIConfigured(){ return Boolean(import.meta.env.VITE_AI_API_URL && import.meta.env.VITE_AI_API_KEY); }
export async function runAI(_service:AIService,_file:File):Promise<Blob>{
  throw new Error("AI service not configured. Add VITE_AI_API_URL and VITE_AI_API_KEY to enable this tool.");
}