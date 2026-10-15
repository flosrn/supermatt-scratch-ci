// Counts the words in `text`, split on whitespace.
export function wordCount(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

// Counts how often `word` appears in `text` as a whole word, ignoring case.
export function wordFrequency(text, word) {
  return text.match(new RegExp(`\\b${RegExp.escape(word)}\\b`, "gi"))?.length ?? 0;
}
