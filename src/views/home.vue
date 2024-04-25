<template>
  <div class="px-5 pb-5 bg-white antialiased">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4882d8192357077.65da60f1ebfd9.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div class="relative mx-auto max-w-screen-xl px-4 md:py-20 md:h-96 sm:px-6 items-center lg:px-8">
            <h1 class="text-3xl max-w-lg font-normal sm:text-5xl">
              Discover the Beauty of Art Auctions
            </h1>
            <p class="mt-4 text-1xl max-w-lg text-center sm:text-left sm:text-xl/relaxed">
              Explore a curated collection of exquisite art pieces and join our
              vibrant community of art enthusiasts.
            </p>
            <div class="mt-7 flex flex-wrap gap-4 text-center">
              <a href="#"
                class="block w-full rounded-full bg-white border-gray-800 px-12 py-3 text-sm font-medium text-gray-950 shadow hover:bg-blue-700 focus:outline-none focus:ring-gray-100 sm:w-auto">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d91869192357077.65da603519f62.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div class="relative mx-auto max-w-screen-xl px-4 md:py-20 md:h-96 sm:px-6 items-center lg:px-8">
            <h1 class="text-3xl max-w-lg font-normal sm:text-5xl">
              Discover the Beauty of Art Auctions
            </h1>
            <p class="mt-4 text-center sm:text-left text-1xl max-w-lg sm:text-xl/relaxed">
              Explore a curated collection of exquisite art pieces and join our
              vibrant community of art enthusiasts.
            </p>
            <div class="mt-7 flex flex-wrap gap-4 text-center">
              <a href="#"
                class="block w-full rounded-full bg-white border-gray-800 px-12 py-3 text-sm font-medium text-gray-950 shadow hover:bg-blue-700 focus:outline-none focus:ring-gray-100 sm:w-auto">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/23201b192357077.65da60f1ecb7f.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <div class="relative mx-auto max-w-screen-xl px-4 md:py-20 md:h-96 sm:px-6 items-center lg:px-8">
            <h1 class="text-3xl max-w-lg font-normal sm:text-5xl">
              Discover the Beauty of Art Auctions
            </h1>
            <p class="mt-4 text-center sm:text-left text-1xl max-w-lg sm:text-xl/relaxed">
              Explore a curated collection of exquisite art pieces and join our
              vibrant community of art enthusiasts.
            </p>
            <div class="mt-7 flex flex-wrap gap-4 text-center">
              <a href="#"
                class="block w-full rounded-full bg-white border-gray-800 px-12 py-3 text-sm font-medium text-gray-950 shadow hover:bg-blue-700 focus:outline-none focus:ring-gray-100 sm:w-auto">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-5 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-5 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button type="button" class="w-5 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
      </div>
      <!-- Slider controls -->
      <button type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-inherit group-focus:outline-none">
          <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-inherit group-focus:outline-none">
          <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>

  <div class=" mx-auto my-5 lg:max-w-7xl ">
    <div class="items-center xl:flex xl:my-10">
      <h1 class="font-medium mx-10 text-xl xl:mx-0">Lựa chọn theo thể loại</h1>
      <div class="mt-5 mx-10 flex-grow justify-evenly flex xl:mt-0">
        <selectCategoryButton :href="'category_excepturi' "> Tranh</selectCategoryButton />
        <selectCategoryButton :href=" 'category_excepturi' "> Ảnh</selectCategoryButton />
        <selectCategoryButton :href="'category_excepturi' "> ???</selectCategoryButton />
      </div>
    </div>

    <hr class=" border-gray-200 mx-10 mb-8 xl:ml-0" />
  </div>

  <div class="mx-auto my-5 lg:max-w-7xl ">
    <h1 class="font-medium mx-10 text-4xl xl:mx-0 text-center">Nổi bật</h1>
    <div class="relative ">


      <ul
        class="mt-10 pb-8 px-[vw] w-full flex gap-5 snap-x scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-auto">
        <li v-for="(item, index) in datatrend" :key="index" class="snap-align-none">
          <div class="group min-w-80 relative">
            <div class=" w-96 overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 h-96">
              <img :src="item.imageUrl" :alt="item.altText"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex text-center justify-center">
              <div class="">
                <h3 class="text-2xl font-medium  text-gray-800">
                  <a :href="item.link">
                    <span aria-hidden="true" class=" absolute inset-0"></span>
                    {{ item.title }}
                  </a>
                </h3>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <hr class=" border-gray-200 mx-10 mb-8 xl:ml-0" />
  </div>


  <div class="relative mx-auto mb-20 lg:max-w-7xl">
    <div class="flex mx-2 justify-between">
      <div>
        <h2 class="text-2xl py-4 font-bold tracking-tight text-gray-900">
          Tác phẩm nổi bật
        </h2>
      </div>

      <a href="" class="py-4 underline hover:text-blue-700">View All Auctions</a>
    </div>

    <ul
      class="mt-10 pb-8 px-[vw] w-full flex gap-5 snap-x scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-auto">
      <li v-for="(item, index) in items" :key="index" class="snap-align-none">
        <div class="group min-w-80 relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="item.imageUrl" :alt="item.altText"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
            <p class="text-sm font-medium text-gray-900">${{ item.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="relative mx-auto mb-20 lg:max-w-7xl">
    <div class="flex mx-2 justify-between">
      <div>
        <h2 class="text-2xl py-4 font-bold tracking-tight text-gray-900">
          Nghệ sĩ nổi bật
        </h2>
      </div>

      <a href="" class="py-4 underline hover:text-blue-700">View All Auctions</a>
    </div>

    <ul
      class="mt-10 pb-8 px-[vw] w-full flex gap-5 snap-x scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-x-auto">
      <li v-for="(item, index) in item2s" :key="index" class="snap-align-none">
        <div class="group min-w-80 relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="item.imageUrl" :alt="item.altText"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 ">

            <h3 class="text-sm text-gray-700">
              <a :href="item.link">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ item.name }}
              </a>
            </h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import selectCategoryButton from "@/components/SelectCategoryButton.vue";
</script>

<script>
import data from "../../public/data.json";
import datatrend from "../../public/datatrend.json";
import dataArtist from "../../public/dataArtist.json";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
export default {
  data() {
    return {
      item1s: datatrend,
      item2s: dataArtist,
      items: data,
    };
  },
};
</script>
