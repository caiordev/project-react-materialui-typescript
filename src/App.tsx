import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./shared/forms/TraducoesYup";
import { MenuLateral } from "./shared/components";
import { AppDreawerProvider } from "./shared/contexts";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDreawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppDreawerProvider>
    </AppThemeProvider>
  );
};
