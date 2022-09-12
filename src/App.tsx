import { globalCss } from "@stitches/react";
import { Box, colors, global } from "./stitches.config";

function App() {
  global();
  return (
    <Box css={{ display: "grid", gap: 16 }}>
      <Box css={{ display: "grid", gap: 8 }}>
        <Box
          css={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "1fr",
            gap: 16,
            fontSize: 9,
            fontFamily: "Menlo",
          }}
        >
          {[
            "bg",
            "bgSecondary",
            "disabled",
            "alt",
            "altSecondary",
            "altTertiary",
            "borderWeak",
            "border",
            "borderStrong",
            "main",
            "mainSecondary",
            "mainTertiary",
            "textWeak",
            "text",
            "onMain",
          ].map((_, i) => (
            <Box>{i + 1}</Box>
          ))}
        </Box>
        <Scale hue="gray" />
        <Scale hue="purple" />
        <Scale hue="red" />
        <Scale hue="green" />
        <Scale hue="yellow" />
        <Scale hue="blue" />
        <Scale hue="plum" />
        <Scale hue="pink" />
        <Box
          css={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "1fr",
            gap: 16,
            fontSize: 9,
            fontFamily: "Menlo",
          }}
        >
          {[
            "bg",
            "bgSecondary",
            "disabled",
            "alt",
            "altSecondary",
            "altTertiary",
            "borderWeak",
            "border",
            "borderStrong",
            "main",
            "mainSecondary",
            "mainTertiary",
            "textWeak",
            "text",
            "onMain",
          ].map((n, i) => (
            <Box>
              <Box>{n}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box css={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Test hue="gray" />
        <Test hue="purple" />
        <Test hue="red" />
        <Test hue="green" />
        <Test hue="yellow" />
        <Test hue="blue" />
        <Test hue="plum" />
        <Test hue="pink" />
      </Box>
    </Box>
  );
}

function Scale({ hue }: { hue: keyof typeof colors }) {
  const color = colors[hue];
  return (
    <Box
      css={{
        display: "grid",
        gridAutoFlow: "column",
        gap: 16,
      }}
    >
      {Object.values(color).map((c) => (
        <Box
          key={c}
          css={{
            background: c,
            height: 40,
          }}
        />
      ))}
    </Box>
  );
}

function Test({ hue }: { hue: keyof typeof colors }) {
  const color = colors[hue];
  return (
    <Box
      css={{
        display: "grid",
        gap: 16,
        border: `solid 1px ${color.border}`,
        padding: 16,
      }}
    >
      <Box css={{ display: "flex", gap: 8 }}>
        <Box
          css={{
            background: color.bg,
            height: 50,
            width: 200,
          }}
        />
        <Box
          css={{
            background: color.bgSecondary,
            height: 50,
            width: 200,
          }}
        />
      </Box>

      <Box css={{ borderTop: `solid 1px ${color.borderWeak}` }} />
      <Box css={{ borderTop: `solid 1px ${color.border}` }} />
      <Box css={{ borderTop: `solid 1px ${color.borderStrong}` }} />

      <Box css={{ display: "flex", gap: 8 }}>
        <Box
          as="button"
          css={{
            border: 0,
            font: "inherit",
            display: "inline-flex",
            padding: "0 1rem",
            height: "2rem",
            placeItems: "center",
            background: color.alt,
            color: color.text,
            borderRadius: 6,

            "&:hover": {
              background: color.altSecondary,
            },
            "&:active": {
              background: color.altTertiary,
            },
          }}
        >
          Hello world
        </Box>
        <Box
          as="button"
          css={{
            border: 0,
            font: "inherit",
            display: "inline-flex",
            padding: "0 1rem",
            height: "2rem",
            placeItems: "center",
            background: color.main,
            color: color.onMain,
            borderRadius: 6,

            "&:hover": {
              background: color.mainSecondary,
            },
            "&:active": {
              background: color.mainTertiary,
            },
          }}
        >
          Hello world
        </Box>
        <Box
          as="button"
          disabled={true}
          css={{
            border: `1px solid ${color.borderWeak}`,
            font: "inherit",
            display: "inline-flex",
            padding: "0 1rem",
            height: "2rem",
            placeItems: "center",
            background: color.disabled,
            color: color.textWeak,
            borderRadius: 6,
            cursor: "not-allowed",
          }}
        >
          Hello world
        </Box>
      </Box>

      <Box css={{ display: "flex", gap: 8 }}>
        <Box css={{ color: color.textWeak }}>Hello world</Box>
        <Box css={{ color: color.main }}>Hello world</Box>
        <Box css={{ color: color.text }}>Hello world</Box>
      </Box>
    </Box>
  );
}

export default App;
