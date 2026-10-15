# supermatt-scratch

Throwaway repository for exercising SuperMatt's PR workflow skills (babysit-pr, ship-pr, recover-ci).

`wordFrequency(text, word)` counts nonoverlapping, case-insensitive occurrences of
the supplied literal term, including punctuation and surrounding spaces. A match
must not have a Unicode letter, number, or underscore immediately before or after
the complete term. An empty term returns `0`. Compatible with Node 22.

`replaceWord(text, word, replacement)` replaces every literal occurrence of the
supplied term, ignoring case, on Node 22. Replacement text is inserted literally.
