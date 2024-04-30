export interface ProductType {
    name: string;
    alias: string;
    shortDescription: string ;
    fullDescription: string ;
    enable: boolean;
    inStock:boolean;
    discountPercent:number| null;
    fileImage: string | null;
    categoryIds: number;
   }