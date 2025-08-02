import React from "react";
import { Layouts } from "../Pages/Layouts";

export const Faq = () => {
  return (
    <Layouts>
      <main class="max-w-4xl mx-auto px-4 py-16 space-y-10 text-sm">
        {/* <!-- Title --> */}
        <h1 class="text-center text-base font-semibold">
          Frequently Asked Questions
        </h1>

        {/* <!-- Search Input --> */}
        <div class="flex items-center border rounded-lg px-4 py-2 max-w-xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
            />
          </svg>
          <input
            type="text"
            placeholder="What can we help you find?"
            class="w-full pl-4 outline-none placeholder:text-gray-500 text-sm"
          />
        </div>

        {/* <!-- FAQ Sections --> */}
        <div class="space-y-8">
          {/* <!-- Product --> */}
          <div class="space-y-2">
            <h2 class="font-semibold">Product</h2>
            <ul class="text-gray-600">
              <li>How do I choose a product that suits my skin type?</li>
              <li>Are Arliva products suitable for all skin types?</li>
              <li>Does Arliva use natural ingredients?</li>
            </ul>
          </div>

          <hr />

          {/* <!-- Company --> */}
          <div class="space-y-2">
            <h2 class="font-semibold">Company</h2>
            <ul class="text-gray-600">
              <li>What is Arliva and what is the brand's mission?</li>
              <li>Where are Arliva products manufactured?</li>
              <li>Is Arliva cruelty-free and eco-friendly?</li>
            </ul>
          </div>

          <hr />

          {/* <!-- Other --> */}
          <div class="space-y-2">
            <h2 class="font-semibold">Other</h2>
            <ul class="text-gray-600">
              <li>Can I return the product if it doesn't fit?</li>
              <li>How long will it take to ship my order?</li>
              <li>How to contact the Arliva team?</li>
            </ul>
          </div>
        </div>
      </main>
    </Layouts>
  );
};
