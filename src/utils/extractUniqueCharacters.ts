export const extractUniqueCharacters = (text: string) =>
  new Set(
    text
      .toUpperCase()
      .split("")
      .filter((char) => char !== " ")
  );
