import React from "react";
import { Layouts } from "../Pages/Layouts";

export const Cart = () => {
  return (
    <Layouts>
      <main class="w-full px-6 md:px-16 lg:px-24 py-10 flex flex-col lg:flex-row gap-10">
        {/* <!-- Left: Cart Items --> */}
        <section class="w-full lg:w-2/3">
          <h2 class="text-sm font-semibold mb-6">
            Your chart : <span class="font-normal">Rp 245.000</span>
          </h2>

          {/* <!-- Item Card --> */}
          <div class="space-y-4">
            <div class="flex justify-between items-center border rounded-lg p-4">
              {/* <!-- Product Info --> */}
              <div class="flex items-center gap-4">
                <img
                  src="sunscreen.jpg"
                  alt="Produk"
                  class="w-14 h-14 object-cover"
                />
                <div class="space-y-1">
                  <p class="text-sm font-semibold">Sunscreen SPF 30 PA+++</p>
                  <p class="text-xs text-gray-500">150 ml</p>
                </div>
              </div>
              {/* <!-- Price & Quantity --> */}
              <div class="flex items-center gap-10">
                <p class="text-sm">Rp 100.000</p>
                <div class="flex items-center gap-2 border rounded-full px-2 py-1">
                  <button class="text-sm">-</button>
                  <span class="text-sm">1</span>
                  <button class="text-sm">+</button>
                </div>
                <button>
                  <img src="delete-icon.svg" alt="delete" class="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* <!-- Ulangi item sesuai jumlah produk --> */}
          </div>
        </section>

        {/* <!-- Right: Summary --> */}
        <aside class="w-full lg:w-1/3 border-l pl-6">
          <h3 class="text-sm font-semibold mb-4">Similar products</h3>

          {/* <!-- Recommended Product --> */}
          <div class="flex items-center justify-between border rounded-lg p-2 mb-4">
            <div class="flex items-center gap-3">
              <img
                src="sunscreen.jpg"
                alt="Produk"
                class="w-10 h-10 object-cover"
              />
              <div>
                <p class="text-sm font-semibold">Sunscreen SPF 30 PA+++</p>
                <p class="text-xs text-gray-500">150 ml</p>
              </div>
            </div>
            <button class="text-xl font-bold">+</button>
          </div>

          {/* <!-- Price Details --> */}
          <div class="space-y-1 text-sm mb-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>Rp 300.000</span>
            </div>
            <div class="flex justify-between">
              <span>Discount</span>
              <span>Rp 0</span>
            </div>
            <div class="flex justify-between font-semibold">
              <span>Total</span>
              <span>Rp 300.000</span>
            </div>
          </div>

          {/* <!-- Payment Button --> */}
          <button class="w-full py-2 text-white bg-black rounded-full text-sm mb-4">
            Payment
          </button>

          {/* <!-- Payment Logos --> */}
          <div class="flex flex-wrap gap-2">
            <img src="bca.svg" alt="bca" class="h-6" />
            <img src="bri.svg" alt="bri" class="h-6" />
            <img src="mandiri.svg" alt="mandiri" class="h-6" />
            <img src="gopay.svg" alt="gopay" class="h-6" />
            <img src="ovo.svg" alt="ovo" class="h-6" />
            <img src="qris.svg" alt="qris" class="h-6" />
          </div>
        </aside>
      </main>
    </Layouts>
  );
};
