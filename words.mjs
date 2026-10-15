// Counts the words in `text`, split on whitespace.
export function wordCount(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

// Counts how often `word` appears in `text` as a whole word, ignoring case.
export function wordFrequency(text, word) {
  if (word === "") return 0;
  const literal = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.match(new RegExp(`(?<![\\p{L}\\p{N}_])${literal}(?![\\p{L}\\p{N}_])`, "giu"))?.length ?? 0;
}
