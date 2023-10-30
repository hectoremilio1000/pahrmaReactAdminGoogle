import { React, useState, useEffect, useContext } from "react";
import { Form, message, Input, Select, Button } from "antd";
// import { API, graphqlOperation } from "aws-amplify";
// import * as mutations from "../../../graphql/mutations";
// import { MenuContext } from "../../../contexts/MenuContext";
// // uso el contexto del auth
// import { useAuthContext } from "../../../contexts/AuthContext";
// import { checkIfExists } from "../../../functions/user/checkIfExists";
// import { signUp } from "../../../functions/user/signUp";
// import GROUPS from "../../../constants/groups";
// import { listFARMACIAS } from "../../../graphql/queries";

const { Option } = Select;

function CrearGerente() {
  // const { cambiarComponent } = useContext(MenuContext);
  // const { userName: createdBy } = useAuthContext();

  // const [nombres, setNombres] = useState("");
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [farmaciaID, setFarmaciaID] = useState("");
  // const [password, setPassword] = useState("");
  // const confirmed = false;
  // const blocked = false;

  // // farmacias search
  // const [farmacias, setFarmacias] = useState([]);

  // const searchfarmacias = async () => {
  //   try {
  //     const result = await API.graphql(graphqlOperation(listFARMACIAS));
  //     setFarmacias(result.data.listFARMACIAS.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   searchfarmacias();
  // }, []);

  // const onFinish = async () => {
  //   console.log(Math.random().toString(36).slice(2, 10));
  //   console.log(
  //     nombres,
  //     userName,
  //     email,
  //     phoneNumber,
  //     farmaciaID,
  //     createdBy,
  //     phoneNumber
  //   );
  //   const exist = await checkIfExists(userName);
  //   if (exist) {
  //     message.error("El usuario existe");
  //     return;
  //   }
  //   try {
  //     const createdGerente = await API.graphql(
  //       graphqlOperation(mutations.createGERENTE, {
  //         input: {
  //           nombres,
  //           userName,
  //           email,
  //           phoneNumber,
  //           farmaciaID,
  //           confirmed,
  //           blocked,
  //           // password,
  //           createdBy,
  //         },
  //       })
  //     );
  //     const profile = createdGerente?.data?.createGERENTE?.id;
  //     const address = farmaciaID;
  //     if (profile && address) {
  //       signUp({
  //         userName,
  //         email,
  //         nombres,
  //         phoneNumber,
  //         profile,
  //         address,
  //         password,
  //         groupName: GROUPS.GERENTE,
  //       });
  //     }
  //     message.success("El Gerente De Farnacia se ha creado correctamente");
  //     cambiarComponent({ key: "15" });
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Hubo un error contacta al administrador");
  //   }
  // };

  return (
    <>
     Crear Gerente
    </>
  )
}
//     <Form onFinish={onFinish} layout="vertical">
//       <div
//         style={{
//           display: "grid",
//           gap: "8px",
//           gridTemplateColumns: "repeat(2, 1fr)",
//         }}
//       >
//         <Form.Item
//           label="Nombres"
//           name="nombres"
//           rules={[{ required: true, message: "Este campo es requerido" }]}
//         >
//           <Input
//             placeholder="Ingresa los nombres para el usuario"
//             value={nombres}
//             onChange={(e) => setNombres(e.target.value)}
//           />
//         </Form.Item>
//         <Form.Item
//           label="farmacia"
//           name="farmacia"
//           rules={[{ required: true, message: "Este campo es requerido" }]}
//         >
//           <Select
//             // defaultValue={farmaciaID}
//             onSelect={(e) => setFarmaciaID(e)}
//             placeholder="Select una farmacia"
//           >
//             {farmacias.map((farmacia) => {
//               return (
//                 <Option key={farmacia.id} value={farmacia.id}>
//                   {farmacia.nombre}
//                 </Option>
//               );
//             })}
//           </Select>
//         </Form.Item>
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: "Este campo es requerido" }]}
//         >
//           <Input
//             placeholder="Ingresa un username para el usuario"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </Form.Item>
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Este campo es requerido" }]}
//         >
//           <Input
//             placeholder="Ingresa un username para el usuario"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Item>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: "Este campo es requerido" }]}
//         >
//           <Input
//             placeholder="Ingresa el email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Item>
//         <Form.Item
//           label="Numero Telefono"
//           name="phoneNumber"
//           rules={[
//             {
//               pattern: new RegExp(
//                 /^[+]{1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g
//               ),
//               message: "Please add country code and check the number carefully",
//             },
//           ]}
//         >
//           <Input
//             placeholder="Ingresa el numero de telefono"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </Form.Item>
//       </div>
//       <div style={{ marginTop: 10 }}>
//         <Button title="Save" htmlType="submit" type="primary">
//           Guardar
//         </Button>
//       </div>
//     </Form>


export default CrearGerente;
