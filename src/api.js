const API_BASE = "https://developer.chrome.com/docs/ai"; 

// Check Language
export const detectLanguage = async (text) => {
  try {
    const response = await fetch(`${API_BASE}/language-detection`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data.language; 
  } catch (error) {
    console.error("Language Detection Error:", error);
    return null;
  }
};

//Summarize Text
export const summarizeText = async (text) => {
  try {
    const response = await fetch(`${API_BASE}/summarizer-api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data.summary; 
  } catch (error) {
    console.error("Summarization Error:", error);
    return null;
  }
};

//Translate Text
export const translateText = async (text) => {
    try {
      const response = await fetch(`${API_BASE}/summarizer-api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      return data.summary; 
    } catch (error) {
      console.error("Summarization Error:", error);
      return null;
    }
  };
