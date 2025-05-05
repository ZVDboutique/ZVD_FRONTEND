/* eslint-disable @typescript-eslint/no-explicit-any */
import { isArray, isEmpty } from "lodash";

export const handleRemoveUnderscore = (dataStr: any) => {
  const str = typeof dataStr === "string" ? dataStr : "";
  return str.replace("_", " ");
};

export const handleConvertCamelCase = (dataStr: string) => {
  const str = typeof dataStr === "string" ? dataStr : "";
  const wordsArray = str.split(/(?=[A-Z])/);
  const capitalizedWithSpace = wordsArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedWithSpace;
};

export const handleConvertToCapitalized = (dataStr: string) => {
  const str = typeof dataStr === "string" ? dataStr : "";
  const newStr = str.toLowerCase();
  const firstLetter = newStr.charAt(0);
  const remainingLetters = newStr.slice(1);
  const capitalizedWord = firstLetter.toUpperCase() + remainingLetters;

  return capitalizedWord;
};

export const removeUnderscoreAndFirstLetterCapital = (dataStr: string) => {
  const str = typeof dataStr === "string" ? dataStr : "";
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const handleReturnTripleDots = ({
  str,
  length = 35,
}: {
  str: string;
  length?: number;
}) => {
  const subString = str.substring(0, length);
  return str?.length > length + 5 ? `${subString}...` : subString;
};

export const handleReturnAutocompletePlaceholder = ({
  value,
  placeholder,
}: {
  value: any;
  placeholder: string;
}) => {
  if ((isArray(value) && value?.length > 0) || !isEmpty(value)) {
    return " ";
  }

  return placeholder;
};
