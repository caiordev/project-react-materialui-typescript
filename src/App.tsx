import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightThem } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightThem}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
