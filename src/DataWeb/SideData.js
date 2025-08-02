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
import modelAbout1 from "../assets/modelAbout1.png";
import modelAbout2 from "../assets/modelAbout2.png";
import modelAbout3 from "../assets/modelAbout3.png";
import modelAbout4 from "../assets/modelAbout4.png";
import barchart from "../assets/bar-chart.png"
import wallet from "../assets/wallet.png"
import antiage from "../assets/anti-age.svg"

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
  
      ],
      AboutSection: [
          {id:1, gambar:modelAbout1},
          {id:2, gambar:modelAbout2},
          {id:3, gambar:modelAbout2},
          {id:4, gambar:modelAbout2},
          {id:5, gambar:modelAbout3},
          {id:6, gambar:modelAbout4}
      ],
      PargrafAbout: [
        {id:1, text:"Many people do not have access to proper skin care products and education."},
        {id:2, text:"Our mission goes beyond surface beauty — we’re committed to helping communities embrace self-care as a form of self-worth. We see skincare as a daily act of dignity, healing, and confidence-building, and we want to make that accessible for everyone."},
        {id:3, text:" Together with local communities and organizations, we expand our impact through skincare education and support programs."},
        {id:4, text:" Every Arliva product you choose supports the movement to spread awareness and confidence — one small step that means a lot.  "}
      ],
      PowerSkincare: [
         {id:1, icon:antiage, benefit:"Underserved communities, access to basic skincare"},
         {id:2, icon:barchart, benefit:"Boosts self-confidence and personal well-being"},
         {id:3, icon:wallet, benefit:"Supports social and economic opportunities "}
      ]

  }
export default siteData;
