import React from "react";
import { Layouts } from "../Pages/Layouts";
import phone from "../assets/phone.svg"
import google from "../assets/google.svg"

export const Login = () => {
  return (
    <Layouts>
      <main class="min-h-screen flex items-center justify-center bg-gray-secondbackground">
        <section class="w-md bg-white rounded-xl shadow px-10 py-10">
          <h1 class="text-4xl text-center mb-16">Sign In</h1>

          <div class="space-y-4">
            <button class="w-full flex items-center pl-7 border rounded-full py-3 space-x-2">
              <img src={google} alt="Google logo" class="w-5 h-5" />
              <span>Sign In with Google</span>
            </button>

            <button class="w-full flex items-center pl-7 border rounded-full py-3 space-x-2">
              <img src={phone} alt="Phone icon" class="w-5 h-5" />
              <span>Sign In with number phone</span>
            </button>
          </div>

          <div class="flex items-center my-4">
            <hr class="flex-grow border-gray-300" />
            <span class="mx-4 text-sm text-black">OR</span>
            <hr class="flex-grow border-gray-300" />
          </div>

          <form>
            <label for="email" class="sr-only">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              class="w-full border rounded-md px-5 py-3 mb-6 placeholder-black"
              required
            />

            <button
              type="submit"
              class="w-full bg-black text-white py-3 rounded-full"
            >
              Sign In
            </button>
          </form>

          <p class="mt-3 text-center text-sm">
            Don't have an account?{" "}
            <a href="#" class="underline">
              Create account
            </a>
          </p>
        </section>
      </main>
    </Layouts>
  );
};
