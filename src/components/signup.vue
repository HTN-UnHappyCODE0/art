<template>
  <div
    id="Signup-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="flex items-center justify-center w-full lg:p-12">
        <div class="flex items-center xl:p-10">
          <form
            class="flex flex-col w-full p-10 h-full pb-6 bg-white rounded-3xl"
          >
            <div class="text-start">
              <h3 class="mb-3 text-3xl font-bold text-dark-grey-900">
                Auction
              </h3>
              <p class="mb-4 text-2xl text-grey-700">
                Sign up to own beautiful floating works of art
              </p>
            </div>

            <label
              for="Username"
              class="relative mb-3 block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Username"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
                placeholder="Username"
              />

              <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-blue-700 peer-focus:text-xs"
              >
                Username
              </span>
            </label>
            <label
              for="Email"
              class="relative mb-3 block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="email"
                id="Username"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
                placeholder="email"
              />

              <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-blue-700 peer-focus:text-xs"
              >
                email
              </span>
            </label>
            <label
              for="Password"
              class="relative mb-2 block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="Password"
                id="Password"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
                placeholder="Username"
              />

              <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-blue-700 peer-focus:text-xs"
              >
                Password
              </span>
            </label>

            <div class="flex flex-row mb-5">
              <h1 class="text-gray-700">
                Password must be at least 8 characters and include a lowercase
                letter, uppercase letter, and digit.
              </h1>
            </div>
            <button
              class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white bg-gray-700 transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 hover:bg-blue-700 bg-purple-blue-500"
            >
              Sign In
            </button>
            <div class="flex items-center mb-3">
              <hr class="h-0 border-b border-solid border-grey-500 grow" />
              <p class="mx-4 text-grey-600">or</p>
              <hr class="h-0 border-b border-solid border-grey-500 grow" />
            </div>
            <a
              class="flex items-center border border-gray-950 justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-blue-700 focus:ring-4 hover:text-white focus:ring-grey-300"
            >
              <img
                class="h-5 mr-2"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                alt=""
              />
              Log in with Google
            </a>

            <p class="text-sm text-center leading-relaxed text-grey-900">
              Already have an account? 
              <a href="javascript:void(0)" class="font-bold text-grey-700"
                >Log in.</a
              >
            </p>
            <p class="text-sm mt-8 text-center leading-relaxed text-grey-900">
              By clicking Sign Up or Continue with Apple, Google, or Facebook,
              you agree to Auction’s Terms of Use and Privacy Policy and to
              receiving emails from Auction.
            </p>
          </form>
        </div>
      </div>
      <div class="relative p-4 w-full max-w-md max-h-full"></div>
    </div>
  </div>
</template>
