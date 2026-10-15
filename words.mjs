// Counts the words in `text`, split on whitespace.
export function wordCount(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}
