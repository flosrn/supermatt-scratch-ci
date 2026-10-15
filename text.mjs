// Wraps every literal occurrence of `term` in `text` with ** for the report.
export function highlight(text, term) {
  return text.replaceAll(term, (match) => `**${match}**`);
}

// Counts the literal occurrences of `term` in `text`, ignoring case.
export function countLiteral(text, term) {
  return text.match(new RegExp(RegExp.escape(term), "gi"))?.length ?? 0;
}
