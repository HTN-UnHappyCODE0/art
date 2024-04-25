import { createRouter, createWebHistory } from "vue-router";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import auction from "../views/auction.vue";
import home from "../views/home.vue";
import live from "../views/live.vue";
import cart from "@/views/cart.vue";
import ProductDetail from "../views/productDetail.vue";
import DefaultLayout from "../default/DefaultLayout.vue";
import Category from "../views/category.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "/", component: home, name: "home" },
        { path: "/auction", component: auction, name: "auction" },
        

        { path: "/cart", component: cart, name: "cart" },
        { path: "/live", component: live, name: "live" },
        {
          name: "productDetail",
          path: "/art/:product_id",
          component: ProductDetail,
        },
        {
          path: '/:categoryName', 
          name: 'Category',
          component: Category,
        }
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  onMounted(() => {
    initFlowbite();
  });

  next();
});

export default router;
