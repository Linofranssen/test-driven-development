import { formatDuration } from "./duration";

describe("formatDuration", () => {

    test("sollte 0s für 0 Sekunden zurückgeben", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("sollte einfache Sekunden formatieren", () => {
        expect(formatDuration(33)).toBe("33s");
    });

    test("sollte Minuten und Sekunden formatieren", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });

    test("sollte Stunden formatieren", () => {
      expect(formatDuration(3600)).toBe("1h");
    });

    test("sollte Stunden, Minuten und Sekunden formatieren", () => {
      expect(formatDuration(3999)).toBe("1h6m39s");
    });

    test("sollte bei negativen Zahlen einen Error werfen", () => {
      expect(() => formatDuration(-1)).toThrow("Sekundenanzahl muss nicht negativ sein.");
    });

    test("sollte Nachkommastellen durch Rundung eliminieren", () => {
        expect(formatDuration(123.5)).toBe("2m4s");
        expect(formatDuration(123.4)).toBe("2m3s");
    });
});