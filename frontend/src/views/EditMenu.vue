<template>
  <div class="mt-4 mb-4 body-view">
    <div class="container">
      <div>
        <h2>Chỉnh sửa thức uống</h2>
        <a href="/admin" type="button" class="btn btn-primary btnSubmit"
          >Quay lại</a
        >
        <div class="form-check mb-4 d-flex align-items-center"></div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Tên thức uống</label
          >
          <input
            type="text"
            class="form-control"
            v-model="this.name"
            id="name"
            name="name"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Giá </label>
          <input
            type="number"
            class="form-control"
            id="price"
            name="price"
            v-model="this.price"
          />
        </div>
        <div class="mb-3">
          <label for="img" class="form-label">Ảnh sản phẩm</label>
          <input
            type="text"
            class="form-control"
            v-model="this.image"
            id="img"
            name="img"
          />
        </div>
        <button @click="updateProduct" class="btn btn-primary">
          Update thức uống
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      itemEdit: {},
      name: "",
      price: "",
      image: "",
    };
  },
  methods: {
    async updateProduct() {
      console.log("updateProduct", this.name, this.price, this.image);
      let url = `http://localhost:3000/admin/${this.itemEdit._id}`;
      console.log("url", url);
      await axios
        .put(url, {
          name: this.name,
          price: this.price,
          videoID: this.image,
        })
        .then(res=>{
            if(res.data.success){
                this.$router.push({path: '/admin'});
            }
        });
    },
  },
  mounted() {
    console.log("window.location.pathname", window.location.pathname);
    let url = `http://localhost:3000${window.location.pathname}`;
    console.log("url", url);
    axios.get(url).then((response) => {
      console.log("item", response.data.value);
      this.itemEdit = response.data.value && response.data.value;
      this.name = this.itemEdit.name;
      this.price = this.itemEdit.price;
      this.image = this.itemEdit.img;
      console.log("items", this);
    });
  },
};
</script>

<style scoped>
@import "@/assets/form.css";
.body-view {
  min-height: calc(100vh - 219px);
}
.background__log {
  padding: 48px 48px 36px 48px;
  top: -165px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 20px;
}
.form-message {
  color: red;
}
.log__in {
  font-size: 36px;
}

.log__in-text {
  font-size: 24px;
  color: #222;
  padding: 48px 0px;
}

.log__in-input {
  width: 100%;
  padding: 24px 36px;
  margin-bottom: 12px;
  border-radius: 32px;
  outline: none;
  border: 1px solid #ccc;
  position: relative;
}

.login__icon-mail {
  position: absolute;
  font-size: 24px;
  top: 260px;
  left: 312px;
}

.login__icon-lock {
  position: absolute;
  font-size: 24px;
  top: 382px;
  left: 312px;
}

.btn--log__in {
  width: 100%;
  height: 70px;
  line-height: 35px;
  font-size: 28px;
  box-shadow: 0 4px 12px 0 rgb(246 116 57 / 40%);
  background: #b22830;
  border-radius: 32px;
  background-size: 200% auto;
  color: white;
  line-height: 50px;
}

.password__forget {
  font-size: 24px;
  font-weight: 400;
  padding-top: 36px;
  text-align: center;
}

.password__forget-link {
  text-decoration: none;
  color: #f65e39;
}

.password__forget-link:hover {
  color: black;
}

.btn--log__in:hover {
  opacity: 1;
}

.or {
  padding: 24px 0px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

.btn--log__in--local {
  background: white;
  color: #777;
  font-size: 24px;
  font-weight: 400;
  box-shadow: none;
  border: 1px solid #ccc;
}

.btn--log__in--local:hover {
  color: #f65e39;
}

.gird__body--login {
  margin-top: 400px;
  text-align: center;
}

.log__in-text--reg {
  padding-bottom: 24px;
  color: #222;
}

.login__icon-mail--reg {
  top: 206px;
}
</style>
