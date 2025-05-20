import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Feed } from "./components/Feed";
import React, { useState } from "react";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import { ToastProvider } from "./contexts/ToastContext";
import './styles/toast.css';
import { AlertProvider } from './contexts/AlertContext';

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <AlertProvider>
      <ToastProvider>
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar />
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Sidebar setMode={setMode} mode={mode} />
              <Feed />
              <Rightbar />
            </Stack>
            <Add />
          </Box>
        </ThemeProvider>
      </ToastProvider>
    </AlertProvider>
  );
}

export default App;
