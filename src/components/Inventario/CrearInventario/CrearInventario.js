import React from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../../firebaseConfig';
import { Button, Form, Input, Switch, DatePicker, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';  // Para generar IDs únicos

const CrearComponente = () => {
  const [form] = Form.useForm();

  const guardarProducto = async (values) => {
    const producto = {
      id: uuidv4(),
      ...values,
      farmaciaID: "e89d3ab0-a997-4296-9cb6-b53e2d111c75",
    };

    try {
      await setDoc(doc(firestore, "productos", producto.id), producto);
      console.log("Producto guardado correctamente en Firestore");
    } catch (error) {
      console.error("Error guardando el producto:", error);
    }
  };

  return (
    <Form
      form={form}
      onFinish={guardarProducto}
      layout="vertical"
    >
      <Form.Item
        name="additionalDescription"
        label="Descripción Adicional"
        rules={[{ required: true, message: 'Por favor ingrese una descripción adicional' }]}
      >
        <Input placeholder="Candesartán cilexetilo 8 MG" />
      </Form.Item>

      <Form.Item
        name="antibiotic"
        label="Antibiótico"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item
        name="brandName"
        label="Nombre de Marca"
        rules={[{ required: true, message: 'Por favor ingrese un nombre de marca' }]}
      >
        <Input placeholder="Blopress" />
      </Form.Item>

      {/* Aquí van los campos adicionales */}
      <Form.Item
        name="code"
        label="Código"
        rules={[{ required: true, message: 'Por favor ingrese un código' }]}
      >
        <Input placeholder="000000000000030192" />
      </Form.Item>

      <Form.Item
        name="isLabProduct"
        label="Es producto de laboratorio"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item
        name="name"
        label="Nombre del Producto"
        rules={[{ required: true, message: 'Por favor ingrese un nombre para el producto' }]}
      >
        <Input placeholder="Blopress 28 Tabletas Caja" />
      </Form.Item>

      <Form.Item
        name="priceCurrencyIso"
        label="Moneda"
        rules={[{ required: true, message: 'Por favor seleccione una moneda' }]}
      >
        <Select>
          <Select.Option value="MXN">MXN</Select.Option>
          {/* Agregar otras monedas si es necesario */}
        </Select>
      </Form.Item>

      <Form.Item
        name="priceValue"
        label="Precio"
        rules={[{ required: true, message: 'Por favor ingrese un precio' }]}
      >
        <Input type="number" placeholder="948.5" />
      </Form.Item>

      <Form.Item
        name="providerName"
        label="Nombre del Proveedor"
        rules={[{ required: true, message: 'Por favor ingrese un nombre de proveedor' }]}
      >
        <Input placeholder="Abbott" />
      </Form.Item>

      {/* Puedes continuar agregando más campos según necesites */}

      <Form.Item>
        <Button type="primary" htmlType="submit">Guardar Producto</Button>
      </Form.Item>
    </Form>
  );
};

export default CrearComponente;
