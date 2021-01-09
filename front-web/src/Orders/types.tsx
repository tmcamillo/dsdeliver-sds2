export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

//vantagem em usar typescript, pra ter segurança e ganho de produtividade por estar tipando o modelo de dados

export type OrderLocationdata = {
    latitude: number;
    longitude: number;
    address: string;
}
