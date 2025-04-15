import { calcPoints, possibleCheckout } from './darts';

describe("Darts-Spiel 501", () => {
  describe("calcPoints", () => {
    test("berechnet Punkte für einfache Treffer", () => {
      expect(calcPoints("1 20 1 15 1 10")).toBe(45);
    });

    test("berechnet Punkte für Double-Treffer", () => {
      expect(calcPoints("2 20 1 15 1 10")).toBe(65);
    });

    test("berechnet Punkte für Triple-Treffer", () => {
      expect(calcPoints("3 20 1 15 1 10")).toBe(85);
    });

    test("berechnet Punkte für gemischte Treffer", () => {
      expect(calcPoints("3 20 2 15 1 10")).toBe(100);
    });

    test("ignoriert ungültige Eingaben (fehlende Werte)", () => {
      expect(calcPoints("3 20 1")).toBe(60);
    });

    test("ignoriert Treffer außerhalb des Boards", () => {
      expect(calcPoints("3 21 1 15 1 10")).toBe(25);
    });
  });

  describe("possibleCheckout", () => {
    test("findet ein mögliches Double-Checkout", () => {
      expect(possibleCheckout(24)).toBe("Double 12");
    });

    test("gibt null zurück, wenn kein Double-Checkout möglich ist (ungerade Punktzahl)", () => {
      expect(possibleCheckout(31)).toBe(null);
    });

    test("gibt null zurück, wenn kein Double-Checkout möglich ist (Punktzahl zu hoch)", () => {
      expect(possibleCheckout(60)).toBe(null);
    });

    test("gibt Double Bull zurück", () => {
      expect(possibleCheckout(50)).toBe("Double Bull");
    });
  });
});