// *Mau30045*
const categories = `[
    {
        "id": "4d5cf119-da76-4caf-9185-4afb1ed82af4",
        "name": "Víveres",
        "place": 1
    },
    {
        "id": "541d2454-ef46-4a75-a576-fc557fe9115d",
        "name": "Charcutería",
        "place": 2
    },
    {
        "id": "1e75b6d1-2d5e-4d8f-9a41-0c130dec052d",
        "name": "Nevera",
        "place": 3
    },
    {
        "id": "aed2c0a4-e4cc-4049-b7ca-a5be45f10f20",
        "name": "Verduras",
        "place": 4
    },
    {
        "id": "88744ed2-7543-41f8-acea-42c2a4e00ac3",
        "name": "Chucherías",
        "place": 5
    },
    {
        "id": "01affef6-8cba-4596-8035-b7f35aa28e61",
        "name": "Higiene",
        "place": 6
    },
    {
        "id": "f5c2fb42-7c98-4b27-921d-d57be8d3e36b",
        "name": "Limpieza",
        "place": 7
    },
    {
        "id": "229d6cea-103a-4cf8-ba60-955d6abd8312",
        "name": "Hogar",
        "place": 8
    },
    {
        "id": "63cf2851-5cfb-499e-8920-f83a19fdadae",
        "name": "Fiestas",
        "place": 9
    },
    {
        "id": "8dd49e6b-527d-4f82-a3a7-22b7d1b0cb47",
        "name": "Belleza",
        "place": 10
    },
    {
        "id": "c3e2c204-93ba-4a8a-842a-0d3ecbca8cc2",
        "name": "Panadería",
        "place": 11
    }
]`
const products = `[
    {
        "id": "d1e76bb8-0192-4022-a43d-5a7849d529c7",
        "name": "Arroz Don Paco",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 0.9777,
        "barcode": ""
    },
    {
        "id": "300e08ba-295d-4a71-a233-6833beb79df8",
        "name": "Arroz Masia",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "b5d310d1-ccd3-4ef4-81da-c000ca76cd3c",
        "name": "Azúcar",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.3,
        "barcode": ""
    },
    {
        "id": "f9875ca4-07d1-4b03-83ba-57b747391dae",
        "name": "Pasta Savana Larga 1Kg",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 15,
        "price": 1.35,
        "barcode": ""
    },
    {
        "id": "a24b05c2-4b90-4ae5-9e60-02ad19de814d",
        "name": "Pasta Savana Corta 500g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 0.72,
        "barcode": ""
    },
    {
        "id": "0d75055d-9404-46d0-ac97-8c80e78a02ed",
        "name": "Harina PAN",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 60,
        "price": 1.2666,
        "barcode": ""
    },
    {
        "id": "0af057b0-51c1-45e3-ba53-29c2773b9f39",
        "name": "Aceite Coamo 900ml",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 0,
        "price": 2.4,
        "barcode": ""
    },
    {
        "id": "8b37d6e0-ce64-4a03-88cf-744e18e7ed81",
        "name": "Café Grano de Oro 100g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 0.9,
        "barcode": ""
    },
    {
        "id": "2baabda8-7012-4fea-af05-758efaf14667",
        "name": "Café Grano de Oro 250g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.6,
        "barcode": ""
    },
    {
        "id": "d621b375-6b16-490c-b951-50d70fb67c1d",
        "name": "Café San Benito 100g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 50,
        "price": 0.75,
        "barcode": ""
    },
    {
        "id": "74807bdb-b191-41c3-8f95-e80cd57d8869",
        "name": "Mantequilla Nelly 250g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "3744ecc1-f196-4a66-b67c-6ce7bb963d09",
        "name": "Mantequilla Nelly 500g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.9333,
        "barcode": ""
    },
    {
        "id": "2eb57ff7-5a90-49c8-9a45-9184f686adb3",
        "name": "Mantequilla Mavesa 250g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.3333,
        "barcode": ""
    },
    {
        "id": "519ed88a-c39e-4905-b73d-2839a5aee940",
        "name": "Mantequilla Mavesa 500g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 2.5,
        "barcode": ""
    },
    {
        "id": "3fb1f1b0-b4a2-4c86-a788-2686c1356195",
        "name": "Sal",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 0.3555,
        "barcode": ""
    },
    {
        "id": "f326e8ba-8331-40e5-bbf7-53c0e41e192d",
        "name": "Twisti Keso (Cheddar)",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 20,
        "price": 2.6,
        "barcode": ""
    },
    {
        "id": "d8029c6d-2b28-49fb-bed6-d289b622d933",
        "name": "Harina Doña María (Trigo Leudante)",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 29,
        "price": 1.2222,
        "barcode": ""
    },
    {
        "id": "5c3f1436-16d6-4024-8cbb-439f9e42077b",
        "name": "Harina Finna 1Kg (Trigo Leudante)",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.2,
        "barcode": ""
    },
    {
        "id": "5b18961c-aa98-4572-8bbb-7dc614906d3c",
        "name": "Salsa de Soya 150ml (China)",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.5,
        "barcode": ""
    },
    {
        "id": "7e3d649c-aeff-4d67-82c4-5c7b9a68a073",
        "name": "Carne",
        "messure": "Kg",
        "category": "Charcutería",
        "cost": 0,
        "quantity": 50,
        "price": 4.0625,
        "barcode": ""
    },
    {
        "id": "56029ddf-a391-4571-8159-85e581e2b8b5",
        "name": "Queso",
        "messure": "Kg",
        "category": "Nevera",
        "cost": 0,
        "quantity": 49.5,
        "price": 3.7777,
        "barcode": ""
    },
    {
        "id": "9bd0e133-aad5-4153-8436-5f8111656659",
        "name": "Leche Dobon 200g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 1.5111,
        "barcode": ""
    },
    {
        "id": "9dc221c5-9adb-4e4f-8517-08ccfe8b5382",
        "name": "Leche Dobon 400g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 2.8444,
        "barcode": ""
    },
    {
        "id": "9fdfd0b3-0346-4a4a-95ad-608aa68e4920",
        "name": "Trifogón",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 100,
        "price": 0.1111,
        "barcode": ""
    },
    {
        "id": "063f2324-6ec0-4842-8e92-ac142888107c",
        "name": "Repollo",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 30,
        "price": 0.5777,
        "barcode": ""
    },
    {
        "id": "04e1dce5-d013-4761-913f-9919ff34694e",
        "name": "Lechuga",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 1.1555,
        "barcode": ""
    },
    {
        "id": "e5e8fb58-0f5f-4e14-bc59-0660375aa01f",
        "name": "Pimentón",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 1.4888,
        "barcode": ""
    },
    {
        "id": "260a05bf-a526-4e48-aed8-a8446ea5769c",
        "name": "Ají",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 1.0222,
        "barcode": ""
    },
    {
        "id": "37ac7f2f-ea7f-4eec-9f00-75be85e40c28",
        "name": "Cilantro 100g",
        "messure": "",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 0.2222,
        "barcode": ""
    },
    {
        "id": "c823f582-8fff-4a80-ad2f-7d19e3ca3884",
        "name": "Papa",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 0.8888,
        "barcode": ""
    },
    {
        "id": "8716fc64-0f3a-4cb6-aba1-92bd06061579",
        "name": "Aguacate",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 47,
        "price": 0.7333,
        "barcode": "",
        "formula": {
            "id": ""
        },
        "ingredients": []
    },
    {
        "id": "a9c421a4-cf13-4de5-8999-90b6270894c5",
        "name": "Zanahoria",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 0.8,
        "barcode": ""
    },
    {
        "id": "52d66fd8-f68e-4b3d-b973-40e1f420f8a0",
        "name": "Cebolla Redonda | Larga",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 0.8222,
        "barcode": ""
    },
    {
        "id": "caff79fe-3246-4ea0-a766-375792f2da8b",
        "name": "Tomate",
        "messure": "Kg",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 0.8444,
        "barcode": ""
    },
    {
        "id": "fa534c4b-3da5-430e-a009-35d92767e935",
        "name": "Plátanos",
        "messure": "",
        "category": "Verduras",
        "cost": 0,
        "quantity": 50,
        "price": 0.4444,
        "barcode": ""
    },
    {
        "id": "73e77c55-7f02-4c61-b2c6-2d2d48404425",
        "name": "Crema Nata",
        "messure": "Kg",
        "category": "Nevera",
        "cost": 0,
        "quantity": 50,
        "price": 3.0444,
        "barcode": ""
    },
    {
        "id": "1fca0e5a-be8e-47fa-aab9-5d22c1234c5e",
        "name": "Chorizo Ahumado",
        "messure": "Kg",
        "category": "Charcutería",
        "cost": 0,
        "quantity": 50,
        "price": 8.4444,
        "barcode": ""
    },
    {
        "id": "965a04cb-d34a-42c7-a754-6ab63898a568",
        "name": "Salchichas de Pollo",
        "messure": "Kg",
        "category": "Charcutería",
        "cost": 0,
        "quantity": 50,
        "price": 3,
        "barcode": ""
    },
    {
        "id": "aa326f26-16eb-4c52-a96f-2ec2fd0a3ea9",
        "name": "Pechugas de Pollo",
        "messure": "Kg",
        "category": "Charcutería",
        "cost": 0,
        "quantity": 50,
        "price": 5.2222,
        "barcode": ""
    },
    {
        "id": "4daf17c3-531e-4d63-8c96-74a9919f7e0a",
        "name": "Recorte de Pollo (Picado) | Muslo",
        "messure": "Kg",
        "category": "Charcutería",
        "cost": 0,
        "quantity": 50,
        "price": 3.1111,
        "barcode": ""
    },
    {
        "id": "34f11cb3-5fed-4e64-be7b-1d0bc2e3db23",
        "name": "Galletas Radical",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.6,
        "barcode": ""
    },
    {
        "id": "9df22e55-60fe-4a38-8a01-dd6ae6194c63",
        "name": "Galletas Festival",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.6,
        "barcode": ""
    },
    {
        "id": "686bde53-bd9e-4238-b1f3-acf5249eb898",
        "name": "Galleta Club Social (Unidad)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.3111,
        "barcode": ""
    },
    {
        "id": "df2ec5b6-455f-444d-9ada-3891288a2315",
        "name": "Galleta Belvita Hony | Kraker",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.3333,
        "barcode": ""
    },
    {
        "id": "54891028-41ad-4419-81d6-e164de3ed83d",
        "name": "Galleta María (Unidad)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.1777,
        "barcode": ""
    },
    {
        "id": "9ea31714-868d-4b0c-82e7-04319d1899ae",
        "name": "Savoy - Chocolate de Barra",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "2890908a-d31f-4b43-ba7c-c66e44e35fec",
        "name": "Caramelos Garoto (Brasil)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.2222,
        "barcode": ""
    },
    {
        "id": "a5791599-b486-486b-aee8-697d71b510f9",
        "name": "Samba",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 25,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "b5b682f9-906d-4d92-877a-ebf8ca54095d",
        "name": "Cocosette",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 25,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "7b6885fb-d6d7-455e-990a-68acabcdb0b9",
        "name": "Capri Waffles",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.2222,
        "barcode": ""
    },
    {
        "id": "690a00e8-4c63-487f-911f-281925a43f42",
        "name": "Bianchi Choco Snacks",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 30,
        "price": 0.7,
        "barcode": ""
    },
    {
        "id": "cef2d60e-ddd2-4f32-9651-4f1842f3866d",
        "name": "Tostón Grande",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 30,
        "price": 0.6666,
        "barcode": ""
    },
    {
        "id": "65748e4c-62a9-4b0b-819d-73c03e996e29",
        "name": "Caramelos Chaos",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 150,
        "price": 0.0666,
        "barcode": ""
    },
    {
        "id": "b5a63d43-0cf3-4ef5-b807-f446ff7a57e2",
        "name": "Qualimax - Fructus",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 50,
        "price": 0.1888,
        "barcode": ""
    },
    {
        "id": "d92c55b0-9490-45f1-9288-68179b97c370",
        "name": "Sobre Color",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 30,
        "price": 0.1111,
        "barcode": ""
    },
    {
        "id": "c80ea934-498a-491e-a817-77264abd94be",
        "name": "Cubito Comarrico",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 200,
        "price": 0.1888,
        "barcode": ""
    },
    {
        "id": "14cb2989-a40f-43e4-81ac-34e6dca59168",
        "name": "Cubito Maggi",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 200,
        "price": 0.2666,
        "barcode": ""
    },
    {
        "id": "ad4d1916-8075-457c-8087-81f97af43b76",
        "name": "Max Coco",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 30,
        "price": 0.6222,
        "barcode": ""
    },
    {
        "id": "17d16f3f-a18e-4faf-8145-e7c780e38187",
        "name": "Crema Dental Fortident",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 30,
        "price": 0.7,
        "barcode": ""
    },
    {
        "id": "b10bcac2-e52e-46a1-940a-5495040261ef",
        "name": "Nucita Colombina",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 30,
        "price": 0.2222,
        "barcode": ""
    },
    {
        "id": "14f5e6bc-08d2-493f-ac4c-d56b54a02de1",
        "name": "Savoy - Taza Postres",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 5,
        "price": 5.4,
        "barcode": ""
    },
    {
        "id": "17d1df22-4850-4d2d-93d4-3039a0971e05",
        "name": "Tartello",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 50,
        "price": 0.5111,
        "barcode": ""
    },
    {
        "id": "38e6987f-41bf-409a-b10a-8482ae2baffa",
        "name": "Jugo Justy - 1.5L",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 24,
        "price": 0.8,
        "barcode": ""
    },
    {
        "id": "b261a925-d438-435b-80ae-768acc8addd2",
        "name": "Coca Cola 1.25L Retornable",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 24,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "62d6de9d-68af-473b-b238-c3fe2817ba04",
        "name": "Coca Cola 2L",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 16,
        "price": 2,
        "barcode": ""
    },
    {
        "id": "87f75171-7ff7-40e6-b928-7720856fa477",
        "name": "Coca Cola 350ml | Chinotto | Frescolita",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 48,
        "price": 0.6222,
        "barcode": ""
    },
    {
        "id": "a431a541-5c06-4895-b23d-0c62380ff970",
        "name": "Pepsi 2.5L",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 24,
        "price": 1.6444,
        "barcode": ""
    },
    {
        "id": "3504c6ce-b7eb-49fd-a0a4-5fa18c6f3d55",
        "name": "Papitas 100g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 0.5111,
        "barcode": ""
    },
    {
        "id": "0a7281cf-0b34-450b-9e72-3efbbef26d83",
        "name": "Yesqueros",
        "messure": "",
        "category": "Hogar",
        "cost": 0,
        "quantity": 24,
        "price": 0.4,
        "barcode": ""
    },
    {
        "id": "50584d47-8e38-4b3e-96ca-c3c19c1e87dc",
        "name": "Coca Cola 1L",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 24,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "fef8f7f7-87ca-4900-bc30-2da62439634b",
        "name": "Mayonesa Mavesa 175g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.5,
        "barcode": ""
    },
    {
        "id": "efcb9fc6-f8fd-4845-aa2d-3deb6f97d85f",
        "name": "Panela Dulce",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 0.4,
        "barcode": ""
    },
    {
        "id": "70e3476e-7509-44b3-9bd1-f79075536390",
        "name": "Mayonesa Mavesa 445g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 3.3,
        "barcode": ""
    },
    {
        "id": "7ac40a68-3b05-4216-b070-0fc59a812ae8",
        "name": "Vinagre Heinz 500ml",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.2,
        "barcode": ""
    },
    {
        "id": "bd25fcc6-7dd3-491f-9266-9fff0e4417bb",
        "name": "Vinagre Mavesa 500ml",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.3,
        "barcode": ""
    },
    {
        "id": "43f93ba6-716e-4b4d-95da-420e352bcde0",
        "name": "Salsa Tomate Pampero 198g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "a9d0563b-f312-4488-9e5e-d848a6c57f09",
        "name": "Salsa Tomate Pampero 397g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 1.5333,
        "barcode": ""
    },
    {
        "id": "f4d6d41e-f01c-409b-ab62-773285ca358e",
        "name": "Salsa 57 Heinz",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 1.5333,
        "barcode": ""
    },
    {
        "id": "311958cc-6e37-4f5b-9a01-947f08c8c21d",
        "name": "Caramelos Bubbaloo",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 24,
        "price": 0.1777,
        "barcode": ""
    },
    {
        "id": "227cf53a-0d38-4b18-ab22-46b83a5ec3e5",
        "name": "Dopingo Peanut",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 24,
        "price": 0.2222,
        "barcode": ""
    },
    {
        "id": "b20a537c-55b5-41c4-ac61-ad5224283137",
        "name": "Bombillos 100W",
        "messure": "",
        "category": "Hogar",
        "cost": 0,
        "quantity": 40,
        "price": 0.3777,
        "barcode": ""
    },
    {
        "id": "ef9220ef-ba09-4200-8a8d-43d5b025f7fa",
        "name": "Papel Higiénico Rosal (Unidad)",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 14,
        "price": 0.2444,
        "barcode": ""
    },
    {
        "id": "f1d34690-c600-493a-b354-e41e8700043a",
        "name": "Papel Higiénico Rosal (Paquete)",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 3,
        "price": 0.9555,
        "barcode": ""
    },
    {
        "id": "dcc48b41-ba53-4dfb-a4a5-28fb06522c75",
        "name": "Mostaza Picante 270g - McCormick",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 3,
        "price": 2.5,
        "barcode": ""
    },
    {
        "id": "e9c38a99-d190-4972-850e-65fd84228144",
        "name": "Mostaza La China 200g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 3,
        "price": 1.4,
        "barcode": ""
    },
    {
        "id": "23e10ea0-537d-45ea-abd1-717ab670fc9b",
        "name": "Mostaza Heinz 195g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 3,
        "price": 1.28,
        "barcode": ""
    },
    {
        "id": "031a1318-f350-4570-befb-02c5d911f2b5",
        "name": "Avena Lassie 400g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 5,
        "price": 1.35,
        "barcode": ""
    },
    {
        "id": "5afb6632-a3ce-480e-9a33-0a0bea3b0436",
        "name": "Leche Condensada Triángulo 395g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.5,
        "barcode": ""
    },
    {
        "id": "4e26c73c-a89b-4e0b-a57c-1c95f4d95294",
        "name": "Atún Aldiva Desmenuzado 160g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.1,
        "barcode": ""
    },
    {
        "id": "14ad4ec9-4ac3-4f95-8d7e-0e703cb78dd0",
        "name": "Atún Marina 170g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.45,
        "barcode": ""
    },
    {
        "id": "db096134-297f-4a02-b19f-4428cd73bd70",
        "name": "Sardinas Marbonita | Los Roques",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 0.7,
        "barcode": ""
    },
    {
        "id": "82fb1d16-99a7-4220-b339-a425ccd8b29f",
        "name": "Vasos 77",
        "messure": "",
        "category": "Fiestas",
        "cost": 0,
        "quantity": 2,
        "price": 2.22,
        "barcode": ""
    },
    {
        "id": "31a98b35-8356-43a8-931b-5d9861243646",
        "name": "Servilletas Pequeñas",
        "messure": "",
        "category": "Fiestas",
        "cost": 0,
        "quantity": 4,
        "price": 1.2,
        "barcode": ""
    },
    {
        "id": "0c0bb22f-6b1c-409b-a2de-546094f71312",
        "name": "Gelatina Rolda 250g",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 12,
        "price": 2.5,
        "barcode": ""
    },
    {
        "id": "35439814-83f2-4eb0-9c9d-b5c0fd849398",
        "name": "Gelatina Rolda 500g",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 12,
        "price": 4.35,
        "barcode": ""
    },
    {
        "id": "d939859e-7885-43b9-97eb-e57785e62a58",
        "name": "Shampoo Head & Shoulder",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 12,
        "price": 0.35,
        "barcode": ""
    },
    {
        "id": "3acb1b26-a2d6-44a0-8133-3b0b005395ce",
        "name": "Harina Artesanal",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 0.9,
        "barcode": ""
    },
    {
        "id": "a837447c-0d40-4961-8992-e1ea54126b56",
        "name": "Tinte Siglo",
        "messure": "",
        "category": "Belleza",
        "cost": 0,
        "quantity": 12,
        "price": 0.65,
        "barcode": ""
    },
    {
        "id": "61258681-e86b-46d2-bab6-5320ef078bf0",
        "name": "Malta",
        "messure": "",
        "category": "Nevera",
        "cost": 0,
        "quantity": 24,
        "price": 0.3777,
        "barcode": ""
    },
    {
        "id": "2671b98f-77a5-4816-ae90-2068c7471de5",
        "name": "Leche de Vaca",
        "messure": "Lt",
        "category": "Víveres",
        "cost": 0,
        "quantity": 30,
        "price": 0.4444,
        "barcode": ""
    },
    {
        "id": "82000519-9e22-4662-a764-75ca054857ba",
        "name": "Glup 1L",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 0.83,
        "barcode": ""
    },
    {
        "id": "ef502cd1-d9d2-4cac-95e8-b15dfc1f22dc",
        "name": "Maizina 90g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 24,
        "price": 0.7,
        "barcode": ""
    },
    {
        "id": "22b010a3-5cc8-4a4d-9331-7bc9e28efec8",
        "name": "Maizina 200g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 12,
        "price": 1.3,
        "barcode": ""
    },
    {
        "id": "5a535d97-2810-4c6f-8403-69052049be97",
        "name": "Pañales Baby G",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 2,
        "price": 2.2,
        "barcode": ""
    },
    {
        "id": "9a4ef70c-b4f6-4d79-9118-76287923a97e",
        "name": "Suavitel",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 12,
        "price": 0.75,
        "barcode": ""
    },
    {
        "id": "e00098a0-6de8-4bd2-b0d8-1a004a978fb9",
        "name": "Galletas Soda (Paquete)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 16,
        "price": 1.7,
        "barcode": ""
    },
    {
        "id": "dbcea097-3def-4fa5-95af-bc0230db30b5",
        "name": "Galletas Salricas (Paquete)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 3,
        "price": 1.75,
        "barcode": ""
    },
    {
        "id": "38498e80-3751-4b5e-8539-1cf65e682064",
        "name": "Galletas Salricas (Taco Unidad)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 20,
        "price": 0.2916,
        "barcode": ""
    },
    {
        "id": "c0525a16-41bc-4372-9212-8804dc3bc494",
        "name": "Galleta Soda (Unidad)",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 24,
        "price": 0.17,
        "barcode": ""
    },
    {
        "id": "a36e2dfa-99f7-4d8b-bae7-8aa68b47fd6e",
        "name": "Jabón en polvo Ultrex 500g",
        "messure": "",
        "category": "Limpieza",
        "cost": 0,
        "quantity": 24,
        "price": 1,
        "barcode": ""
    },
    {
        "id": "9b6c876a-161b-4c20-844f-845faec5ccd8",
        "name": "Jabón en polvo Ultrex 125g",
        "messure": "",
        "category": "Limpieza",
        "cost": 0,
        "quantity": 24,
        "price": 0.48,
        "barcode": ""
    },
    {
        "id": "2fbb903d-e8e7-4f91-bb4c-cff05549e8be",
        "name": "Jabón en polvo Oso Blanco 200g",
        "messure": "",
        "category": "Limpieza",
        "cost": 0,
        "quantity": 24,
        "price": 0.85,
        "barcode": ""
    },
    {
        "id": "c79d824c-adcd-4b9d-ab7f-385f93cbeb82",
        "name": "Jabón Especial",
        "messure": "",
        "category": "Limpieza",
        "cost": 0,
        "quantity": 24,
        "price": 0.65,
        "barcode": ""
    },
    {
        "id": "f421955d-2800-404b-aae4-449f4a1e41ab",
        "name": "Jabón Pasta Oso Blanco",
        "messure": "",
        "category": "Limpieza",
        "cost": 0,
        "quantity": 12,
        "price": 0.5,
        "barcode": ""
    },
    {
        "id": "06b8153b-35e7-45d1-b1cb-787ec4c53ece",
        "name": "Flip Chocolate",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 12,
        "price": 3.52,
        "barcode": ""
    },
    {
        "id": "143bd0a9-7d6e-416c-91c8-9cacdacd8642",
        "name": "Savoy Ping Pong",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 6,
        "price": 2.7,
        "barcode": ""
    },
    {
        "id": "d096fe39-5e06-4e14-b409-cfc775881b86",
        "name": "Toddy 200g",
        "messure": "",
        "category": "Víveres",
        "cost": 0,
        "quantity": 6,
        "price": 2.9,
        "barcode": ""
    },
    {
        "id": "43c5383f-9b78-4215-b9c7-dd9a28083abd",
        "name": "Chocolate Blanco Galak",
        "messure": "",
        "category": "Chucherías",
        "cost": 0,
        "quantity": 24,
        "price": 0.98,
        "barcode": ""
    },
    {
        "id": "b7304977-3020-4805-b074-31195a05e7fe",
        "name": "Jabón Medicare",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 12,
        "price": 0.65,
        "barcode": ""
    },
    {
        "id": "a1b479f0-41ab-4ab1-ac24-0bff7ed47d83",
        "name": "Jabón Lemon",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 12,
        "price": 0.6,
        "barcode": ""
    },
    {
        "id": "e2dba4a8-6c79-4eb7-a356-41a94dd899fe",
        "name": "Jabón Axión Lavaplatos 150g",
        "messure": "",
        "category": "Limpieza",
        "cost": 0,
        "quantity": 12,
        "price": 0.67,
        "barcode": ""
    },
    {
        "id": "248066fd-1b90-4c77-8f95-98edf92b5a77",
        "name": "Pan Salado",
        "messure": "",
        "category": "Panadería",
        "cost": 0,
        "quantity": 30,
        "price": 0.6881,
        "barcode": ""
    },
    {
        "id": "cac01ceb-3e9e-4a40-a20c-7255b8371d09",
        "name": "Pan Dulce",
        "messure": "",
        "category": "Panadería",
        "cost": 0,
        "quantity": 30,
        "price": 0.7311,
        "barcode": ""
    },
    {
        "id": "756a830b-d1d4-423f-a4e3-7bef61bbe902",
        "name": "Pan Piñitas",
        "messure": "",
        "category": "Panadería",
        "cost": 0,
        "quantity": 30,
        "price": 0.6881,
        "barcode": ""
    },
    {
        "id": "72a420d8-bb3d-46d6-a50c-f14e5baacf75",
        "name": "Pan de Guayaba",
        "messure": "",
        "category": "Panadería",
        "cost": 0,
        "quantity": 15,
        "price": 1.1612,
        "barcode": ""
    },
    {
        "id": "c87f9135-3850-4b57-a6ee-facc7b19b849",
        "name": "Pan de Queso",
        "messure": "",
        "category": "Panadería",
        "cost": 0,
        "quantity": 15,
        "price": 1.1612,
        "barcode": ""
    },
    {
        "id": "6aab426a-ff88-46cd-97c0-051c33721521",
        "name": "Pan de Perros Calientes",
        "messure": "",
        "category": "Panadería",
        "cost": 0,
        "quantity": 10,
        "price": 1.1827,
        "barcode": ""
    },
    {
        "id": "d84d2fc7-9899-443f-b8bf-c5f4684a1180",
        "name": "Crema Dental Colgate",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 15,
        "price": 1.5,
        "barcode": ""
    },
    {
        "id": "05aa77a4-1a06-4a04-b7b1-ce8f956a9d5d",
        "name": "Desodorante Balance",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 30,
        "price": 0.45,
        "barcode": ""
    },
    {
        "id": "3007ca47-8776-4023-9dbf-18fd54494c1f",
        "name": "Prestobarba Dorco",
        "messure": "",
        "category": "Higiene",
        "cost": 0,
        "quantity": 30,
        "price": 0.2916,
        "barcode": ""
    }
]`
const sells = `[
    {
        "id": "92205a4a-b4fe-474e-8067-3de5b303f222",
        "products": [
            {
                "id": "0af057b0-51c1-45e3-ba53-29c2773b9f39",
                "name": "Aceite Coamo 900ml",
                "messure": "",
                "category": "Víveres",
                "cost": 0,
                "quantity": 15,
                "price": 2.4045,
                "barcode": "",
                "inputQuantity": 0,
                "cartQuantity": 1,
                "priority": 0
            },
            {
                "id": "56029ddf-a391-4571-8159-85e581e2b8b5",
                "name": "Queso",
                "messure": "Kg",
                "category": "Nevera",
                "cost": 0,
                "quantity": 50,
                "price": 3.8202,
                "barcode": "",
                "inputQuantity": 0,
                "cartQuantity": 0.5,
                "priority": 1
            }
        ],
        "note": "2$ en efectivo.",
        "total": 4.3146,
        "type": "sell",
        "state": true,
        "abono": 0,
        "customer": "",
        "date_at": 1634831956709
    },
    {
        "id": "58ae50b0-89fa-4e67-826e-e7a4677c339d",
        "products": [
            {
                "id": "56029ddf-a391-4571-8159-85e581e2b8b5",
                "name": "Queso",
                "messure": "Kg",
                "category": "Nevera",
                "cost": 0,
                "quantity": 49.5,
                "price": 3.8202,
                "barcode": "",
                "inputQuantity": 0,
                "cartQuantity": 0.5,
                "priority": 1
            },
            {
                "id": "0af057b0-51c1-45e3-ba53-29c2773b9f39",
                "name": "Aceite Coamo 900ml",
                "messure": "",
                "category": "Víveres",
                "cost": 0,
                "quantity": 15,
                "price": 2.4045,
                "barcode": "",
                "inputQuantity": 0,
                "priority": 1,
                "cartQuantity": 15
            },
            {
                "id": "d8029c6d-2b28-49fb-bed6-d289b622d933",
                "name": "Harina Doña María (Trigo Leudante)",
                "messure": "",
                "category": "Víveres",
                "cost": 0,
                "quantity": 30,
                "price": 1.2135,
                "barcode": "",
                "inputQuantity": 0,
                "cartQuantity": 1,
                "priority": 1
            }
        ],
        "note": "",
        "total": 39.1911,
        "type": "credit",
        "state": false,
        "abono": 0,
        "customer": "Orlando Briceño",
        "date_at": 1634832366716
    },
    {
        "id": "1130d833-7cb6-4949-b26c-ed8cbb3a57b4",
        "products": [
            {
                "id": "ec7af6ff-bc49-4e68-9694-fbafc045f663",
                "name": "1/2 Cartón Huevos",
                "messure": "",
                "category": "Víveres",
                "cost": 0,
                "quantity": 30,
                "price": 2.7083,
                "barcode": "",
                "cartQuantity": 1
            }
        ],
        "note": "Abonó $1",
        "total": 2.7083,
        "type": "credit",
        "state": false,
        "abono": 1,
        "customer": "Orlando Briceño",
        "date_at": 1635962780497
    },
    {
        "id": "105b2efe-0ec3-4b19-a222-0cedcf9bd56d",
        "products": [
            {
                "id": "7e3d649c-aeff-4d67-82c4-5c7b9a68a073",
                "name": "Carne",
                "messure": "Kg",
                "category": "Charcutería",
                "cost": 0,
                "quantity": 50,
                "price": 4.2024,
                "barcode": "",
                "cartQuantity": 1
            },
            {
                "id": "0af057b0-51c1-45e3-ba53-29c2773b9f39",
                "name": "Aceite Coamo 900ml",
                "messure": "",
                "category": "Víveres",
                "cost": 0,
                "quantity": 15,
                "price": 2.4048,
                "barcode": "",
                "inputQuantity": 0,
                "cartQuantity": 5,
                "priority": 1
            }
        ],
        "note": "",
        "total": 16.2264,
        "type": "sell",
        "state": true,
        "abono": 0,
        "customer": "",
        "date_at": 1636159192870
    },
    {
        "id": "efd33766-828b-4e9c-9d97-6f11562eee69",
        "products": [
            {
                "id": "8716fc64-0f3a-4cb6-aba1-92bd06061579",
                "name": "Aguacate",
                "messure": "Kg",
                "category": "Verduras",
                "cost": 0,
                "quantity": 50,
                "price": 0.7561,
                "barcode": "",
                "formula": {
                    "id": ""
                },
                "ingredients": [],
                "cartQuantity": 1
            }
        ],
        "note": "",
        "total": 0.7561,
        "type": "sell",
        "state": true,
        "abono": 0,
        "customer": "",
        "date_at": 1636665463709
    },
    {
        "id": "d12d649e-189d-46f9-9b06-5d917e6f4e13",
        "products": [
            {
                "id": "8716fc64-0f3a-4cb6-aba1-92bd06061579",
                "name": "Aguacate",
                "messure": "Kg",
                "category": "Verduras",
                "cost": 0,
                "quantity": 49,
                "price": 0.7561,
                "barcode": "",
                "formula": {
                    "id": ""
                },
                "ingredients": [],
                "inputQuantity": 0,
                "cartQuantity": 1,
                "priority": 0
            }
        ],
        "note": "nota",
        "total": 0.7561,
        "type": "sell",
        "state": true,
        "abono": 0,
        "customer": "",
        "date_at": 1636665474056
    },
    {
        "id": "bfe804ad-eb8a-49e7-9f62-b4ba895b7057",
        "products": [
            {
                "id": "8716fc64-0f3a-4cb6-aba1-92bd06061579",
                "name": "Aguacate",
                "messure": "Kg",
                "category": "Verduras",
                "cost": 0,
                "quantity": 48,
                "price": 0.7561,
                "barcode": "",
                "formula": {
                    "id": ""
                },
                "ingredients": [],
                "inputQuantity": 0,
                "cartQuantity": 1,
                "priority": 0
            }
        ],
        "note": "nota",
        "total": 0.7561,
        "type": "credit",
        "state": false,
        "abono": 0,
        "customer": "",
        "date_at": 1636665480587
    }
]`

window.sessionStorage.setItem('categories', JSON.stringify(categories))
window.sessionStorage.setItem('products', JSON.stringify(products))
window.sessionStorage.setItem('sells', JSON.stringify(sells))

