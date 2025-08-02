import React from "react";
import { Layouts } from "../Pages/Layouts";

export const AccountFavorit = () => {
  return (
    <Layouts>
      <main class="max-w-6xl mx-auto px-4 py-16">
        {/* <!-- Header Akun --> */}
        <div class="mb-6">
          <h1 class="text-xl font-semibold">Hey, Rafa Almaqdis</h1>
          <p class="text-sm text-gray-600">rafaalmaqdis53@gmail.com</p>
        </div>

        {/* <!-- Tab Menu --> */}
        <div class="flex items-center gap-6 border-b border-gray-300 mb-8">
          <button class="text-sm text-gray-600">Orders</button>
          <button class="text-sm font-medium border-b-2 border-black py-2">
            Favorit
          </button>
          <button class="text-sm text-gray-600">Addresses</button>
          <div class="ml-auto text-xl">⚙️</div>
        </div>

        {/* <!-- Card Produk Favorit --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border rounded-lg p-6">
          {/* <!-- Satu Kartu --> */}
          <div class="relative bg-white rounded-lg shadow-sm border p-4">
            {/* <!-- Favorite & Cart Icon --> */}
            <div class="absolute top-3 left-3">
              <button class="bg-white shadow p-2 rounded-full">❤️</button>
            </div>
            <div class="absolute top-3 right-3">
              <button class="bg-white shadow p-2 rounded-full">🛒</button>
            </div>

            {/* <!-- Gambar Produk --> */}
            <img
              src="produk.jpg"
              alt="Produk Favorit"
              class="w-24 h-32 object-contain mx-auto mb-2"
            />

            {/* <!-- Info Produk --> */}
            <p class="text-sm font-medium text-center">Sunscreen</p>
            <p class="text-xs text-center text-gray-500">50ml</p>
            <p class="text-sm font-semibold text-center mt-1">Rp 45.000</p>

            {/* <!-- Rating --> */}
            <div class="flex items-center justify-center text-xs text-gray-600 mt-1">
              ⭐ 4.7 <span class="ml-1 text-gray-400">(200)</span>
            </div>
          </div>

          {/* <!-- Duplikat untuk 2 produk lagi --> */}
          <div class="relative bg-white rounded-lg shadow-sm border p-4">
            <div class="absolute top-3 left-3">
              <button class="bg-white shadow p-2 rounded-full">❤️</button>
            </div>
            <div class="absolute top-3 right-3">
              <button class="bg-white shadow p-2 rounded-full">🛒</button>
            </div>
            <img
              src="produk.jpg"
              alt="Produk Favorit"
              class="w-24 h-32 object-contain mx-auto mb-2"
            />
            <p class="text-sm font-medium text-center">Sunscreen</p>
            <p class="text-xs text-center text-gray-500">50ml</p>
            <p class="text-sm font-semibold text-center mt-1">Rp 45.000</p>
            <div class="flex items-center justify-center text-xs text-gray-600 mt-1">
              ⭐ 4.7 <span class="ml-1 text-gray-400">(200)</span>
            </div>
          </div>

          {/* <!-- Produk ke-3 --> */}
          <div class="relative bg-white rounded-lg shadow-sm border p-4">
            <div class="absolute top-3 left-3">
              <button class="bg-white shadow p-2 rounded-full">❤️</button>
            </div>
            <div class="absolute top-3 right-3">
              <button class="bg-white shadow p-2 rounded-full">🛒</button>
            </div>
            <img
              src="produk.jpg"
              alt="Produk Favorit"
              class="w-24 h-32 object-contain mx-auto mb-2"
            />
            <p class="text-sm font-medium text-center">Sunscreen</p>
            <p class="text-xs text-center text-gray-500">50ml</p>
            <p class="text-sm font-semibold text-center mt-1">Rp 45.000</p>
            <div class="flex items-center justify-center text-xs text-gray-600 mt-1">
              ⭐ 4.7 <span class="ml-1 text-gray-400">(200)</span>
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
};
