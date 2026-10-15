import { test } from "node:test";
import assert from "node:assert/strict";
import { wordCount } from "./words.mjs";

test("wordCount splits on any whitespace", () => {
  assert.equal(wordCount(" a  b\tc\n"), 3);
});

test("wordCount of blank text is zero", () => {
  assert.equal(wordCount("   "), 0);
});
