import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link, Links } from "react-router";
import herosection from "../assets/herosection.png";
import cart from "../assets/cart.svg";
import love from "../assets/love.svg";
import cardProduk from "../assets/produk card.png";
import start from "../assets/start.svg";
import model_1 from "../assets/model(1).png";
import model_2 from "../assets/model(2).png";
import model_3 from "../assets/model(3).png";
import model_4 from "../assets/model(4).png";
import produk_1 from "../assets/produk(1).png";
import produk_2 from "../assets/produk(2).png";
import produk_3 from "../assets/produk(3).png";
import produk_4 from "../assets/produk(4).png";

export const Home = () => {
  const ProdukBestseller = [
    {
      id: 1,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      stok: 200,
    },
    {
      id: 2,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      stok: 200,
    },
    {
      id: 3,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      stok: 200,
    },
    {
      id: 4,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      stok: 200,
    },
    {
      id: 5,
      gambar: cardProduk,
      nama: "Facewash",
      size: "50ml",
      price: "Rp 100.000",
      rating: 4.7,
      stok: 200,
    },
  ];

  return (
    <Layouts>
      {/* Hero section */}
      <section>
        <img src={herosection} alt="Banner Produk" className="w-full" />
      </section>

      {/* Produk Bestseller */}
      <section className="w-full  px-4 md:px-16 space-y-7">
        <h1 className="text-xl font-semibold">Bestseller</h1>
        <ul className="flex justify-between items-center text-base">
          <li className=" text-gray-text font-semibold  ">
            <ul className="flex space-x-6">   
              <li className="opacity-100">Facewash</li>
              <li className="opacity-50 ">Sunscreen</li>
              <li className="opacity-50 ">Mosturizer</li>
              <li className="opacity-50 ">Serum</li>
            </ul>
          </li>
          <li className=" px-4 py-1.5 border rounded-3xl">
            <Link to="/Category_Produk">Shop all Bestseller</Link>
          </li>
        </ul>
        {/* Card produk */}
        <section className="w-full space-x-4 flex items-center shrink-0 overflow-x-hidden">
          {ProdukBestseller.map((item) => (
            <div key={item.id} className=" min-w-72 px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg ">
              <div className=" w-full flex justify-between items-center">
                <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                  <img src={love} alt="Favorite" className=" " />
                </div>
                <div className="px-2.5 py-2.5 bg-white rounded-3xl shadow-md">
                  <img src={cart} alt="Cart" className="" />
                </div>
              </div>
              <img src={item.gambar} alt="Produk" />
              <p className=" w-fit px-1.5 py-0.5 text-xs text-gray-text  border border-gray-text ">
                {item.size}
              </p>
              <div className="w-full flex justify-between ">
                <p className="text-sm font-semibold">{item.nama}</p>
                <p className="text-xs">{item.price}</p>
              </div>
              <div className="w-full space-x-1  flex items-center  text-xs ">
                <img src={start} alt="Rating" className="" />
                <p className="pt-0.5">{item.rating}</p>
                <p className="pt-0.5 text-gray-text ">{item.stok}</p>
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Product Skintype */}
      <section className="w-full flex flex-col items-center px-4 md:px-16">
        <h2 className="text-xl">Shopping skincare by skin type</h2>
        <p className="text-lg mt-3 mb-4">Need help choosing? Learn what skin type you have by following our guide.</p>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
        <div className="relative">
          <img src={produk_1} alt="" className="" />
          <Link className="w-fit px-4 py-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-base text-black rounded-lg" >Sensitive Skin</Link>
        </div>
         <div className="relative">
          <img src={produk_2} alt="" />
          <Link className="w-fit px-4 py-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-base text-black rounded-lg" >Normal Skin</Link>
        </div>
         <div className="relative">
          <img src={produk_3} alt="" />
          <Link className="w-fit px-4 py-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-base text-black rounded-lg" >Dry Skin</Link>
        </div>
         <div className="relative">
          <img src={produk_4} alt="" />
          <Link className="w-fit px-4 py-3 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-base text-black rounded-lg" >Oil Skin</Link>
        </div>
        </div>
      </section>

      {/* Result Produk */}
      <section className="w-full mb-24 px-4 md:px-16 space-y-4 flex flex-col justify-center items-center ">
        <h3 className="text-xl font-semibold">Arliva product results</h3>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          <img src={model_1} alt="" />
          <img src={model_2} alt="" />
          <img src={model_3} alt="" />
          <img src={model_4} alt="" />
        </div>
      </section>
    </Layouts>
  );
};
