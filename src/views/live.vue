<template>
  <div
    class="grid grid-cols-4 gap-1 mx-auto my-10 h-auto bg-slate-300 max-w-screen-xl"
  >
    <div class="bg-slate-300 h-full">
      <div class="my-5 mx-3">
        <div class="text-sm font-semibold text-gray-900 sm:text-xl">
          Porcelain, Art and Antiques Auction March 16th 2024
        </div>
        <h1 class="text-sm font-semibold text-gray-800 sm:text-lg">
          by Antikauktion Krefeld
        </h1>
        <div class="flex justify-between">
          <h5
            id="drawer-label"
            class="inline-flex items-center my-3 text-base font-semibold text-yellow-400 dark:text-gray-400"
          >
            <svg
              class="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              /></svg
            >4.5
          </h5>
          <div
            class="inline-flex items-center bg-red-400 my-3 px-2 text-sm font-medium text-red-700 dark:text-gray-400"
          >
            <svg
              class="w-4 h-4 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
            43 Watching
          </div>
        </div>
        <div class="mb-1 text-base font-medium">10/100</div>
        <div class="w-full bg-gray-200 rounded-full h-1 mb-4">
          <div class="bg-red-600 h-1 rounded-full" style="width: 10%"></div>
        </div>
        <hr class="my-3 border-gray-200 sm:mx-auto lg:my-4" />

        <div class="flex flex-wrap">
          <div class="w-full h-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="rounded-full border font-bold border-gray-700 py-2 px-5 hover:bg-blue-700 hover:text-white focus:outline-none"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'text-gray-950 bg-white': openTab !== 1,
                    'text-white  bg-gray-950': openTab === 1,
                  }"
                >
                  All Lots
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="rounded-full border font-bold border-gray-700 py-2 px-5 hover:bg-blue-700 hover:text-white focus:outline-none"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'text-gray-950 bg-white': openTab !== 2,
                    'text-white  bg-gray-950': openTab === 2,
                  }"
                >
                  My items
                </a>
              </li>
            </ul>
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-0 h-96 overflow-y-auto overflow-x-auto shadow-lg rounded"
            >
              <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                  <div
                    v-bind:class="{
                      hidden: openTab !== 1,
                      block: openTab === 1,
                    }"
                  >
                    <a
                      v-for="(item, index) in items"
                      :key="index"
                      :href="item.link"
                      class="flex flex-col w-72 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <img
                        :src="item.imageUrl"
                        alt=""
                        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-28 md:rounded-none md:rounded-s-lg"
                      />
                      <div
                        class="flex flex-col justify-between p-2 leading-normal"
                      >
                        <p
                          class="font-bold text-sm text-gray-700 dark:text-gray-400"
                        >
                          {{ item.lot }}
                        </p>
                        <h5
                          class="text-lg font-normal tracking-tight text-gray-900 dark:text-white"
                        >
                          {{ item.title }}
                        </h5>
                        <p
                          class="mt-3 font-bold text-gray-700 dark:text-gray-400"
                        >
                          {{ item.price }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 2,
                      block: openTab === 2,
                    }"
                  >
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-600 h-full col-span-3">
      <div class="grid grid-cols-3">
        <div class="col-span-2 bg-gray-100 h-full">
          <div class="my-5 mx-10">
            <div class="flex">
              <h1 class="text-sm font-semibold text-red-600 sm:text-lg">
                Live now
              </h1>
              <h1 class="text-sm ml-1 font-semibold text-gray-950 sm:text-lg">
                Lot 50
              </h1>
            </div>
            <div class="text-sm mb-5 font-semibold text-gray-900 sm:text-xl">
              Meissen Blue Onion 12 deep plates 1st choice,
            </div>

            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-0 h-96 overflow-y-auto overflow-x-auto shadow-lg rounded"
            >
              <div
                id="default-carousel"
                class="relative w-full"
                data-carousel="slide"
              >
                <!-- Carousel wrapper -->
                <div class="relative h-48 overflow-hidden rounded-lg md:h-96">
                  <div
                    v-for="(item, index) in carouselItems"
                    :key="index"
                    :class="{
                      hidden: index !== activeIndex,
                      'duration-700 ease-in-out': true,
                    }"
                    data-carousel-item
                  >
                    <img
                      :src="item.image"
                      class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    />
                  </div>
                </div>
                <!-- Slider indicators -->
                <div
                  class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
                >
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                </div>
                <!-- Slider controls -->
                <button
                  type="button"
                  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4 text-white rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-focus:outline-none"
                  >
                    <svg
                      class="w-4 h-4 text-white rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>

              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Overview</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div
                    class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      porcelain, Denmark, with green company mark and blue
                      waves, decor Flora Danica - flowers with relief decoration
                      & gold edge, motif Alisma natans L. / Rosa
                      pimpinellaefolia L., model no. 3549, manufactured 1943 /
                      1969-1973, 2x D 26 cm, slight gold abrasion on plate from
                      1943
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to
                      <a
                        href="/docs/getting-started/introduction/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                        >get started</a
                      >
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-2"
                  >
                    <span>Payment and Shipping</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-2"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-2"
                >
                  <div
                    class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                  >
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      Accepted forms of payment:
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                      Check out the
                      <a
                        href="https://flowbite.com/figma/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                        >Shipping</a
                      >
                      Wire Transfer worldwide shipping, please ask
                    </p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span>Term</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-3"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div
                    class="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
                  >
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      1. The auction is carried out by Sebastian Marzeion -
                      Antikauktion Krefeld (hereinafter auctioneer) in the name
                      and for the account of a third party. The purchase
                      contract is mediated between the consignor and the buyer.
                      In the case of a distance selling transaction, there is no
                      right of cancellation; § 312g paragraph 2 no. 10 BGB.
                    </p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      2. The auctioneer has the domiciliary rights in all
                      auction rooms and reserves the right to exclude people
                      from viewing or auctioning without giving reasons. Bidders
                      must identify themselves by presenting their identity
                      card.
                    </p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                          >3. The auctioneer reserves the right to combine
                          numbers of the catalogue, to separate them and, if
                          there is a special reason, to call them out of
                          sequence or to withdraw them.</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                          >Tailwind UI</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-10">
              <div
                class="text-gray-950 w-full text-xl border border-gray-900 text-end bg-white font-medium rounded-full px-5 py-2.5 me-2 mt-2"
              >
                10,000 $
              </div>
              <button
                type="button"
                class="text-white w-full text-xl bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mt-2"
              >
                Bid
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white h-full">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-0 h-128 overflow-y-auto overflow-x-auto shadow-lg rounded"
          >
            <h1
              class="text-sm ml-1 mb-5 text-center font-semibold text-gray-950 sm:text-lg"
            >
              Lot 50 open for bidding
            </h1>
            <ol class="relative mx-3 border-s border-gray-200">
              <li
                v-for="(item, index) in bids"
                :key="index"
                class="mb-5 ms-4 flex justify-between"
              >
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-5 text-2xl font-normal leading-none text-gray-950"
                  >{{ item.price }}</time
                >
                <h3 class="mb-5 text-xl font-normal leading-none text-gray-950">
                  {{ item.label }}
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
<script>
import data from "../../public/data.json";
import bids from "../../public/bids.json";
export default {
  name: "pink-tabs",
  data() {
    return {
      items: data,
      bids: bids,
      openTab: 1,
      carouselItems: [
        {
          image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
        },
        {
          image: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
        },
        {
          image: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        },
      ],
      activeIndex: 0,
    };
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
