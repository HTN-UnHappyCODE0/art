<template>
  <div
    id="drawer-example"
    tabindex="-1"
    aria-labelledby="drawer-label"
    class="fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <svg
        class="w-4 h-4 me-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        /></svg
      >filter
    </h5>
    <button
      type="button"
      data-drawer-hide="drawer-example"
      aria-controls="drawer-example"
      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <h1>Colors checked: {{ selectedFilter.join(", ") }}</h1>
    <form class="mt-4 border-t">
      <div v-for="(attribute, index) in filters" :key="attribute.attribute_id">
        <div
          :id="'accordion-collapse-' + attribute.attribute_name"
          :data-accordion="'collapse-' + attribute.attribute_name"
          class="py-3 px-2"
        >
          <h2 :id="'accordion-collapse-heading-' + index">
            <button
              type="button"
              class="flex w-full bg-inherit items-center justify-between"
              :data-accordion-target="'#accordion-collapse-body-' + index"
              :aria-controls="'accordion-collapse-body-' + index"
              aria-expanded="true"
            >
              <span class="font-medium text-gray-900">{{
                attribute.attribute_name
              }}</span>
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
            :id="'accordion-collapse-body-' + index"
            class="hidden px-2"
            :aria-labelledby="'accordion-collapse-heading-' + index"
          >
            <div class="pt-6">
              <div class="space-y-6">
                <div
                  v-for="value in attribute.attribute_values"
                  :key="value.value"
                  class="flex items-center"
                >
                  <input :id="'filter-mobile-rarity-' + value.value"
                  :name="attribute.attribute_name"
                  :value="value.value" type="checkbox" class="h-4 w-4 rounded
                  border-gray-300 text-blue-700 focus:ring-indigo-500"
                  :checked="isChecked(value.value, attribute.attribute_name)"
                  @change="updateselectedFilter(value.value,
                  attribute.attribute_name)"
                  
                  />
                  <label
                    :for="'filter-mobile-rarity-' + value.value"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                    >{{ value.label }}</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="accordion-collapse3"
        data-accordion="collapse3"
        class="border-t border-gray-200 py-3 px-2"
      >
        <h2 id="accordion-collapse3-heading-1">
          <button
            type="button"
            class="flex w-full bg-inherit items-center justify-between"
            data-accordion-target="#accordion-collapse3-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse3-body-1"
          >
            <span class="font-medium text-gray-900">Prize</span>
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
          id="accordion-collapse3-body-1"
          class="hidden px-2"
          aria-labelledby="accordion-collapse3-heading-1"
        >
          <div class="pt-6">
            <div class="flex justify-center items-center space-y-6">
              <div
                v-bind:x-data="range()"
                v-on:load="
                  mintrigger();
                  maxtrigger();
                "
                class="relative max-w-xl w-full"
              >
                <div>
                  <input
                    type="range"
                    step="100"
                    v-bind:min="min"
                    v-bind:max="max"
                    v-on:input="mintrigger"
                    v-model="minprice"
                    class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                  />

                  <input
                    type="range"
                    step="100"
                    v-bind:min="min"
                    v-bind:max="max"
                    v-on:input="maxtrigger"
                    v-model="maxprice"
                    class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                  />

                  <div class="relative z-10 h-1">
                    <div
                      class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-700"
                    ></div>

                    <div
                      class="absolute z-20 top-0 bottom-0 rounded-md bg-blue-700"
                      v-bind:style="
                        'right:' + maxthumb + '%; left:' + minthumb + '%'
                      "
                    ></div>

                    <div
                      class="absolute z-30 w-5 h-5 top-0 left-0 bg-gray-950 rounded-full -mt-2 -ml-1"
                      v-bind:style="'left: ' + minthumb + '%'"
                    ></div>

                    <div
                      class="absolute z-30 w-5 h-5 top-0 right-0 bg-gray-950 rounded-full -mt-2 -mr-3"
                      v-bind:style="'right: ' + maxthumb + '%'"
                    ></div>
                  </div>
                </div>
                <div class="flex justify-between py-1">
                  <div class="flex items-center">
                    <svg
                      class="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V71.7c-3.1 .1-6.2 .3-9.3 .6c-23.2 1.9-47.2 7.4-67.2 20.1C38.7 105.6 23.5 126 18 154.2c-3.9 20.3-2 38.8 6.1 55.2c8 16 20.9 27.6 34.8 36.2c26.2 16.2 61.9 25.3 92.9 33.2l2.3 .6c33.9 8.6 62.6 16.1 81.7 28c9 5.6 14.3 11.2 17.1 16.9c2.7 5.3 4.2 12.8 2 24.5c-2.9 14.7-13.4 26.9-34.5 34.9c-21.6 8.2-52 10.9-87.6 5.9c-22.6-3.3-61.8-12.7-83-22.1c-12.1-5.4-26.3 .1-31.7 12.2s.1 26.3 12.2 31.7C57 423.2 101.1 433.4 126 437l.1 0c3.3 .5 6.6 .9 9.9 1.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V439.4c19.3-1.3 37.4-4.9 53.5-11c31.9-12.1 57.7-35.2 64.5-70.6c3.9-20.3 2-38.8-6.1-55.2c-8-16-20.9-27.6-34.8-36.2c-26.2-16.2-61.9-25.3-92.9-33.2l-2.3-.6c-33.9-8.6-62.6-16.1-81.7-28c-9-5.6-14.3-11.2-17.1-16.9c-2.7-5.3-4.2-12.8-2-24.5c2.9-14.8 10.1-24 20.2-30.4c10.9-6.9 26.3-11.2 45.3-12.7c38.3-3.1 83.1 5.3 113.9 12.5c12.9 3.1 25.8-4.9 28.9-17.8s-4.9-25.8-17.8-28.9c-18.7-4.4-44.2-9.7-71.5-12.5V24z"
                      />
                    </svg>
                    <h1 class="font-normal">0</h1>
                  </div>
                  <div class="flex items-center">
                    <svg
                      class="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V71.7c-3.1 .1-6.2 .3-9.3 .6c-23.2 1.9-47.2 7.4-67.2 20.1C38.7 105.6 23.5 126 18 154.2c-3.9 20.3-2 38.8 6.1 55.2c8 16 20.9 27.6 34.8 36.2c26.2 16.2 61.9 25.3 92.9 33.2l2.3 .6c33.9 8.6 62.6 16.1 81.7 28c9 5.6 14.3 11.2 17.1 16.9c2.7 5.3 4.2 12.8 2 24.5c-2.9 14.7-13.4 26.9-34.5 34.9c-21.6 8.2-52 10.9-87.6 5.9c-22.6-3.3-61.8-12.7-83-22.1c-12.1-5.4-26.3 .1-31.7 12.2s.1 26.3 12.2 31.7C57 423.2 101.1 433.4 126 437l.1 0c3.3 .5 6.6 .9 9.9 1.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V439.4c19.3-1.3 37.4-4.9 53.5-11c31.9-12.1 57.7-35.2 64.5-70.6c3.9-20.3 2-38.8-6.1-55.2c-8-16-20.9-27.6-34.8-36.2c-26.2-16.2-61.9-25.3-92.9-33.2l-2.3-.6c-33.9-8.6-62.6-16.1-81.7-28c-9-5.6-14.3-11.2-17.1-16.9c-2.7-5.3-4.2-12.8-2-24.5c2.9-14.8 10.1-24 20.2-30.4c10.9-6.9 26.3-11.2 45.3-12.7c38.3-3.1 83.1 5.3 113.9 12.5c12.9 3.1 25.8-4.9 28.9-17.8s-4.9-25.8-17.8-28.9c-18.7-4.4-44.2-9.7-71.5-12.5V24z"
                      />
                    </svg>
                    <h1 class="font-normal">10000</h1>
                  </div>
                </div>

                <div class="flex justify-between items-center py-2">
                  <div class="flex items-center">
                    <input
                      type="text"
                      maxlength="5"
                      v-on:input="mintrigger"
                      v-model="minprice"
                      class="px-3 py-2 border border-gray-200 rounded w-24 text-center"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      maxlength="5"
                      v-on:input="maxtrigger"
                      v-model="maxprice"
                      class="px-3 py-2 border border-gray-200 rounded w-24 text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      minprice: 1000,
      maxprice: 7000,
      min: 100,
      max: 10000,
      minthumb: 0,
      maxthumb: 0,
      selectedFilter: [],
    };
  },

  methods: {
    ...mapActions(["fetchProductByFilter"]),
    loadData() {
      if (!this.products.length) {
        this.fetchProductByFilter();
      }
    },

    updateselectedFilter(categoryValue, attributeName) {
      const selectedFilterIndex = this.selectedFilter.findIndex(filter => filter.attributeName === attributeName);
      if (selectedFilterIndex === -1) {
        this.selectedFilter.push({ attributeName, values: [categoryValue] });
      } else {
        const index = this.selectedFilter[selectedFilterIndex].values.indexOf(categoryValue);
        if (index === -1) {   
          this.selectedFilter[selectedFilterIndex].values.push(categoryValue);
        } else {
          this.selectedFilter[selectedFilterIndex].values.splice(index, 1);
        }
      }
      this.$emit("update:selectedFilter", this.selectedFilter);
    },
    isChecked(categoryValue, attributeName) {
      const selectedFilterIndex = this.selectedFilter.findIndex(filter => filter.attributeName === attributeName);
      return selectedFilterIndex !== -1 && this.selectedFilter[selectedFilterIndex].values.includes(categoryValue);
    },
    range() {
      this.mintrigger();
      this.maxtrigger();
    },
    mintrigger() {
      this.minprice = Math.min(this.minprice, this.maxprice - 500);
      this.minthumb =
        ((this.minprice - this.min) / (this.max - this.min)) * 100;
    },
    maxtrigger() {
      this.maxprice = Math.max(this.maxprice, this.minprice + 500);
      this.maxthumb =
        100 - ((this.maxprice - this.min) / (this.max - this.min)) * 100;
    },
  },
  computed: {
    ...mapGetters(["filters"]),
  },
  mounted() {
    this.fetchProductByFilter();
  },
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
}
</style>
