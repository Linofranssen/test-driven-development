export function play(player1: string, player2: string): number {
  const normalizedPlayer1 = player1.trim().toLowerCase();
  const normalizedPlayer2 = player2.trim().toLowerCase();

  if (!isValidMove(normalizedPlayer1) || !isValidMove(normalizedPlayer2)) {
    throw new Error("Ungültiger Spielzug!");
  }

  if (normalizedPlayer1 === normalizedPlayer2) {
    return 0;
  }

  if (
    (normalizedPlayer1 === "rock" && normalizedPlayer2 === "scissors") ||
    (normalizedPlayer1 === "paper" && normalizedPlayer2 === "rock") ||
    (normalizedPlayer1 === "scissors" && normalizedPlayer2 === "paper")
  ) {
    return 1;
  }

  return 2;
}

function isValidMove(move: string): boolean {
  return ["rock", "paper", "scissors"].includes(move);
}