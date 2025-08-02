import React from "react";
import { Layouts } from "../Pages/Layouts";

export const AccountAddres = () => {
  return (
    <Layouts>
      <div class="bg-white text-black font-sans p-10 flex justify-center">
        <main class="w-full max-w-4xl space-y-8">
          {/* <!-- Greeting + User Info --> */}
          <section>
            <div class="flex justify-between items-start">
              <div>
                <h1 class="text-2xl font-semibold">Hey, Rafa Almaqdis</h1>
                <p class="text-gray-600">rafaalmaqdis53@gmail.com</p>
              </div>
              <button class="text-xl">⚙️</button>
            </div>
          </section>

          {/* <!-- Navigation Tabs --> */}
          <nav class="flex gap-6 border-b">
            <button class="pb-2 text-gray-600 hover:text-black">Orders</button>
            <button class="pb-2 text-gray-600 hover:text-black">Favorit</button>
            <button class="pb-2 border-b-2 border-black font-medium">
              Addresses
            </button>
          </nav>

          {/* <!-- No Address Message --> */}
          <section class="bg-gray-100 p-6 text-center rounded-md">
            <p class="font-semibold mb-1">You have no addresses on file</p>
            <p class="text-gray-600">
              Add your shipping address and begin placing orders!
            </p>
          </section>

          {/* <!-- Add New Address Button --> */}
          <section>
            <button class="w-full border border-gray-300 rounded-md py-4 flex items-center justify-center gap-2 hover:bg-gray-50">
              <span class="text-xl">➕</span>
              <span class="font-medium">Add a new address</span>
            </button>
          </section>
        </main>
      </div>
    </Layouts>
  );
};
