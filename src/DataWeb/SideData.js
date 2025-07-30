import cardProduk from "../assets/produk card.png";
import cart from "../assets/cart.svg";
import love from "../assets/love.svg";
import start from "../assets/start.svg";
import produk_1 from "../assets/produk(1).png";
import produk_2 from "../assets/produk(2).png";
import produk_3 from "../assets/produk(3).png";
import produk_4 from "../assets/produk(4).png";
import model_1 from "../assets/model(1).png";
import model_2 from "../assets/model(2).png";
import model_3 from "../assets/model(3).png";
import model_4 from "../assets/model(4).png";

 const siteData =  {
    ProdukBestseller : [
           {
      id: 1,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      start:start,
      love:love,
      cart:cart,
      stok: 200,
    },
    {
      id: 2,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      start:start,
      love:love,
      cart:cart,
      stok: 200,
    },
    {
      id: 3,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      start:start,
      love:love,
      cart:cart,
      stok: 200,
    },
    {
      id: 4,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      start:start,
      love:love,
      cart:cart,
      stok: 200,
    },
    {
      id: 5,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      start:start,
      love:love,
      cart:cart,
      stok: 200,
    },
    ],
    ProdukSkintype : [
      { id:1, gambar:produk_1, text:"Sensitive Skin"},
      { id:2, gambar:produk_2, text:"Normal Skin"},
      {id:3, gambar:produk_3, text:"Dry Skin"},
      { id:4, gambar:produk_4, text:"Oil Skin"}
    ],
    ResultProduk : [
      {id:1, gambar:model_1},
      {id:2, gambar:model_2},
      {id:3, gambar:model_3},
      {id:4, gambar:model_4},
    ],
    CategoryProduk : [
        {id:1, filter:"All"},
        {id:2, filter:"Moisturizer"},
        {id:3, filter:"Facewash"},
        {id:4, filter:"Sunscreen"},
        {id:5, filter:"Serum"}
      ],
    Category : [
        {id:1, category:"Bestseller"},
        {id:2, category:"New Product"},
        {id:3, category:"Sensitive skin"},
        {id:4, category:"Dry skin"},
        {id:5, category:"Oil Skin"},
        {id:6, category:"Normal Skin"}
  
      ]

  }
export default siteData;
