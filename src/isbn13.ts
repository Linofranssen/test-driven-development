export function isValid(isbn) {
  if (typeof isbn !== "string") {
    return false;
  }

  const cleanedIsbn = isbn.replace(/[- ]/g, "");

  if (cleanedIsbn.length !== 13) {
    return false;
  }

  if (!/^\d{13}$/.test(cleanedIsbn)) {
    return false;
  }

  if (cleanedIsbn === "") {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanedIsbn[i]) * (i % 2 === 0 ? 1 : 3);
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === parseInt(cleanedIsbn[12]);
}