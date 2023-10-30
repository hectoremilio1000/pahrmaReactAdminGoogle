import { React, useState } from "react";
import logo from "../../assets/logopharmahogar.png";

import { Layout, Menu } from "antd";
import ItemsRoutes from "../../components/ItemRoutes/ItemRoutes";
import HeaderLayoutSuperAdmin from "./HeaderLayoutSuperAdmin";
import { MenuContext } from '../../contexts/MenuContext';
import ContentLayoutSuperAdmin from './ContentLayoutSuperAdmin';

const { Footer, Sider } = Layout;

function LayoutSuperAdmin({ onSignIn, onSignOut, user, role }) {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const cambiarComponent = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="50"
        style={{ minHeight: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
            padding: "15px 5px",
          }}
        >
          <img style={{ width: "60%" }} src={logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={current}
          onClick={cambiarComponent}
          items={ItemsRoutes}
        />
      </Sider>
      <Layout>
        <HeaderLayoutSuperAdmin
          collapsed={collapsed}
          toggle={toggle}
          onSignOut={onSignOut}
        />
        <MenuContext.Provider value={{ current, cambiarComponent }}>
          <ContentLayoutSuperAdmin current={current} />
        </MenuContext.Provider>
        <Footer style={{ textAlign: "center" }}>
          Todos los Derechos reservados ©2023 por Hilmora Optica
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutSuperAdmin;
