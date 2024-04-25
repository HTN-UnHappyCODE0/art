<script></script>
<template>
  <div class="h-64 mx-auto max-w-screen-xl">
    <div class="flex flex-wrap justify-between">
      <h2 class="text-2xl mx-8 max-w-lg lg:max-w-lg lg:text-4xl">Auctions</h2>
      <h2 class="text-1xl mx-8 max-w-lg lg:max-w-lg lg:text-1xl">
        Bid on works you love with auctions on Auction. With bidding opening
        daily, Auction connects collectors like you to art from leading auction
        houses, nonprofit organizations, and sellers across the globe. We
        feature premium artworks including modern, contemporary, and street art,
        so you can find works by your favorite artists—and discover new ones—all
        in one place.
      </h2>
    </div>

    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  </div>
  <div class="relative mx-auto mb-20 lg:max-w-7xl">
    <div class="flex mx-3 justify-between">
      <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Trending Lots
        </h2>
        <h3 class="text-2xl font-bold tracking-tight text-gray-500">
          Most loved works
        </h3>
      </div>

      <router-link
        to="/live"
        class="py-4 underline hover:text-blue-700"
        aria-current="page"
        >View all</router-link
      >
    </div>

    <ul
      class="mt-10 pb-8 px-[vw] w-full flex gap-5 snap-x scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-auto"
    >
      <li v-for="(item, index) in items" :key="index" class="snap-align-none">
        <div class="group min-w-80 relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="item.imageUrl"
              :alt="item.altText"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="item.link">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.title }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ item.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="relative mx-auto mb-20 lg:max-w-7xl">
    <div class="flex mx-3 justify-between">
      <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Scenery</h2>
        <h3 class="text-2xl font-bold tracking-tight text-gray-500">
          Live March 7 at 12:00 am +07
        </h3>
      </div>

      <a href="" class="py-4 underline hover:text-blue-700">View All</a>
    </div>

    <ul
      class="mt-10 pb-8 px-[vw] w-full flex gap-5 snap-x scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-auto"
    >
      <li v-for="(item, index) in items" :key="index" class="snap-align-none">
        <div class="group min-w-80 relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="item.imageUrl"
              :alt="item.altText"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="item.link">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.title }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ item.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="relative mx-auto mb-20 lg:max-w-7xl">
    <div class="flex mx-3 justify-between">
      <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Portraits
        </h2>
        <h3 class="text-2xl font-bold tracking-tight text-gray-500">
          Live March 8 at 11:00 am +07
        </h3>
      </div>

      <a href="" class="py-4 underline hover:text-blue-700">View All</a>
    </div>

    <ul
      class="mt-10 pb-8 px-[vw] w-full flex gap-5 snap-x scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-auto"
    >
      <li v-for="(item, index) in items" :key="index" class="snap-align-none">
        <div class="group min-w-80 relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="item.imageUrl"
              :alt="item.altText"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="item.link">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.title }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ item.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import data from "../../public/data.json";
export default {
  name: "auction",
  data() {
    return {
      items: data,
    };
  },
};
</script>
