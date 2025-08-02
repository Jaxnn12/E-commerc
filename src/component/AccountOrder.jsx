import React from "react";
import { Layouts } from "../Pages/Layouts";

export const AccountOrder = () => {
  return (
    <Layouts>
      <main class="max-w-5xl mx-auto px-4 py-16">
        {/* <!-- Header --> */}
        <div class="mb-6">
          <h1 class="text-xl font-semibold">Hey, Rafa Almaqdis</h1>
          <p class="text-sm text-gray-600">rafaalmaqdis53@gmail.com</p>
        </div>

        {/* <!-- Tabs --> */}
        <div class="flex items-center gap-6 border-b border-gray-300 mb-6">
          <button class="text-sm font-medium border-b-2 border-black py-2">
            Orders
          </button>
          <button class="text-sm text-gray-600">Favorit</button>
          <button class="text-sm text-gray-600">Addresses</button>
          <div class="ml-auto">
            <button class="text-xl">⚙️</button>
          </div>
        </div>

        {/* <!-- Order Card --> */}
        <div class="border rounded-lg p-4 flex items-start gap-4">
          {/* <!-- Product image --> */}
          <img
            src="facewash.jpg"
            alt="Facewash"
            class="w-14 h-14 object-cover border rounded-md"
          ></img>

          {/* <!-- Product Info --> */}
          <div class="flex-1">
            <p class="text-sm font-medium mb-1">
              Facewash Men Oil Control Anti Shine Brightening Cooling Foam
            </p>
            <p class="text-xs text-gray-500">150 ml</p>
          </div>

          {/* <!-- Price & Info --> */}
          <div class="text-sm text-right space-y-1">
            <p class="font-semibold">Rp 103.500</p>
            <p class="text-xs text-gray-600">Quantity: 1</p>
            <p class="text-xs text-gray-600">Arrived 24–28 April</p>
          </div>

          {/* <!-- Detail Button --> */}
          <button class="ml-4 border px-4 py-1 text-sm rounded-full hover:bg-gray-100">
            Detail
          </button>
        </div>
      </main>
    </Layouts>
  );
};
