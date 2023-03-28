<template>
  <div class="container-fluid">
    <div class="banner">
      <div class="banner-first">
        <img
          class="banner-first-img"
          src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/background-tra-sua-thiet-ke-banner-800x320.jpg"
          alt=""
        />

        <a href="/product" type="button" class="btn banner-first-btn"
          >Khám phá thêm</a
        >
      </div>

      <div class="banner-first">
        <img
          class="banner-first-img"
          src="https://img.pikbest.com/background/20220119/beverage-pearl-milk-tea-ice-background_6222166.jpg!bwr800"
          alt=""
        />
        <a href="/product" class="btn banner-first-btn btn2"> Khám phá thêm </a>
      </div>
      <div class="banner-first">
        <img
          class="banner-first-img"
          src="https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-simple-and-stylish-fragrant-milk-tea-juice-drink-poster-image_130479.jpg"
          alt=""
        />
        <a href="/product" class="btn banner-first-btn"> Khám phá thêm </a>
      </div>
      <div class="banner-second d-flex">
        <div class="">
          <p class="address">Quán mới</p>
          <ul id="lightSlider2" class="current-height">
            <li>
              <div class="col-lg-12 banner-second-left-item">
                <p class="banner-second-left-text">Sân bay quốc tế Đà Nẵng</p>
                <p class="banner-second-left-description">
                  Khu vực check-in ga Quốc Tế, Sân bay Đà Nẵng, 62 Trần Quốc
                  Toản, quận Hải Châu, Tp. Đà Nẵng
                </p>
              </div>
            </li>
            <li>
              <div class="col-lg-12 banner-second-left-item">
                <h3 class="banner-second-left-text">Hàm cá mập</h3>
                <p class="banner-second-left-description">
                  Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn
                  Kiếm, Hà Nội
                </p>
              </div>
            </li>
            <li>
              <div class="col-lg-12 banner-second-left-item">
                <h3 class="banner-second-left-text">721 Huỳnh Tấn Phát</h3>
                <p class="banner-second-left-description">
                  721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-sm-12 banner-second-right">
          <ul class="banner-second-right-items">
            <li class="banner-second-right-item-header">
              <h3 class="banner-second-right-header">TIN MỚI NHẤT</h3>
              <a class="banner-second-right-link" href="">Xem toàn bộ ></a>
            </li>
            <li class="banner-second-right-item">
              <div class="col-4">
                <img
                  class="banner-second-right-img"
                  src="https://horecavn.com/uploads/images/tra-sua-nuong-tran-chau-duong-den.png"
                  alt=""
                />
              </div>
              <div class="col-8 banner-second-right-body">
                <h4 class="banner-second-right-text">
                  TRÀ SỮA TRÂN CHÂU ĐƯỜNG ĐEN - ngọt ngào cùng windy milktea
                </h4>
                <p class="banner-second-right-calendar">
                  <i class="fas fa-calendar-week"></i> 04/04/2023
                </p>
              </div>
            </li>

            <li class="banner-second-right-item">
              <div class="col-4">
                <img
                  class="banner-second-right-img"
                  src="https://vinacup.vn/wp-content/uploads/2019/10/cong-thuc-pha-che-matcha-da-xay-600x600.jpg"
                  alt=""
                />
              </div>
              <div class="col-8 banner-second-right-body">
                <h4 class="banner-second-right-text">
                  WINDY MIKL TEA - DỊCH VỤ GIAO HÀNG MIỄN PHÍ
                </h4>
                <p class="banner-second-right-calendar">
                  <i class="fas fa-calendar-week"></i> 28/04/2023
                </p>
              </div>
            </li>

            <li class="banner-second-right-item">
              <div class="col-4">
                <img
                  class="banner-second-right-img"
                  src="https://vitas.org.vn/wp-content/uploads/2022/07/gia-tra-sen-3-1.jpg"
                  alt=""
                />
              </div>
              <div class="col-8 banner-second-right-body">
                <h4 class="banner-second-right-text">
                  UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG
                </h4>
                <p class="banner-second-right-calendar">
                  <i class="fas fa-calendar-week"></i> 28/04/2023
                </p>
              </div>
            </li>
            <li>
              <div class="banner-second-right-item mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập địa chỉ Email của bạn"
                />
                <a href="/product" class="btn btn-submit">Gửi</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swalert } from "@/mixins/swal.mixin";
import ContactService from "@/services/contact.service";

export default {
  data() {
    return {
      contacts: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    contactStrings() {
      return this.contacts.map((contact) => {
        const { name, email, address, phone } = contact;
        return [name, email, address, phone].join("");
      });
    },
    filteredContacts() {
      if (!this.searchText) return this.contacts;
      return this.contacts.filter((_contact, index) =>
        this.contactStrings[index].includes(this.searchText)
      );
    },
    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.filteredContacts[this.activeIndex];
    },
    filteredContactsCount() {
      return this.filteredContacts.length;
    },
  },
  methods: {
    async retrieveContacts() {
      try {
        this.contacts = await ContactService.getAll();
        this.contacts.sort((current, next) =>
          current.name.localeCompare(next.name)
        );
      } catch (error) {
        console.log(error);
      }
    },

    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },

    async removeAllContacts() {
      swalert
        .fire({
          title: "Xóa tất cả Liên hệ",
          icon: "warning",
          text: "Bạn muốn xóa tất cả Liên hệ?",
          showCloseButton: true,
          showCancelButton: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await ContactService.deleteAll();
              this.refreshList();
            } catch (error) {
              console.log(error);
            }
          }
        });
    },

    goToAddContact() {
      this.$router.push({ name: "contact.add" });
    },
  },
  created() {
    this.refreshList();
  },
};
</script>

<style scoped>
#lightSlider2 {
  list-style: none;
}
.banner-product-tea,
.banner-product-freeze,
.banner-product-cafe {
  background-image: url(https://khoinguonsangtao.vn/wp-content/uploads/2022/11/background-tra-sua.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
.banner-product-freeze {
  background-image: url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-FREEZE.jpg);
}
.banner-product-tea {
  background-image: url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-TEA-bg.jpg);
}
.banner-product-tea-body,
.banner-product-freeze-body,
.banner-product-cafe-body {
  width: 100%;
  height: 100%;
  color: #f9ead6;
  padding-top: 36px;
  animation: product-load-text linear 1s;
}

.banner-product-freeze-body {
  color: #006400;
}

.banner-product-header {
  font-size: 36px;
  font-weight: 700;
}
.banner-product-text {
  padding-top: 16px;
  font-size: 20px;
  font-weight: 600;
}
.btn-product-tea,
.btn-product-freeze,
.btn-product-cafe {
  bottom: 14%;
  width: 250px;
  height: 40px;
  font-size: 18px;
  border: 1px solid white;
  color: rgb(147, 119, 119);
  line-height: 17px;
  animation: btn-linear linear 0.8s;
}
.btn-product-freeze {
  border: 1px solid #006400;
  color: #006400;
}
.btn-product-tea:hover,
.btn-product-freeze:hover,
.btn-product-cafe:hover {
  background-color: #b22830;
  color: white;
}
.product-tea,
.product-freeze,
.product-cafe {
  flex-wrap: wrap;
}
.banner-product-cafe-img {
  display: flex;
  justify-content: flex-end;
}
@keyframes product-load-text {
  0% {
    opacity: 0;
    padding-top: 70px;
  }
  100% {
    opacity: 1;
    padding-top: 36px;
  }
}
@media (max-width: 767px) {
  .product-tea,
  .product-cafe {
    flex-direction: column-reverse;
    padding: 40px 0px 40px 0px;
  }
  .product-freeze {
    padding: 40px 0px 40px 0px;
  }
  .banner-product-img_body {
    width: 100%;
  }
  .banner-product-cafe-img {
    display: flex;
    justify-content: center;
  }
  .banner-product-text {
    padding-top: 16px;
    font-weight: 600;
  }
}
.banner-second-left-description {
  font-size: 14px;
}
</style>
