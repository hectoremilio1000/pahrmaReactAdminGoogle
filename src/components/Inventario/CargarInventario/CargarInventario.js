
import React, { useState } from 'react';
import { doc, setDoc, collection, deleteDoc, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebaseConfig';

import dataInicial from '../../../data/constantesclasif_UPDATED17.json';
import { Button } from 'antd';



const CargarInventario = () => {

    const transformarData = (dataInicial) => ({
        id: dataInicial.id,
        additionalDescription: dataInicial.additionalDescription,
        antibiotic: dataInicial.antibiotic,
        availableForPickup: dataInicial.availableForPickup,
        brandName: dataInicial.brandName,
        code: dataInicial.code,
        configurable: dataInicial.configurable,
        description: dataInicial.description,
        eans: dataInicial.eans,
        exclusionCode: dataInicial.exclusionCode || null,
        hasDiscountPrice: dataInicial.hasDiscountPrice,
        isLabProduct: dataInicial.isLabProduct,
        name: dataInicial.name,
        naturalHealth: dataInicial.naturalHealth,
        numberOfReviews: dataInicial.numberOfReviews,
        potentialPromotions: dataInicial.potentialPromotions,
        presentation: dataInicial.presentation,
        productReferences: dataInicial.productReferences,
        providerName: dataInicial.providerName,
        purchasable: dataInicial.purchasable,
        registrationDate: dataInicial.registrationDate,
        summary: dataInicial.summary,
        url: dataInicial.url,
        priceCurrencyIso: dataInicial.price?.currencyIso,
        priceFormattedValue: dataInicial.price?.formattedValue,
        priceType: dataInicial.price?.priceType,
        priceValue: dataInicial.price?.value,
        categories: dataInicial.categories,
        classifications: dataInicial.classifications || null,
        labInfoCode: dataInicial.laboratoryInfo?.code || null,
        labInfoMessage: dataInicial.laboratoryInfo?.message || null,
        stockIsValueRounded: dataInicial.stock?.isValueRounded,
        stockLevel: dataInicial.stock?.stockLevel,
        stockLevelStatus: dataInicial.stock?.stockLevelStatus,
        numero: dataInicial.numero,
        images: dataInicial.images,
        farmaciaID: "e89d3ab0-a997-4296-9cb6-b53e2d111c75"
    });

    const borrarProductosExistentes = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "productos"));
            const totalDocs = querySnapshot.size;

            if (totalDocs === 0) {
                console.log('No hay documentos en la colección productos.');
                return;
            }

            console.log(`Se encontraron ${totalDocs} documentos en la colección productos.`);

            for (const doc of querySnapshot.docs) {
                console.log(`Borrando el documento con ID: ${doc.id}`);
                await deleteDoc(doc.ref);
                console.log(`Documento con ID: ${doc.id} eliminado correctamente.`);
            }

            console.log('Todos los documentos han sido eliminados.');
        } catch (error) {
            console.error('Error al intentar borrar los documentos:', error);
        }
    };


    const cargarInventario = async () => {
        const maxProductos = Math.min(500, dataInicial.length);

        for (let i = 0; i < maxProductos; i++) {
            const producto = transformarData(dataInicial[i]);

            try {
                await setDoc(doc(firestore, "productos", producto.id), producto);
                console.log(`Producto ${i + 1} guardado correctamente en Firestore`);
            } catch (error) {
                console.error(`Error guardando el producto ${i + 1}:`, error);
            }
        }
    }

   

    

    return (
        <>
            Cargar inventario
            <Button onClick={cargarInventario}>Cargar Inventario</Button>

            <h4>Borrar Inventario</h4>
            <Button onClick={borrarProductosExistentes}>
                Borrar Inventario
            </Button>
        </>
     
    );
};

export default CargarInventario;
