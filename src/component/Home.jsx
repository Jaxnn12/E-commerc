import React from "react";
import { Layouts } from "../Pages/Layouts";
import { Link } from "react-router";
import herosection from "../assets/herosection.png";
import cart from "../assets/cart.svg";
import love from "../assets/love.svg";
import cardProduk from "../assets/produk card.png";
import start from "../assets/start.svg";
import model_1 from "../assets/model(1).png";
import model_2 from "../assets/model(2).png";
import model_3 from "../assets/model(3).png";
import model_4 from "../assets/model(4).png";

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
      <div>
        <img src={herosection} alt="Banner Produk" className="w-full" />
      </div>

      {/* Produk Bestseller */}
      <section className="w-full  px-16 space-y-7">
        <h1 className="text-xl font-semibold">Bestseller</h1>
        <ul className="flex justify-between items-center text-base">
          <div className="flex space-x-6 text-gray-text font-semibold  ">
            <li className="opacity-100">Facewash</li>
            <li className="opacity-50 ">Sunscreen</li>
            <li className="opacity-50 ">Mosturizer</li>
            <li className="opacity-50 ">Serum</li>
          </div>
          <li className=" px-4 py-1.5 border rounded-3xl">
            <Link to="">Shop all Bestseller</Link>
          </li>
        </ul>
        {/* Card produk */}
        <section className="w-full space-x-4 flex items-center overflow-x-hidden">
          {ProdukBestseller.map((item) => (
            <div className=" min-w-72 px-6 py-4 space-y-3 flex flex-col items-center bg-bg-card  rounded-lg ">
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
      <section>
        <h2></h2>
        <p></p>
        <div>
          <img src="" alt="" />
          <button Link=""></button>
        </div>
      </section>

      {/* Result Produk */}
      <section className="w-full space-x-4 space-y-4 flex flex-col justify-center items-center ">
        <h3 className="text-xl font-semibold">Arliva product results</h3>
        <div className="w-full space-x-4 flex justify-center items-center">
          <img src={model_1} alt="" />
          <img src={model_2} alt="" />
          <img src={model_3} alt="" />
          <img src={model_4} alt="" />
        </div>
      </section>
    </Layouts>
  );
};
