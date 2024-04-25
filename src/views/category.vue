<template>
  <div class="h-30 mt-10 mx-auto max-w-screen-xl">
    <div class="xl:flex flex-wrap justify-between">
      <h2 class="mb-5 text-2xl mx-8 max-w-lg lg:max-w-lg lg:text-4xl">
        {{ selectedCategory }}
      </h2>
      <h2 class="text-1xl mx-8 max-w-lg lg:max-w-lg lg:text-1xl">
        {{ getCategoryDescription(selectedCategory) }}
      </h2>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  </div>
  <div class="flex justify-between mx-auto max-w-screen-xl">
    <button
      type="button"
      class="text-gray-950 bg-white mx-8 rounded-full h-10 border border-gray-800 hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium text-sm px-5 text-center inline-flex items-center me-2 mb-2"
      data-drawer-target="drawer-example"
      data-drawer-show="drawer-example"
      aria-controls="drawer-example"
    >
      <svg
        class="w-4 h-4 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentfilterSelected"
        viewBox="0 0 512 512"
      >
        <path
          d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
        />
      </svg>
      Lọc
    </button>
    <select
      id="default"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
      v-model="selectedCategory"
      @change="navigateToCategory"
    >
      <option value="All">All</option>
      <option
        v-for="category in categories"
        :key="category.category_id"
        :value="category.category_name"
      >
        {{ category.category_name }}
      </option>
    </select>
  </div>

  <div class="flex flex-wrap mx-auto max-w-screen-xl">
    <div class="ml-8">
      <template
        v-for="(filter, filterIndex) in selectedFilter"
        :key="filterIndex"
      >
        <template
          v-for="(value, valueIndex) in filter.values"
          :key="valueIndex"
        >
          <button
            type="button"
            class="text-gray-950 bg-gray-100 rounded-full border border-inherit hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            @click="removefilterSelected(filterIndex, valueIndex)"
          >
            {{ value }}
            <span class="mx-1">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentfilterSelected"
                viewBox="0 0 448 512"
              >
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </span>
          </button>
        </template>
      </template>
    </div>
  </div>
  <template v-if="listProducts.length > 0">
    <div class="h-full mt-10 mx-auto max-w-screen-xl">
      <ul class="my-8 mx-8 columns-2 lg:columns-3">
        <li v-for="item of listProducts" :key="item.product_id" class="h-full">
          <router-link
            :to="{
              name: 'productDetail',
              params: { product_id: item.product_id },
            }"
          >
            <div class="group min-w-10 mb-5 relative">
              <div
                class="w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:h-full"
              >
                <img
                  :src="item.productImages[0].image_url"
                  :alt="item.price"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div class="mt-2">
                  <h3 class="text-lg font-bold text-gray-700">
                    {{ item.product_name }}
                  </h3>
                  <h4 class="text-sm font-bold text-gray-500">
                    {{ item.description }}
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>

      <fwb-pagination
        v-model="currentPage"
        :total-items="totalItems"
        :total-pages="totalPages"
        :show-labels="false"
        class="flex mt-10 max-w-screen-xl mx-auto justify-center"
      >
        <template #prev-icon>Prev</template>
        <template #next-icon>Next</template>
        <template v-slot:page-button="{ page, setPage }">
          <button
            @click="setPage(page)"
            class="flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 border border-white hover:text-gray-700 hover:underline"
          >
            {{ page }}
          </button>
        </template>
      </fwb-pagination>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    </div>
  </template>
  <template v-else>
    <div class="text-gray-800 text-2xl text-center my-40 font-bold w-full">
      Sorry, no results were found for that query.
    </div>
  </template>
{{selectedFilter}}
  <drawer @update:selectedFilter="handleselectedFilterUpdate" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedFilter: [],
      openSort: true,
      sortType: "Sort by",
      selectedCategory: "ALL",
    };
  },
  methods: {
    ...mapActions([
      "fetchProductByCategory",
      "getProduct",
      "getProductByCategory",
    ]),
    // toggleSort() {
    //   this.openSort = !this.openSort;
    // },
    // updateSort(type) {
    //   this.sortType = type;
    //   this.openSort = !this.openSort;
    // },
    handleselectedFilterUpdate(selectedFilter) {
      this.selectedFilter = selectedFilter;
    },
    removefilterSelected(filterIndex, valueIndex) {
      const filterToRemove = this.selectedFilter[filterIndex];
      const valueToRemove = filterToRemove.values[valueIndex];
      filterToRemove.values.splice(valueIndex, 1);
      if (filterToRemove.values.length === 0) {
        this.selectedFilter.splice(filterIndex, 1);
      }
      this.filterProducts();
    },
    filterProducts() {
      let filteredProducts = this.items;
      this.selectedFilter.forEach((filter) => {
        filteredProducts = filteredProducts.filter((product) => {
          return product.someProperty === filter;
        });
      });
      if (this.selectedCategory !== "All") {
        filteredProducts = filteredProducts.filter((product) => {
          return product.category === this.selectedCategory;
        });
      }
      this.listProducts = filteredProducts;
    },
    // removeSize(sizeValue) {
    //   const updatedSizes = this.sizes.map((size) => {
    //     if (size.value === sizeValue) {
    //       return { ...size, checked: false };
    //     }
    //     return size;
    //   });
    //   this.$emit("updateSelectedSizes", updatedSizes);
    // },

    navigateToCategory() {
      this.$router.push({
        name: "Category",
        params: { categoryName: this.selectedCategory },
      });
      this.getProduct({
        category_name: this.selectedCategory,
        styles: this.getFilterValues("Style"),
        subjects: this.getFilterValues("Subject"),
        materials: this.getFilterValues("Material"),
        sizes: this.getFilterValues("Size"),
      });
    },
    getFilterValues(attributeName) {
      const filter = this.selectedFilter.find(
        (filter) => filter.attributeName === attributeName
      );
      return filter ? filter.values : [];
    },
    getCategoryDescription(categoryName) {
      if (!this.categories) {
        return "";
      }
      const category = this.categories.find(
        (cat) => cat.category_name === categoryName
      );
      return category ? category.category_description : "";
    },
  },
  computed: {
    ...mapGetters(["categories", "listProducts"]),
  },
  watch: {
    selectedFilter: {
      handler(newVal, oldVal) {
        this.getProduct({
          category_name: this.selectedCategory,
          styles: this.getFilterValues("Style"),
          subjects: this.getFilterValues("Subject"),
          materials: this.getFilterValues("Material"),
          sizes: this.getFilterValues("Size"),
        });
      },
      deep: true,
    },
  },

  mounted() {
    const router = useRoute();
    const categoryName = router.params.categoryName;
    if (categoryName !== undefined) {
      this.selectedCategory = categoryName;
    }
    this.fetchProductByCategory();
    watch(
      () => router.params.categoryName,
      (newCategoryName, oldCategoryName) => {
        if (newCategoryName !== oldCategoryName) {
          this.selectedCategory = newCategoryName;
          this.getProductByCategory(newCategoryName);
          
        }
      }
    );
  },
};
</script>

<script setup>
import drawer from "../components/drawer.vue";
import { FwbPagination } from "flowbite-vue";
import { ref, computed, watch } from "vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import store from "../store";
import { useRoute } from "vue-router";
const router = useRoute();

onMounted(() => {
  initFlowbite();
  store.dispatch("getProductByCategory", router.params.categoryName);
});

// const currentPage = ref(1);
// const totalItems = ref(data.length);
// const totalPages = ref(Math.ceil(data.length / 9));

// const slicedProducts = computed(() => {
//   const start = (currentPage.value - 1) * 9;
//   return data.slice(start, start + 9);
// });
</script>
