export const hasStoredByokKey = () =>
  !!(
    localStorage.getItem("openaiApiKey") ||
    localStorage.getItem("groqApiKey") ||
    localStorage.getItem("geminiApiKey") ||
    localStorage.getItem("customTranscriptionApiKey")
  );
