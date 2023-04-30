<template>
  <div class="container-all">
    <div class="container page-cafe">
      <div class="col-lg-8 col-sm-12">
        <h1 class="page-cafe-header">TRÀ SỮA</h1>
        <p class="page-cafe-all">
          Trà sữa là loại thức uống đa dạng được tìm thấy ở nhiều nền văn hóa,
          bao gồm một vài cách kết hợp giữa trà và sữa. Dùng để chỉ bất kỳ loại
          đồ uống từ trà đen có pha thêm sữa. Nó có thể chỉ đơn giản là cho một
          ít sữa vào trong một tách trà nóng. Hoặc có thể là một công thức phức
          tạp bao gồm nhiều thành phần khác nhau, nhưng hai nguyên liệu chính
          không thể thiếu nhất đó vẫn là nước trà và sữa. Tạo nên hương vị vô
          cùng thơm ngon và dễ uống. Loại thức uống đặc biệt này được thưởng
          thức ở khắp mọi nơi trên thế giới với hai kiểu thức uống chính là nóng
          và lạnh.
        </p>
        <div class="col-sm-12 cafe-item-all">
          <ul class="product-cafe">
            <li v-for="cafe in cafes" :key="cafe.id">
              <div class="cafe-item" method="POST" action="">
                <img
                  class="cafe-item-img-top"
                  v-bind:src="cafe.img"
                  alt="Card image cap"
                />
                <div class="cafe-item-body">
                  <h5 class="cafe-item-title">{{ cafe.name }}</h5>
                  <p class="cafe-item-text">
                    Giá :
                    <span class="cafe-item-price">{{ cafe.price }} VNĐ</span>
                  </p>
                  <p
                    data-toggle="modal"
                    class="btn btn-primary btn-add-item"
                    @click="addItem(cafe)"
                  >
                    ĐẶT MUA NGAY
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="container cart col-lg-4">
        <div class="col-lg-12 cart-left mt-4">
          <p class="cart-left-header">Danh sách các món</p>

          <div class="cart-left-body">
            <ul class="cart-body-items">
              <li
                class="cart-body-item"
                v-for="(car, index) in cars"
                :index="index"
                :key="car._id"
              >
                <img
                  v-bind:src="car.img"
                  alt=""
                  class="cart-body-item-img col-lg-3"
                />
                <div class="col-lg-6 cart-body-item-main">
                  <p class="body-item-main_name">{{ car.name }}</p>
                  <p class="body-item-main_price">GIÁ: {{ car.price }} VND</p>
                </div>
                <div class="col-lg-3 cart-body-item-handle">
                  <div class="cart-body-item-handle_body">
                    <abutton class="body-item-handle_icon" @click="remove(car)"
                      ><i class="fas fa-minus"></i
                    ></abutton>
                    <p class="value-number">{{ car.total }}</p>
                    <button class="body-item-handle_icon" @click="add(car)">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <p
                    class="cart-body-item-handle_text"
                    @click="deleteItem(index)"
                  >
                    Xóa
                  </p>
                </div>
              </li>
            </ul>
            <div class="submit-buy">
              <p class="sum-cart">TỔNG: {{ this.sum }}</p>
              <div class="">
                <button
                  data-toggle="modal"
                  class="btn btn-primary btn-add-item"
                  @click="buyNow"
                >
                  ĐẶT MUA NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container page-phindi">
      <div class="col-lg-8 col-sm-12">
        <h1 class="page-cafe-header">TRÀ</h1>
        <p class="page-cafe-all">
          Trà có chứa nhiều chất dinh dưỡng như chất chống oxy hóa và catechin,
          giúp ngăn ngừa ung thư. Theo một nghiên cứu, những người uống trà
          thường có ít nguy cơ mắc ung thư hơn, đặc biệt là ung thư tuyến tiền
          liệt và ung thư vú. Bên cạnh đó, các nhà nghiên cứu cho rằng trà cũng
          giúp làm giảm nguy cơ mắc bệnh tiểu đường tuýp 2 và bệnh tim. Nước trà
          còn giúp bạn giảm cân hiệu quả. Một trong những lợi ích của trà là
          giúp tăng cường quá trình trao đổi chất và đốt cháy chất béo. Theo một
          nghiên cứu, uống trà mỗi ngày sẽ giúp bạn giảm 75–100 calo mỗi ngày.
          Trà xanh chứa ít caffeine hơn cà phê nhưng đủ để bạn tỉnh táo và cải
          thiện chức năng não.
        </p>
        <div class="col-sm-12 cafe-item-all">
          <ul class="product-cafe">
            <!-- {{#each phindi}} -->
            <li v-for="phindi in phindis" :key="phindi.id">
              <div class="cafe-item" method="POST" action="">
                <img
                  class="cafe-item-img-top"
                  v-bind:src="phindi.img"
                  alt="Card image cap"
                />
                <div class="cafe-item-body">
                  <h5 class="cafe-item-title">{{ phindi.name }}</h5>
                  <p class="cafe-item-text">
                    Giá :
                    <span class="cafe-item-price">{{ phindi.price }} VNĐ</span>
                  </p>
                  <button
                    data-toggle="modal"
                    class="btn btn-primary btn-add-item"
                    data-id="{{phindi._id}}"
                    data-target="#add-item-price"
                    data-img="{{phindi.img}}"
                    data-price="{{phindi.price}}"
                    data-name="{{phindi.name}}"
                  >
                    ĐẶT MUA NGAY
                  </button>
                </div>
              </div>
            </li>
            <!-- {{/each}} -->
          </ul>
        </div>
      </div>
    </div>
    <div class="container page-espresso">
      <div class="col-lg-8 col-sm-12">
        <h1 class="page-cafe-header">MÓN ĂN VẶT</h1>
        <p class="page-cafe-all">
          Ăn vặt là trường hợp ăn thức ăn hoặc dùng đồ uống giữa các bữa ăn
          chính thông thường hàng ngày. Ăn vặt thường chỉ đơn giản là ăn một
          loại thức ăn hoặc uống một loại đồ uống nào đó dùng để ăn ở giữa các
          bữa ăn chính hàng ngày, là những thức ăn hay đồ uống tốt và không tốt
          cho sức khỏe. Tình trạng đói bụng là một động lực chính ở đằng sau để
          thúc đẩy việc ăn vặt; tuy vậy các yếu tố như địa điểm sinh hoạt, môi
          trường xã hội, thời điểm trong ngày và các loại thực phẩm ưa thích có
          ở chung quanh cũng đóng góp vào hiện tượng ăn vặt.
        </p>
        <div class="col-sm-12 cafe-item-all">
          <ul class="product-cafe">
            <!-- {{#each espresso}} -->
            <li v-for="espresso in espressos" :key="espresso.id">
              <div class="cafe-item" method="POST" action="">
                <img
                  class="cafe-item-img-top"
                  value="{{espresso.img}}"
                  v-bind:src="espresso.img"
                  alt="Card image cap"
                />
                <div class="cafe-item-body">
                  <h5 class="cafe-item-title" value="{{espresso.name}}">
                    {{ espresso.name }}
                  </h5>
                  <p class="cafe-item-text" value="{{espresso.price}}">
                    Giá :
                    <span class="cafe-item-price"
                      >{{ espresso.price }} VNĐ</span
                    >
                  </p>
                  <button
                    data-toggle="modal"
                    class="btn btn-primary btn-add-item"
                    data-id="{{espresso._id}}"
                    data-target="#add-item-price"
                    data-img="{{espresso.img}}"
                    data-price="{{espresso.price}}"
                    data-name="{{espresso.name}}"
                  >
                    ĐẶT MUA NGAY
                  </button>
                </div>
              </div>
            </li>
            <!-- {{/each}} -->
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import axios from "axios";
import { swtoast } from "@/mixins/swal.mixin";

export default {
  components: {
    SsrCarousel,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      cafes: [],
      phindis: [],
      espressos: [],
      modalShow: false,
      id: "",
      cars: [],
      sum: 0,
    };
  },
  methods: {
    addItem(item) {
      let temp = true;
      for (let i = 0; i < this.cars.length; i++) {
        console.log("his.cars[i].id === item.id", this.cars[i]._id, item._id);
        if (this.cars[i]._id === item._id) {
          this.cars[i] = {
            _id: item._id,
            name: item.name,
            img: item.img,
            price: item.price,
            total: +this.cars[i].total + 1,
          };
          this.sum += +item.price;
          temp = false;
          break;
        }
      }
      if (temp) {
        this.cars.push({
          _id: item._id,
          name: item.name,
          img: item.img,
          price: item.price,
          total: 1,
        });
        this.sum += +item.price;
      }
      console.log("this.cars", this.cars);
    },
    add(item) {
      for (let i = 0; i < this.cars.length; i++) {
        console.log("his.cars[i].id === item.id", this.cars[i]._id, item._id);
        if (this.cars[i]._id === item._id) {
          this.cars[i] = {
            _id: item._id,
            name: item.name,
            img: item.img,
            price: item.price,
            total: +this.cars[i].total + 1,
          };
          this.sum += +item.price;
          break;
        }
      }
    },
    remove(item) {
      let index = -1;
      for (let i = 0; i < this.cars.length; i++) {
        if (this.cars[i]._id === item._id && this.cars[i].total > 0) {
          if (+this.cars[i].total === 1) {
            index = i;
          }
          this.cars[i] = {
            _id: item._id,
            name: item.name,
            img: item.img,
            price: item.price,
            total: +this.cars[i].total - 1,
          };
          this.sum -= +item.price;
          break;
        }
      }
      if (index !== -1) {
        this.cars.splice(index, 1);
      }
    },
    deleteItem(index) {
      console.log("this.cars[index]", index, this.cars[1]);
      this.sum -= this.cars[index].price * this.cars[index].total;
      this.cars.splice(index, 1);
    },
    buyNow() {
      this.cars = [];
      this.sum = 0;
      swtoast.success({
        text: "Bạn đã đặt mua sản phẩm thành công !!!",
      });
    },
  },
  mounted() {
    axios.get("http://localhost:3000/admin/").then((response) => {
      console.log("response", response);
      this.cafes = response.data.cafe && response.data.cafe;
      this.phindis = response.data.phindi && response.data.phindi;
      this.espressos = response.data.espresso && response.data.espresso;

      console.log("response", this.cafes, response.cafe, response.data);
    });
  },
};
</script>
<style>
.modal-open {
  overflow: auto;
  padding-right: 0 !important;
}
body:not(.modal-open) {
  padding-right: 0px !important;
}
.container-all {
  background: #fbedd7;
  padding: 0 !important;
}
.page-cafe,
.page-phindi,
.page-freeze,
.page-espresso {
  padding-top: 24px;
  color: #53382c;
  display: flex;
  flex-wrap: wrap;
}
.product-cafe {
  padding: 0;
  height: 100%;
  display: flex;
}
.product-cafe li {
  width: 33%;
  margin-top: 12px;
  list-style: none;
}
.page-cafe-header {
  font-size: 45px;
  font-weight: 700;
}
.page-cafe-body {
  font-size: 16px;
  text-align: justify;
}
.cafe-item {
  width: 236px;
  padding-bottom: 24px;
}
.cafe-item-img-top {
  height: 187px;
  width: 187px;
  margin-left: 24px;
  border: 1px solid #8a746a;
}
.cafe-item-body {
  padding-top: 12px;
  text-align: center;
}
.cafe-item-title {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
}
.cafe-item-text {
  font-size: 14px;
}
.cafe-item-price {
  font-weight: 700;
}

.btn-next {
  border: 0;
  padding: 0px 12px;
  margin-left: 16px;
  background: #b22830;
}
.cafe-item-all {
  border-bottom: 1px solid #8a746a;
}
.btn-add-item {
  width: 146px;
  height: 45px;
  font-size: 14px;
  background: #fbedd7;
  color: #53382c;
  border: 1px solid #53382c;
}
.btn-add-item:hover {
  background: #882106;
}

.page-cafe-all {
  font-size: 18px;
}

.cart {
  width: 100%;
}
.cart-left {
  border: 3px solid #53382c;
  background: white;
  padding: 0px;
}
.cart-left-header {
  font-size: 24px;
  font-weight: 700;
  color: #53382c;
  text-align: center;
  padding: 6px 0px;
  border-bottom: 1px solid #53382c;
  margin-bottom: 0;
}

.cart-body-items {
  list-style: none;
  padding: 0;
  max-height: 500px;
  overflow-y: auto;
  margin: 0;
}
.cart-body-items::-webkit-scrollbar {
  display: none;
}
.cart-body-item {
  width: 100%;
  display: flex;
  background-color: #ccc;
  margin-bottom: 12px;
  height: 100px;
}
.cart-body-item-img {
  padding: 0;
}
.cart-body-item-main {
  margin: auto;
}
.body-item-main_name {
  font-size: 18px;
  font-weight: 700;
  color: #53382c;
  padding-top: 12px;
  margin-bottom: 12px;
}
.body-item-main_price {
  font-size: 14px;
  padding-left: 12px;
}
.cart-body-item-handle {
  margin: auto;
  padding: 12px 0px 0px 0px;
}
.cart-body-item-handle_body {
  display: flex;
  height: 30px;
}
.body-item-handle_icon {
  padding: 6px;
  background-color: white;
  font-size: 12px;
  border-radius: 24px;
  color: #53382c;
}
.value-number {
  font-size: 16px;
  padding: 0 6px;
}
.cart-body-item-handle_text {
  text-align: center;
  padding: 12px 12px 0px 0px;
  cursor: pointer;
}
.sum-cart {
  font-size: 18px;
  font-weight: 700;
  color: #53382c;
  margin: 0;
  padding: 6px 12px;
}
.modal {
  padding-right: 0px !important;
}
.submit-buy {
  border-top: 3px solid #53382c;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}

@media (max-width: 767px) {
  .page-cafe {
    flex-direction: column-reverse;
  }
  .cart-body-item-img {
    width: 100px;
  }
  .cart-body-item-main {
    padding: 0;
  }
  .cart-body-item-handle_body {
    padding-left: 20px;
  }
  .page-cafe-all {
    font-size: 16px;
  }
  .cafe-item-all {
    padding: 0;
  }
  #product-phindi {
    height: 300px;
  }
  .page-cafe {
    padding: 24px 0px 40px 0px;
  }

  .cafe-item {
    height: 247px;
    width: 165px;
    padding: 0;
  }
  .cafe-item-img-top {
    height: 132px;
    width: 132px;
    margin-left: 24px;
    border: 1px solid #8a746a;
  }
  .btn-add-item {
    height: 36px;
    font-size: 10px;
    font-weight: 600;
    width: 140px;
    margin: 12px !important;
  }
  .cafe-item-text {
    margin: 0;
  }
}
</style>
