import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#C900FF",
  primaryBright: "#FF63F8",
  primaryDark: "#64007E",
  secondary: "#FFDB00",
  success: "#A7F438",
  warning: "#ff351f",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "linear-gradient(121deg, #fff0fe 0%, #f7d5ff 100%)",
  backgroundDisabled: "#9e84a4",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#d2b4d9",
  contrast: "#3a012d",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#f2f0e2",
  inputSecondary: "#e1dbb9",
  tertiary: "#C0FF1A",
  text: "#5D0479",
  textDisabled: "#7f7483",
  textSubtle: "#a680b4",
  disabled: "#a9a9a9",
  gradients: {
    bubblegum: "linear-gradient(76deg, #ffe8ee 0%, #f2e0f7 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #f2e0f7 0%, #ffe8ee 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #fed5e8 0%, #ff88a6 100%)",
    violet: "linear-gradient(180deg, #ebdcf0 0%, #eeb4ff 100%)",
    violetAlt: "linear-gradient(180deg, #d1b0db 0%, #d76bf9 100%)",
    gold: "linear-gradient(180deg, #e4ffa4 0%, #8afd32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
