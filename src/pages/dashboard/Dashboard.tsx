import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={<FerramentasDeDetalhe mostrarBotaoSalvarEVoltar />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
