import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, ListagemDePessoas } from "../pages";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página Inicial",
        icon: "home",
        path: "/pagina-inicial",
      },
      {
        label: "Pessoas",
        icon: "people",
        path: "/pessoas",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      {/* <Route path="/cidades/detalhe/:id" element={<ListagemDeCidades />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
