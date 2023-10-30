import React from "react";
import { Layout } from "antd";
import CrearInventario from "../../components/Inventario/CrearInventario/CrearInventario";
import ListaInventario from "../../components/Inventario/LIstaInventario/ListaInventario";
import CrearGerente from "../../components/Gerentes/CrearGerente/CrearGerente";
import ListaGerente from "../../components/Gerentes/ListaGerente/ListaGerente";
import CrearFarmacia from "../../components/Farmacias/CrearFarmacia/CrearFarmacia";
import ListaFarmacia from "../../components/Farmacias/ListaFarmacias/ListaFarmacia";

import CargarInventario from '../Inventario/CargarInventario/CargarInventario';


const { Content } = Layout;

function ContentLayoutSuperAdmin({ current }) {
  return (
    <Content style={{ padding: "30px", background: "#fff" }}>
      {current === "10" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearInventario />
        </div>
      ) : current === "11" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaInventario />
        </div>
      ) : current === "12" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearFarmacia />
        </div>
      ) : current === "13" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaFarmacia />
        </div>
      ) : current === "14" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <CrearGerente />
        </div>
      ) : current === "15" ? (
        <div className="site-layout-background" style={{ minHeight: 100 }}>
          <ListaGerente />
        </div>
                ) : current === "22" ? (
                  <div className="site-layout-background" style={{ minHeight: 100 }}>
                    <CargarInventario />
                  </div>
                ) : (
        <div style={{}}>Aun no se ha creado las demas rutas</div>
      )}
    </Content>
  );
}

export default ContentLayoutSuperAdmin;
