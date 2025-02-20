export const detectLanguage = async (text) => {
  if (!window.languageDetection) {
    console.error("Language Detection API not supported.");
    return "Unknown";
  }

  try {
    const result = await window.languageDetection.detect(text);
    return result.language; // Returns detected language code (e.g., "en", "es")
  } catch (error) {
    console.error("Error detecting language:", error);
    return "Unknown";
  }
};

export const summarizeText = async (text) => {
  if (!window.summarizer) {
    console.error("Summarizer API not supported.");
    return "Summarization not available";
  }

  try {
    const result = await window.summarizer.summarize(text);
    return result.summary; // Returns summarized text
  } catch (error) {
    console.error("Error summarizing text:", error);
    return "Summarization failed";
  }
};

export const translateText = async (text, targetLang) => {
  if (!window.translator) {
    console.error("Translator API not supported.");
    return "Translation not available";
  }

  try {
    const result = await window.translator.translate(text, targetLang);
    return result.translation; // Returns translated text
  } catch (error) {
    console.error("Error translating text:", error);
    return "Translation failed";
  }
};
