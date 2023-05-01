import { createWebHistory, createRouter } from "vue-router";
import Product from "../views/SanPham.vue";
import IntroMenu from "../views/IntroMenu.vue";
import Detail from "../views/Detail.vue";

import AdminMenu from "../views/ProductView.vue";
import ProductAdd from "../views/ProductAdd.vue";
import EditMenu from "../views/EditMenu.vue";
import DeleteMenu from "../views/DeleteMenu.vue";
import Login from "../views/Login.vue"
import SignIn from "../views/SignIn.vue"
const routes = [
  //   {
  //     path: "/",
  //     name: "ContactBook",
  //     component: ContactBook,
  //   },
  {
    path: "/",
    name: "IntroMenu",
    component: IntroMenu,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/detail",
    name: "Detail",
    component: Detail,
  },

  {
    path: "/admin/:id/edit",
    name: "EditMenu",
    component: EditMenu,
  },
  {
    path: "/admin",
    name: "AdminMenu",
    component: AdminMenu,
  },
  {
    path: "/add",
    name: "ProductAdd",
    component: ProductAdd,
  },

  {
    path: "/delete",
    name: "DeleteMenu",
    component: DeleteMenu,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dangky",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
