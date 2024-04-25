<template>
  <div
    class="grid grid-cols-5 mx-auto my-10 h-auto bg-slate-300 max-w-screen-xl"
  >
    <div class="bg-gray-400 h-full place-items-center col-span-3">
      <div class="flex justify-center">
        <div
          id="container"
          @mousemove="handleMouseMove"
          @mouseleave="resetTransform"
          class="flex justify-center items-center overflow-hidden w-7/12"
        >
          <img
            v-if="
              productDetail.productImages &&
              productDetail.productImages.length > 0
            "
            :style="imgStyle"
            :src="productDetail.productImages[0].image_url"
            alt=""
            class="object-cover"
          />
        </div>
      </div>
      <div class="text-xl mx-5 mt-10 font-normal text-gray-950" >
        About the the work
        <div class="w-full bg-gray-200 rounded-full h-1 mb-4">
          <div class="bg-black h-1 rounded-full" style="width: 25%"></div>
        </div>
      </div>
      <div class="border mx-5 border-x-gray-950 border-t-gray-950">
        <div class="m-5">
          <h2 class="text-sm ml-1 font-normal text-gray-950">
            {{ productDetail.description }}
          </h2>
        </div>
      </div>
      <div class="border mx-5 mb-5 border-gray-950">
        <div class="m-5">
          <div class="flex">
            <h1 class="text-sm ml-1 w-80 font-normal text-gray-950">
              Category
            </h1>
            <h2 class="text-sm ml-1 font-normal text-gray-950" v-if="productDetail.category">
              {{ productDetail.category.category_name }}
            </h2>
          </div>
          <div class="flex mt-5">
            <h1 class="text-sm ml-1 w-80 font-normal text-gray-950">Size</h1>
            <h2 class="text-sm ml-1 font-normal text-gray-950">
              {{ productDetail.size }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-slate-700 col-span-2">
      <div class="my-5 mx-10">
        <h1 class="text-xs ml-1 font-thin text-gray-950 sm:text-lg">
          {{ productDetail.product_id }}
        </h1>
        <h2 class="text-sm ml-1 font-semibold text-gray-950 sm:text-2xl" v-if="productDetail.author">
          {{ productDetail.author.author_name }}
        </h2>

        <div
          class="text-sm mb-5 italic font-semibold text-gray-600 sm:text-2xl"
        >
          {{ productDetail.product_name }}
        </div>
        <div class="my-5">
          <h1 class="text-xs ml-1 font-thin text-gray-950 sm:text-lg" v-if="productDetail.category">
            {{ productDetail.category.category_name }}
          </h1>
          <h1 class="text-xs ml-1 font-thin text-gray-950 sm:text-lg">
            {{ productDetail.size }}
          </h1>
        </div>
        <hr class="my-3 border-gray-500 sm:mx-auto lg:my-4" />
        <div class="mb-5 flex justify-between">
          <h1 class="text-xs ml-1 font-semibold text-gray-950 sm:text-2xl">
            Starting bid
          </h1>
          <h1 class="text-xs ml-1 font-semibold text-gray-950 sm:text-2xl">
            ${{ productDetail.price }}
          </h1>
        </div>
        <hr class="my-3 border-gray-500 sm:mx-auto lg:my-4" />
        <div class="my-5">
          <div class="text-xs mb-3 ml-1 font-thin text-gray-950 sm:text-lg">
            Place max bid
          </div>
          <input
            type="text"
            id="bid"
            :placeholder="'$' + productDetail.price"
            class="w-full rounded-full border-gray-200"
          />
          <button
            type="button"
            class="text-white w-full text-xl bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-full px-5 py-2.5 mt-2"
          >
            Bid
          </button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// import data from "../../public/data.json";

export default {
  data() {
    return {
      // product: {},
      imgStyle: {
        transformOrigin: "center",
        transform: "",
      },
    };
  },
  // created() {
  //   const productName = this.$route.params.productName;

  //   this.product = data.find((item) => item.name === productName);
  // },
  methods: {
    handleMouseMove(event) {
      const x = event.clientX - event.target.offsetLeft;
      const y = event.clientY - event.target.offsetTop;

      this.imgStyle.transformOrigin = `${x}px ${y}px`;
      this.imgStyle.transform = "scale(2)";
    },
    resetTransform() {
      this.imgStyle.transformOrigin = "center";
      this.imgStyle.transform = "";
    },
  },
};
</script>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";

const router = useRoute();
const productDetail = ref({});

onMounted(() => {
  store.dispatch("fetchProductDetail", router.params.product_id).then(() => {
    productDetail.value = store.state.productDetail;
  });
});
</script>
