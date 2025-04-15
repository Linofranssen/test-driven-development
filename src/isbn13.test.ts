import { isValid } from "./isbn13";

describe("isValid", () => {
  it("sollte true zurückgeben, wenn die ISBN-13 gültig ist", () => {
    expect(isValid("9783866801929")).toBe(true);
    expect(isValid("978-3-86680-192-9")).toBe(true);
    expect(isValid("978 3 86680 192 9")).toBe(true);
  });

  it("sollte false zurückgeben, wenn die ISBN-13 ungültig ist", () => {
    expect(isValid("9783866801928")).toBe(false);
    expect(isValid("978-3-86680-192-0")).toBe(false);
    expect(isValid("978 3 86680 192 0")).toBe(false);
  });

  it("sollte false zurückgeben, wenn die ISBN-13 nicht 13 Zeichen lang ist", () => {
    expect(isValid("978386680192")).toBe(false);
    expect(isValid("97838668019291")).toBe(false);
  });

  it("sollte false zurückgeben, wenn die ISBN-13 ungültige Zeichen enthält", () => {
    expect(isValid("978386680192A")).toBe(false);
    expect(isValid("978-3-86680-192-?")).toBe(false);
  });

  it("sollte false für leere Strings zurueckgeben", () => {
    expect(isValid("")).toBe(false);
  });
});