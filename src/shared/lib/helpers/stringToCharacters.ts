import { CharacterDataObject } from "@/shared/UI/ElectricChar";

export const stringToCharacters = (text: string, color?: string): CharacterDataObject[] => {
  return text.split("").map((char) => ({ text: char, color }));
};
