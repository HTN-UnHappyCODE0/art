<template>
    <div id="accordion - collapse" data-accordion="collapse" class="py-3 px-2 border-t border-gray-200">

        <h2 id="accordion-collapse-heading-1">
            <button type="button" class="flex w-full bg-inherit items-center justify-between"
                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                aria-controls="accordion-collapse-body-1">
                <span class="font-medium text-gray-900">{{ title }}</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div id="accordion-collapse-body-1" class="hidden px-2" aria-labelledby="accordion-collapse-heading-1">
            <div class="pt-6">
                <div class="space-y-6">
                    <div v-for="(item, index) in items" :key="index" class="flex items-center">
                        <input :id="'filter-mobile-rarity-' + index" :name="'rarity[]'" :value="item.value"
                            type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-indigo-500"
                            :checked="isChecked(item.value)" @change="updateSelectedCategories(item.value)" />
                        <label :for="'filter-mobile-rarity-' + index" class="ml-3 min-w-0 flex-1 text-gray-500">{{
                    item.value
                }}</label>
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
export default {
    props: {

        title: {
            type: String,
            required: true
        },


        items: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {

        isChecked(itemValue) {
            return this.selectedItems.includes(itemValue);
        },
        updateSelectedCategories(itemValue) {
            const index = this.selectedItems.indexOf(itemValue);
            if (index === -1) {
                this.selectedItems.push(itemValue);
            } else {
                this.selectedItems.splice(index, 1);
            }
            this.$emit("update:selectedItems", this.selectedItems);
        }
    }
}
</script>