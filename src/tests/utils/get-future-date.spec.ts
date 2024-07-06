import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test("Increases date with one year/ Aumenta a data em um ano", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-07-05`).getFullYear()).toEqual(2025);
});
