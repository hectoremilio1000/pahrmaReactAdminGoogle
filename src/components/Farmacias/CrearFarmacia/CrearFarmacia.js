import React, { useState, useContext } from "react";
// import { Button, Form, Input, message } from "antd";

// import { API, graphqlOperation } from "aws-amplify";

// import { useAuthContext } from "../../../contexts/AuthContext";
// import { MenuContext } from "../../../contexts/MenuContext";
// import { createFARMACIA } from "../../../graphql/mutations";

function CrearFarmacia() {
  // const { cambiarComponent } = useContext(MenuContext);
  // const authContext = useAuthContext();
  // const [nombreFarmacia, setNombreFarmacia] = useState("");

  // const onFinish = async () => {
  //   if (nombreFarmacia !== "") {
  //     try {
  //       const newFarmacia = {
  //         id:"e89d3ab0-a997-4296-9cb6-b53e2d111c75",
  //         nombre: nombreFarmacia,
  //         createdBy: authContext?.authEmail,
  //       };
  //       const result = await API.graphql(
  //         graphqlOperation(createFARMACIA, { input: newFarmacia })
  //       );
  //       console.log(result);
  //       message.success("La Farmacia se ha creado correctamente");
  //       cambiarComponent({ key: "13" });
  //       setNombreFarmacia("");
  //     } catch (error) {
  //       console.log(error);
  //       message.error("Hubo un error contacta al administrador");
  //     }
  //   } else {
  //     message.warning(
  //       "Te falta agregar campo del nombre para continuar con la creacion"
  //     );
  //   }
  // };

  return (
    <>
      <h1>CREAR FARMACIA</h1>
      {/* <Form onFinish={onFinish} layout="vertical" name="crearInventario">
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Form.Item
            label="Nombre"
            rules={[{ required: true, message: "Este campo es requerido" }]}
          >
            <Input
              value={nombreFarmacia}
              onChange={(e) => setNombreFarmacia(e.target.value)}
            />
          </Form.Item>
        </div>
        <div style={{ marginTop: 10 }}>
          <Button title="Save" htmlType="submit" type="primary">
            Guardar
          </Button>
        </div>
      </Form> */}
    </>
  );
}

export default CrearFarmacia;
