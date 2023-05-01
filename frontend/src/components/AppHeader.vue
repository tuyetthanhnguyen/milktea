import logo from "./../images/logo/LOGOMILKTEA.png"
<template>
  <nav class="navbar navbar-expand-lg navbar-header">
    <router-link class="navbar-brand img-link" to="/">
      <img
        class="img-header"
        src="https://img.freepik.com/premium-vector/bubble-milk-tea-with-coffee-flavor-boba-pearls-takeaway-cup-asian-cold-drink-bubbletea-with-tapioca-milky-coffe-cocktail-with-straw-flat-vector-illustration-isolated-white-background_198278-16299.jpg?w=2000"
        alt=""
      />
    </router-link>
    <button
      class="navbar-toggler btn-bars"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/product">QUÁN TRÀ SỮA </router-link>
        </li>
        <li class="nav-item item-menu-coffe">
          <router-link class="nav-link" to="/product/detail">THỰC ĐƠN</router-link>
          <div class="item-menu">
            <div class="container menu-container d-flex">
              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">TRÀ SỮA</li>
                <li class="item-menu_coffe">Trà sữa truyền thống</li>
                <li class="item-menu_coffe">Trà sữa trân châu đường đen</li>
                <li class="item-menu_coffe">Trà sữa nướng Đài Loan</li>
                <li class="item-menu_coffe">Trà sữa machiato</li>
              </ul>

              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">MATCHA</li>
                <li class="item-menu_coffe">Trà sữa matcha truyền thống</li>
                <li class="item-menu_coffe">Trà sữa matcha machiato</li>
              </ul>
              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">TRÀ</li>
                <li class="item-menu_coffe">Trà sen vàng</li>
                <li class="item-menu_coffe">Trà thạch đào</li>
                <li class="item-menu_coffe">Trà thanh đào</li>
                <li class="item-menu_coffe">Trà thạch vải</li>
              </ul>
              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">ĐỒ ĂN VẶT</li>
                <li class="item-menu_coffe">Bò cá viên chiên</li>
                <li class="item-menu_coffe">Bánh tráng trộn</li>
                <li class="item-menu_coffe">Mì xào bò viên</li>
                <li class="item-menu_coffe">Bánh tráng cuộn</li>
              </ul>
              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">BÁNH NGỌT</li>
                <li class="item-menu_coffe">Bánh Tiramisu</li>
                <li class="item-menu_coffe">Bánh su kem</li>
                <li class="item-menu_coffe">Bánh crepe sầu</li>
                <li class="item-menu_coffe">Bánh kem</li>
              </ul>
              <ul class="items-menu_coffe-img col-lg-2">
                <router-link class="item-link_coffe" to=""
                  ><p class="item-menu-text_coffe">
                    TRÀ SỮA THƠM NGON BÉO NHƯNG KHÔNG NGẤY. UỐNG TRÀ SỮA CÙNG BÉ
                    MÈO SIÊU CUTE!!!
                  </p></router-link 
                >
                <img
                  class="card-img-top item-img_coffe"
                  src="https://nhadepso.com/wp-content/uploads/2023/01/hinh-anh-tra-sua-cute_20.jpg"
                  alt="Card image cap"
                  height="150px"
                />
              </ul>
            </div>
          </div>
        </li>
        <li class="nav-item item-menu-news">
          <router-link class="nav-link" to="/product">TIN TỨC</router-link>
          <div class="item-menu">
            <div class="container menu-container d-flex">
              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">TIN TỨC VÀ SỰ KIỆN</li>
                <li class="item-menu_coffe">
                  Món trà sữa mới mẻ đậm vị màu tím với TRÀ SỮA KHOAI MÔN
                </li>
              </ul>

              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">TIN KHUYẾN MÃI</li>
              </ul>
              <ul class="items-menu_coffe col-lg-2"></ul>
              <ul class="items-menu_coffe col-lg-2"></ul>
              <ul class="items-menu_coffe col-lg-2"></ul>

              <ul class="items-menu_coffe-img col-lg-2">
                <router-link class="item-link_coffe" to=""
                  ><p class="item-menu-text_coffe">TRÀ SỮA THƠM NGON BỔ</p></router-link
                >
                <img
                  class="card-img-top item-img_coffe"
                  src="https://haycafe.vn/wp-content/uploads/2022/03/Background-tra-sua-1.jpg"
                  alt="Card image cap"
                />
              </ul>
            </div>
          </div>
        </li>
        <li class="nav-item item-menu-community">
          <router-link class="nav-link" to="#">TRÁCH NHIỆM CỘNG ĐỒNG</router-link>
          <div class="item-menu">
            <div class="container menu-container d-flex">
              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">GIÁ TRỊ VĂN HÓA VIỆT</li>

                <li class="item-menu_coffe">
                  Người Việt Nam chi 362 triệu đô la/năm cho trà sữa
                </li>
              </ul>

              <ul class="items-menu_coffe col-lg-2">
                <li class="item-menu_coffe-header">CỘNG ĐỒNG</li>
                <li class="item-menu_coffe">
                  Nơi chị em thưởng thức tà tưa và tâm sự mỏng cùng WINDY
                  milktea!!!
                </li>
              </ul>
              <ul class="items-menu_coffe col-lg-2"></ul>
              <ul class="items-menu_coffe col-lg-2"></ul>
              <ul class="items-menu_coffe col-lg-2"></ul>
              <ul class="items-menu_coffe-img col-lg-2">
                <router-link class="item-link_coffe" to=""
                  ><p class="item-menu-text_coffe">THỊ TRƯỜNG TRÀ SỮA</p></router-link
                >
                <img
                  class="card-img-top item-img_coffe"
                  src="https://cdn.dayphache.edu.vn/wp-content/uploads/2019/07/thi-truong-tra-sua-tai-Viet-Nam.jpg"
                  alt="Card image cap"
                />
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <router-link class="nav-link" to="/login">Đăng nhập</router-link>
      </form>
      
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
  computed: {
    ...mapState(useAuthStore, {
      currentUser: "user",
    }),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout", "loadAuthState"]),

    handleLogout() {
      this.logout();
      this.$router.push({ name: "login" });
    },
  },
  created() {
    this.loadAuthState();
  },
};
</script>

<style>
.navbar-header {
  background: #ffffff;
}
.img-header {
  width: 110px;
  height: 80px;
}
.nav-link {
  font-size: 18px;
  font-weight: 700;
  color: rgb(105, 84, 84);
}
.btn-bars {
  background-color: #53382c;
  color: white;
}
.header {
  padding: -20px 0px;
  height: 122px;
  font-size: 24px;
}
.navbar-header {
  height: 100%;
}
.btn-option {
  background-color: #53382c;
}
.btn-search {
  border: 1px solid #53382c;
}
.btn-search:hover {
  background-color: #53382c;
  color: white;
}
.navbar-toggler-icon {
  color: white;
}
.nav-link {
  padding: 6px;
}
.nav-link:hover {
  background-color: #53382c;
  color: white;
}
.menu-container {
  position: relative;
}
.item-menu {
  display: none;
  position: absolute;
  width: 100%;
  background-color: #53382c;
  height: 295px;
  z-index: 10;
  left: 0;
  top: 100%;
  padding: 12px 0px;
}
.item-menu-coffe:hover .item-menu {
  display: flex;
}
.item-menu-news:hover .item-menu {
  display: flex;
}
.item-menu-community:hover .item-menu {
  display: flex;
}
.item-menu-me:hover .item-menu {
  display: flex;
}
.item-menu-coffe::before {
  position: absolute;
  content: "";
  width: 88px;
  height: 52px;
  top: 80px;
  z-index: 12;
  background-color: transparent;
}
.item-menu-news::before {
  position: absolute;
  content: "";
  width: 88px;
  height: 52px;
  top: 80px;
  z-index: 12;
  background-color: transparent;
}
.item-menu-community::before {
  position: absolute;
  content: "";
  width: 260px;
  height: 52px;
  top: 70px;
  z-index: 12;
  background-color: transparent;
}
.item-menu-me::before {
  position: absolute;
  content: "";
  width: 88px;
  height: 52px;
  top: 80px;
  z-index: 12;
  background-color: transparent;
}
.items-menu_coffe {
  text-align: center;
  list-style: none;
  color: white;
  cursor: pointer;
  height: 100%;
}
.item-menu_coffe-header {
  font-size: 18px;
  margin: 12px 0px;
  font-weight: 700;
  color: #f1bc7a;
}
.item-menu_coffe-header:hover {
  color: white;
}
.item-menu_coffe {
  font-size: 16px;
}
.item-menu_coffe:hover {
  padding-left: 5px;
}

.items-menu_coffe-img {
  background-image: url(https://www.highlandscoffee.com.vn/skins/default/images/bgmenu.jpg);
  width: 100%;
  height: 100%;
}

.item-menu-text_coffe {
  font-size: 14px;
  padding-top: 14px;
  border: 0;
  color: #f1bc7a;
  font-weight: 700;
}
.item-menu-text_coffe:hover {
  color: white;
}
.item-link_coffe:hover {
  text-decoration: none;
}
.item-img_coffe {
  padding-bottom: 6px;
}

@media (max-width: 1023px) {
  .navbar-toggler-icon {
    width: 24px;
    height: 24px;
  }
  .btn-option,
  .img-header {
    margin-top: -24px;
    padding-top: 12px;
  }
  .item-menu {
    display: none !important;
  }
}
</style>
