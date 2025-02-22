// // types/Product.ts
// export interface Product {
//     _id: string;
//     name: string;
//     _type: "product";
//     image : {
//         asset : {
//             _ref : string;
//             _type : "image";
//         }
//     };
//     price: string;
//     description: string;
//     discountPercentage: number;
//     isFeaturedProduct: boolean;
//     stockLevel: number;
//     category: string;
//   }
  
  export interface Product {
    _id: string;
    name: string;
    _type: "product";
    image: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
    tags?: string[]; // Added tags as an optional array of strings
    categories?: string[]; // Added categories as an optional array of strings
  }
  