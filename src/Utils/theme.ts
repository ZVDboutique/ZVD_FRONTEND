import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    dark: {
      main: string;
    };
  }
  interface PaletteOptions {
    dark: {
      main: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

const paletteTheme = {
  palette: {
    primary: {
      main: "#B0DBF9",
    },
    secondary: {
      main: "#123449",
      light: "#123449",
      dark: "#123449",
      contrastText: "#123449",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    dark: {
      main: "#000000",
    },
  },
};

export const theme = createTheme({
  palette: paletteTheme?.palette,
  typography: {
    fontFamily: '"Manrope", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          fontFamily: "Inter !important",
          width: `-webkit-fill-available !important`,
          "& .MuiDataGrid-root .MuiDataGrid-columnHeader ": {
            outline: "none",
            borderTop: `solid 1px ${grey[200]}`,
            borderBottom: `solid 1px ${grey[200]}`,
            color: paletteTheme.palette.dark.main,
            background: "#EEF5FA",
            textTransform: "uppercase",
            fontSize: 12,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
