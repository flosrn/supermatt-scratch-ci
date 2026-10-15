import { test } from "node:test";
import assert from "node:assert/strict";
import { wordCount, wordFrequency } from "./words.mjs";

test("wordCount splits on any whitespace", () => {
  assert.equal(wordCount(" a  b\tc\n"), 3);
});

test("wordCount of blank text is zero", () => {
  assert.equal(wordCount("   "), 0);
});

test("wordFrequency counts whole words only, ignoring case", () => {
  assert.equal(wordFrequency("The cat, the catalog, THE end", "the"), 3);
});

test("wordFrequency treats the word literally", () => {
  assert.equal(wordFrequency("a.b axb a.b", "a.b"), 2);
});
