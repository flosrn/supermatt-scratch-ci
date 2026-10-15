import { test } from "node:test";
import assert from "node:assert/strict";
import { replaceWord, wordCount, wordFrequency } from "./words.mjs";

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

test("wordFrequency counts literal punctuation endpoints", () => {
  assert.equal(wordFrequency("C++ C++", "C++"), 2);
});

test("wordFrequency works on the supported Node runtime", () => {
  assert.doesNotThrow(() => wordFrequency("cat", "cat"));
});

test("wordFrequency excludes adjacent Unicode letters and numbers", () => {
  assert.equal(wordFrequency("猫cat猫 écat caté ٢cat cat٢ _cat cat_ 2cat cat2 cat CAT", "cat"), 2);
});

test("wordFrequency returns zero for an empty term", () => {
  assert.equal(wordFrequency(" cat ", ""), 0);
});

test("wordFrequency preserves surrounding literal spaces", () => {
  assert.equal(wordFrequency(" cat  cat ", " cat "), 2);
});

test("wordFrequency does not trim the supplied term", () => {
  assert.equal(wordFrequency("cat  cat  cat", " cat "), 1);
});

test("wordFrequency counts nonoverlapping literal occurrences", () => {
  assert.equal(wordFrequency(" . . ", " . "), 1);
});

test("wordFrequency matches Unicode words ignoring case", () => {
  assert.equal(wordFrequency("café CAFÉ", "café"), 2);
});

test("replaceWord replaces the word literally, ignoring case", () => {
  assert.equal(replaceWord("a.b A.B axb", "a.b", "x"), "x x axb");
});

test("replaceWord works on the supported Node runtime", () => {
  assert.doesNotThrow(() => replaceWord("cat CAT", "cat", "dog"));
});
