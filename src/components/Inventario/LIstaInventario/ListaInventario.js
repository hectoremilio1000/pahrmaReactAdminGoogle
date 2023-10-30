import React, { useCallback, useEffect, useState } from "react";
import {
  Form,
  Input,
  Layout,
  Select,
  Table,
  Tag,
  Modal,
  message,
  // Image,
  Popconfirm,
  Button,
  Space,
} from "antd";

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebaseConfig';

function ListaInventario() {



  const [productos, setProductos] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Descripción Adicional',
      dataIndex: 'additionalDescription',
      key: 'additionalDescription',
    },
    {
      title: 'Precio',
      dataIndex: 'priceFormattedValue',
      key: 'priceFormattedValue',
    },
  ];

  useEffect(() => {
    const obtenerProductos = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'productos'));
      const productosArray = [];
      querySnapshot.forEach((doc) => {
        productosArray.push({ ...doc.data(), key: doc.id });
      });
      setProductos(productosArray);
    };
    obtenerProductos();
  }, []);

  console.log(productos);

    return (
  <>
        Lista Inventario
        <Table columns={columns} dataSource={productos} />
      </>
    )

}

export default ListaInventario;
