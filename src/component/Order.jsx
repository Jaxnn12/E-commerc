import React from "react";
import { Layouts } from "../Pages/Layouts";

export const Order = () => {
  return (
    <Layouts>
      <main class="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* <!-- Left Side: Address & Product --> */}
        <div class="lg:col-span-2 space-y-6">
          {/* <!-- Recipient Address --> */}
          <div class="border rounded-lg p-4 space-y-2">
            <div class="flex justify-between items-center">
              <h2 class="text-base font-medium">Recipient Address</h2>
              <button class="text-sm px-4 py-1 border rounded-full">
                Edit
              </button>
            </div>
            <p class="text-sm">Muhammad Rafa &nbsp; 085725278899</p>
            <div class="flex items-center gap-2">
              <span class="text-sm bg-black text-white px-4 py-1 rounded-full">
                Home
              </span>
              <span class="text-sm">
                Jl Naman iskandar limo Depok, Jawa barat
              </span>
            </div>
          </div>

          {/* <!-- Product Card --> */}
          <div class="border rounded-lg p-4 flex gap-4 items-start">
            <img
              src="product-img.jpg"
              alt="product"
              class="w-16 h-16 object-cover border rounded-md"
            ></img>
            <div class="flex-1 space-y-1">
              <p class="text-sm font-medium">
                Facewash Men Oil Control Anti Shine Brightening Cooling Foam
              </p>
              <p class="text-xs text-gray-500">150 ml</p>
              <div class="space-y-1">
                <p class="text-sm font-bold">Rp 96,000</p>
                <p class="text-xs text-gray-400 line-through">Rp 100,000</p>
                <p class="text-xs text-red-500">-4%</p>
              </div>
            </div>
            <div class="text-sm">Quantity: 1</div>
          </div>
        </div>

        {/* <!-- Right Side: Payment --> */}
        <div class="border rounded-lg p-4 space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium block">
              Select Payment Method
            </label>
            <select class="w-full border rounded-md px-3 py-2 text-sm">
              <option>BCA</option>
              <option>BNI</option>
              <option>Mandiri</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium block">Select Shipping</label>
            <select class="w-full border rounded-md px-3 py-2 text-sm">
              <option>JNT</option>
              <option>SiCepat</option>
            </select>
            <div class="space-y-1 pt-2">
              <label class="flex items-center text-sm gap-2">
                <input type="radio" name="shipping" checked></input>
                Reguler (3-5 hari) <span class="ml-auto">Rp 7.500</span>
              </label>
              <label class="flex items-center text-sm gap-2">
                <input type="radio" name="shipping"></input>
                Yes-Yakin esok sampai <span class="ml-auto">Rp 18.000</span>
              </label>
            </div>
          </div>

          {/* <!-- Price Summary --> */}
          <div class="border-t pt-4 space-y-1 text-sm">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>Rp 100,000</span>
            </div>
            <div class="flex justify-between">
              <span>Discount</span>
              <span>Rp 4,000</span>
            </div>
            <div class="flex justify-between">
              <span>Delivery</span>
              <span>Rp 7,500</span>
            </div>
            <div class="flex justify-between font-semibold pt-2">
              <span>Total</span>
              <span>Rp 103,500</span>
            </div>
          </div>

          {/* <!-- Order Button --> */}
          <button class="w-full text-sm font-medium py-2 border rounded-full">
            Order now
          </button>
        </div>
      </main>
    </Layouts>
  );
};
