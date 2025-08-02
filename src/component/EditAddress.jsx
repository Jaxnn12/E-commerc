import React from "react";
import { Layouts } from "../Pages/Layouts";

export const EditAddress = () => {
  return (
    <Layouts>
      <div class="bg-white text-black font-sans p-8 flex justify-center">
        <main class="w-full max-w-4xl space-y-8">
          {/* <!-- User Info Section --> */}
          <section>
            <h1 class="text-3xl font-semibold">Hey, Rafa Almaqdis</h1>
            <p class="text-gray-600">rafaalmaqdis53@gmail.com</p>
          </section>

          {/* <!-- Tabs --> */}
          <nav class="flex space-x-6 border-b pb-2">
            <button class="text-gray-500 hover:text-black">Orders</button>
            <button class="text-gray-500 hover:text-black">Favorit</button>
            <button class="text-black border-b-2 border-black font-medium">
              Addresses
            </button>
          </nav>

          {/* <!-- Recipient Address Box --> */}
          <section class="space-y-4">
            <div class="border rounded-lg p-4 flex justify-between items-start">
              <div>
                <h2 class="font-medium text-sm text-gray-700 mb-1">
                  Recipient Address
                </h2>
                <p class="font-semibold">
                  Muhammad Rafa{" "}
                  <span class="ml-4 text-gray-600">085725278899</span>
                </p>
                <div class="mt-2 flex items-center gap-2">
                  <span class="text-sm px-2 py-1 bg-black text-white rounded-full">
                    Home
                  </span>
                  <p class="text-sm text-gray-700">
                    Jl Naman iskandar limo Depok, Jawa barat
                  </p>
                </div>
              </div>
              <button class="border border-black px-4 py-1 rounded text-sm hover:bg-gray-100">
                Edit
              </button>
            </div>

            {/* <!-- Add New Address --> */}
            <button class="w-full flex items-center gap-2 border border-gray-300 rounded-lg p-4 hover:bg-gray-50">
              <span class="text-xl">＋</span>
              <span class="text-sm font-medium text-gray-700">
                Add a new address
              </span>
            </button>
          </section>
        </main>
      </div>
    </Layouts>
  );
};
