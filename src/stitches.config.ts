import { createStitches } from "@stitches/react";
import { hsluvToHex } from "hsluv";

interface Scale {
  bg: string;
  bgSecondary: string;
  disabled: string;
  alt: string;
  altSecondary: string;
  altTertiary: string;
  borderWeak: string;
  border: string;
  borderStrong: string;
  main: string;
  mainSecondary: string;
  mainTertiary: string;
  textWeak: string;
  text: string;
  onMain: string;
}

const purple: Scale = {
  bg: hsluvToHex([270, 90, 99.5]),
  bgSecondary: hsluvToHex([270, 90, 98.5]),

  disabled: hsluvToHex([270, 50, 97]),

  alt: hsluvToHex([270, 100, 96]),
  altSecondary: hsluvToHex([270, 100, 94]),
  altTertiary: hsluvToHex([270, 100, 92]),

  borderWeak: hsluvToHex([270, 50, 90]),
  border: hsluvToHex([270, 50, 85]),
  borderStrong: hsluvToHex([270, 50, 80]),

  main: hsluvToHex([270, 90, 48]),
  mainSecondary: hsluvToHex([270, 90, 44]),
  mainTertiary: hsluvToHex([270, 90, 40]),

  textWeak: hsluvToHex([270, 25, 45]),
  text: hsluvToHex([270, 100, 20]),

  onMain: "white",
};

const red: Scale = {
  bg: hsluvToHex([10, 90, 99.5]),
  bgSecondary: hsluvToHex([10, 90, 98.5]),

  disabled: hsluvToHex([10, 50, 97]),

  alt: hsluvToHex([10, 100, 96]),
  altSecondary: hsluvToHex([10, 100, 94]),
  altTertiary: hsluvToHex([10, 100, 92]),

  borderWeak: hsluvToHex([10, 50, 90]),
  border: hsluvToHex([10, 50, 85]),
  borderStrong: hsluvToHex([10, 50, 80]),

  main: hsluvToHex([10, 90, 48]),
  mainSecondary: hsluvToHex([10, 90, 44]),
  mainTertiary: hsluvToHex([10, 90, 40]),

  textWeak: hsluvToHex([10, 25, 45]),
  text: hsluvToHex([10, 100, 20]),

  onMain: "white",
};

const green: Scale = {
  bg: hsluvToHex([150, 50, 99.5]),
  bgSecondary: hsluvToHex([150, 50, 98.5]),

  disabled: hsluvToHex([150, 20, 98]),

  alt: hsluvToHex([140, 40, 96]),
  altSecondary: hsluvToHex([140, 40, 94]),
  altTertiary: hsluvToHex([140, 40, 92]),

  borderWeak: hsluvToHex([150, 30, 95]),
  border: hsluvToHex([150, 30, 88]),
  borderStrong: hsluvToHex([150, 30, 82]),

  main: hsluvToHex([150, 90, 52]),
  mainSecondary: hsluvToHex([150, 90, 44]),
  mainTertiary: hsluvToHex([150, 90, 40]),

  textWeak: hsluvToHex([140, 40, 49]),
  text: hsluvToHex([150, 100, 30]),

  onMain: "white",
};

const yellow: Scale = {
  bg: hsluvToHex([60, 90, 99.5]),
  bgSecondary: hsluvToHex([60, 90, 98.5]),

  disabled: hsluvToHex([60, 70, 97]),

  alt: hsluvToHex([60, 100, 96]),
  altSecondary: hsluvToHex([60, 100, 94]),
  altTertiary: hsluvToHex([60, 100, 92]),

  borderWeak: hsluvToHex([60, 50, 92]),
  border: hsluvToHex([60, 50, 85]),
  borderStrong: hsluvToHex([60, 50, 80]),

  main: hsluvToHex([60, 100, 83]),
  mainSecondary: hsluvToHex([60, 100, 80]),
  mainTertiary: hsluvToHex([60, 100, 77]),

  textWeak: hsluvToHex([60, 100, 49]),
  text: hsluvToHex([60, 100, 35]),

  onMain: "black",
};

const blue: Scale = {
  bg: hsluvToHex([250, 90, 99.5]),
  bgSecondary: hsluvToHex([250, 90, 98.5]),

  disabled: hsluvToHex([250, 75, 98]),

  alt: hsluvToHex([250, 100, 96]),
  altSecondary: hsluvToHex([250, 100, 94]),
  altTertiary: hsluvToHex([250, 100, 92]),

  borderWeak: hsluvToHex([250, 60, 93]),
  border: hsluvToHex([250, 50, 85]),
  borderStrong: hsluvToHex([250, 50, 80]),

  main: hsluvToHex([250, 90, 60]),
  mainSecondary: hsluvToHex([250, 90, 56]),
  mainTertiary: hsluvToHex([250, 90, 52]),

  textWeak: hsluvToHex([250, 25, 49]),
  text: hsluvToHex([250, 100, 20]),

  onMain: "white",
};

const plum: Scale = {
  bg: hsluvToHex([300, 90, 99.5]),
  bgSecondary: hsluvToHex([300, 90, 98.5]),

  disabled: hsluvToHex([300, 50, 97]),

  alt: hsluvToHex([300, 100, 96]),
  altSecondary: hsluvToHex([300, 100, 94]),
  altTertiary: hsluvToHex([300, 100, 92]),

  borderWeak: hsluvToHex([300, 50, 90]),
  border: hsluvToHex([300, 50, 85]),
  borderStrong: hsluvToHex([300, 50, 80]),

  main: hsluvToHex([300, 90, 48]),
  mainSecondary: hsluvToHex([300, 90, 44]),
  mainTertiary: hsluvToHex([300, 90, 40]),

  textWeak: hsluvToHex([300, 25, 45]),
  text: hsluvToHex([300, 100, 20]),

  onMain: "white",
};

const pink: Scale = {
  bg: hsluvToHex([350, 90, 99.5]),
  bgSecondary: hsluvToHex([350, 90, 98.5]),

  disabled: hsluvToHex([350, 50, 97]),

  alt: hsluvToHex([350, 100, 96]),
  altSecondary: hsluvToHex([350, 100, 94]),
  altTertiary: hsluvToHex([350, 100, 92]),

  borderWeak: hsluvToHex([350, 50, 90]),
  border: hsluvToHex([350, 50, 85]),
  borderStrong: hsluvToHex([350, 50, 80]),

  main: hsluvToHex([350, 90, 48]),
  mainSecondary: hsluvToHex([350, 90, 44]),
  mainTertiary: hsluvToHex([350, 90, 40]),

  textWeak: hsluvToHex([350, 25, 45]),
  text: hsluvToHex([350, 100, 20]),

  onMain: "white",
};

const gray: Scale = {
  bg: hsluvToHex([325, 0, 99.5]),
  bgSecondary: hsluvToHex([325, 0, 98.5]),

  disabled: hsluvToHex([325, 0, 97]),

  alt: hsluvToHex([325, 0, 96]),
  altSecondary: hsluvToHex([325, 0, 94]),
  altTertiary: hsluvToHex([325, 0, 92]),

  borderWeak: hsluvToHex([325, 0, 90]),
  border: hsluvToHex([325, 0, 85]),
  borderStrong: hsluvToHex([325, 0, 80]),

  main: hsluvToHex([325, 0, 48]),
  mainSecondary: hsluvToHex([325, 0, 44]),
  mainTertiary: hsluvToHex([325, 0, 40]),

  textWeak: hsluvToHex([325, 0, 45]),
  text: hsluvToHex([325, 0, 20]),

  onMain: "white",
};

export const colors = {
  gray,
  purple,
  red,
  green,
  yellow,
  blue,
  plum,
  pink,
};

export const { css, styled, globalCss } = createStitches({});

export const Box = styled("div", { boxSizing: "border-box" });

export const global = globalCss({
  body: {
    fontFamily: "Whitney SSm",
    fontSize: 14,
    fontWeight: 400,
    margin: 16,
  },
});
