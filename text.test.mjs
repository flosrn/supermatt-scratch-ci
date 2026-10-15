import { test } from "node:test";
import assert from "node:assert/strict";
import { countLiteral, highlight } from "./text.mjs";

test("highlight marks the term literally", () => {
  assert.equal(highlight("a.b and axb", "a.b"), "**a.b** and axb");
});

test("countLiteral counts the term literally, ignoring case", () => {
  assert.equal(countLiteral("A.b, a.b and axb", "a.b"), 2);
});

test("countLiteral is zero when the term is absent", () => {
  assert.equal(countLiteral("nothing here", "a+b"), 0);
});
