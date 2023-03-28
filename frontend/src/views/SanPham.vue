<template>
  <div class="container-fluid">
    <div class="banner-product-cafe">
      <div class="container d-flex product-cafe">
        <div class="col-lg-6 col-sm-12 banner-product-cafe-body">
          <h1 class="banner-product-header">CÀ PHÊ</h1>
          <p class="banner-product-text">
            Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng
            được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí
            quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu
            những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
          </p>
          <a href="/product/detail">
            <button type="button" class="btn btn-product-cafe">
              Khám phá thêm
            </button>
          </a>
        </div>
        <div class="col-lg-6 col-sm-12 banner-product-cafe-img">
          <img
            class="banner-product-img_body"
            src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="banner-product-freeze">
      <div class="container d-flex product-freeze">
        <div class="col-lg-6 col-sm-12 banner-product-img">
          <img
            class="banner-product-img_body"
            src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png"
            alt=""
          />
        </div>
        <div class="col-lg-6 col-sm-12 banner-product-freeze-body">
          <h1 class="banner-product-header">FREEZE</h1>
          <p class="banner-product-freeze-text">
            Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống
            đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt
            Nam.
          </p>
          <a href="/product/detail">
            <button type="button" class="btn btn-product-freeze">
              Khám phá thêm
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="banner-product-tea">
      <div class="container d-flex product-tea">
        <div class="col-lg-6 col-sm-12 banner-product-tea-body">
          <h1 class="banner-product-header">CÀ PHÊ</h1>
          <p class="banner-product-text">
            Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng
            được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí
            quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu
            những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
          </p>
          <a href="/product/detail">
            <button type="button" class="btn btn-product-tea">
              Khám phá thêm
            </button>
          </a>
        </div>
        <div class="col-lg-6 col-sm-12 banner-product-cafe-img">
          <img
            class="banner-product-img_body"
            src="	https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
1
<script>
import { swtoast, swalert } from "@/mixins/swal.mixin";
import ContactService from "@/services/contact.service";

export default {
 
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async getContact(id) {
      try {
        this.contact = await ContactService.get(id);
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "notfound",
          params: { pathMatch: this.$route.path.split("/").slice(1) },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },

    async updateContact(data) {
      try {
        await ContactService.update(this.contact._id, data);
        swtoast.success({
          text: "Liên hệ được cập nhật thành công.",
        });
      } catch (error) {
        console.log(error);
        swtoast.error({
          text: "Đã có lỗi xảy ra.",
        });
      }
    },

    async deleteContact() {
      swalert
        .fire({
          title: "Xóa Liên hệ",
          icon: "warning",
          text: "Bạn muốn xóa Liên hệ này?",
          showCloseButton: true,
          showCancelButton: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await ContactService.delete(this.contact._id);
              swtoast.success({
                text: "Liên hệ được xóa thành công.",
              });
              this.$router.push({ name: "contactbook" });
            } catch (error) {
              console.log(error);
              swtoast.error({
                text: "Đã có lỗi xảy ra.",
              });
            }
          }
        });
    },
  },
  created() {
    this.getContact(this.id);
  },
};
</script>
<style>
.banner-product-tea,
.banner-product-freeze,
.banner-product-cafe {
  background-image: url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-PSD-bg.jpg);
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
  color: white;
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
</style>
