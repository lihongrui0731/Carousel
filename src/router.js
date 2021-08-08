import { createRouter, createWebHistory } from "vue-router";
import CarouselDemo from "./CarouselDemo.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: CarouselDemo }]
});