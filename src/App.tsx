import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./shared/forms/TraducoesYup";
import { Login, MenuLateral } from "./shared/components";
import { AppDreawerProvider, AuthProvider } from "./shared/contexts";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          <AppDreawerProvider>
            <BrowserRouter>
              <MenuLateral>
                <AppRoutes />
              </MenuLateral>
            </BrowserRouter>
          </AppDreawerProvider>
        </Login>
      </AppThemeProvider>
    </AuthProvider>
  );
};
