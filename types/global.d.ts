import messages from '../messages/en-US.json';

/**
 * next/intl: Add type-safe message keys
 * Automatically create the interface based on the messages from the default locale by importing it
 */
type Messages = typeof messages;

/**
 * json-server: Add type-safe API response
 * 
 * Product example:
  {
    "id": 1,
    "name": "High-Performance Laptop",
    "brand": "TechTron",
    "category": "Electronics",
    "image": "https://source.unsplash.com/random/600x600?laptop",
    "specifications": {
      "processor": "Intel i7",
      "ram": "16GB",
      "storage": "512GB SSD"
    }
  },
 */
type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  specifications: {
    processor: string;
    ram: string;
    storage: string;
  };
};

/**
 * Wishlist example:
  {
    "id": 1,
    "name": "Tech Wishlist",
    "products": [
      1,
      2,
      3,
      4,
      5
    ]
  },
 */

type Wishlist = {
  id: number;
  name: string;
  products: number[];
};

// Define on global scope
declare global {
  // next/intl
  interface IntlMessages extends Messages {}
  // json-server
  interface ApiProduct extends Product {}
  interface ApiWishlist extends Wishlist {}
}

// Export empty object to avoid TS error
export {};
