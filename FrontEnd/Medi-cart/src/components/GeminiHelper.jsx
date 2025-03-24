import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Load API key from .env
console.log(import.meta.env.VITE_GEMINI_API_KEY);

// ✅ Initialize Google Generative AI instance
const genAI = new GoogleGenerativeAI(API_KEY);

export const getRelatedMedicines = async (medicineName) => {
  if (!API_KEY) {
    console.error(
      "❌ ERROR: API Key is missing! Set VITE_GEMINI_API_KEY in .env"
    );
    return [];
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Suggest 5 alternative medicines for "${medicineName}" available in pharmacies. Provide only medicine names, separated by commas.`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    const responseText = result.response.candidates[0].content.parts[0].text; // Extract AI response

    // Convert AI response (comma-separated) into an array
    return responseText.split(",").map((item) => item.trim());
  } catch (error) {
    console.error("❌ Error fetching related medicines:", error);
    return [];
  }
};
