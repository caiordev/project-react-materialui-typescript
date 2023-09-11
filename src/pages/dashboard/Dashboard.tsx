import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
