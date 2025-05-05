import { IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { BiSolidErrorAlt } from "react-icons/bi";
import { HiBadgeCheck } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { queryClient } from "./Utils/queryClient";
import { theme } from "./Utils/theme";
import { router } from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 6000,
            style: {
              boxShadow: `0 0 10px 2px #ddd`,
              fontWeight: 700,
              padding: "10px 10px",
              fontFamily: "Inter",
              maxWidth: "unset",
              fontSize: 12,
            },
            success: {
              icon: (
                <HiBadgeCheck
                  size={"26px"}
                  color={theme.palette.success.main}
                />
              ),
            },
            error: {
              icon: (
                <BiSolidErrorAlt
                  size={"26px"}
                  color={theme.palette.error.main}
                />
              ),
            },
          }}
        >
          {(t) => (
            <ToastBar toast={t} position="bottom-right">
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}

                  {t.type !== "loading" && (
                    <IconButton
                      style={{
                        padding: 4,
                      }}
                      onClick={() => toast.dismiss(t.id)}
                    >
                      <MdClose size={16} />
                    </IconButton>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
