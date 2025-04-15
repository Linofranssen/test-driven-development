import { play } from "./rock-paper-scissors";

describe("play", () => {

    test("sollte ein Unentschieden erkennen (Stein gegen Stein)", () => {
        expect(play("rock", "rock")).toBe(0);
    });

    test("sollte Spieler 1 gewinnen lassen (Stein gegen Schere)", () => {
        expect(play("rock", "scissors")).toBe(1);
    });

    test("sollte Spieler 2 gewinnen lassen (Papier gegen Stein)", () => {
        expect(play("rock", "paper")).toBe(2);
    });

    test("sollte Groß- und Kleinschreibung sowie Leerzeichen ignorieren", () => {
        expect(play(" ROCK ", " paper ")).toBe(2);
        expect(play("Scissors", "rock")).toBe(2);
        expect(play("paper", "SCISSORS")).toBe(2);
    });

    test("sollte eine Exception für ungültige Eingaben werfen", () => {
        expect(() => play("invalid", "rock")).toThrow("Ungültiger Spielzug!");
        expect(() => play("rock", "invalid")).toThrow("Ungültiger Spielzug!");
    });

    test("sollte alle weiteren Gewinnbedingungen korrekt bewerten", () => {
        expect(play("paper", "rock")).toBe(1);
        expect(play("scissors", "paper")).toBe(1);
        expect(play("scissors", "rock")).toBe(2);
        expect(play("rock", "paper")).toBe(2);
    });
});