<template>
  <div class="mt-4 mb-4 body-view">
    <div class="container">
      <div>
        <h2>Thêm thức uống</h2>
        <div class="form-check mb-4 d-flex align-items-center">
          <label class="form-check-label" for="exampleCheck1">Chọn loại</label>
          <div class="input-group col-6">
            <select
              @change="onChange($event)"
              class="custom-select select-action"
              name="action"
              v-model="key"
            >
              <option>Chọn mục</option>
              <option value="milktea">Trà sữa</option>
              <option value="tea">Trà</option>
              <option value="fastfood">Món ăn vặt</option>
            </select>
          </div>
          <a href="/admin" type="button" class="btn btn-primary btnSubmit"
            >Quay lại</a
          >
        </div>

        <div class="form-check mb-4 d-flex align-items-center"></div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Tên thức uống</label
          >
          <input
            type="text"
            class="form-control"
            v-model="this.name"
            @change="(e) => (this.name = e.target.value)"
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
            type="file"
            class="form-control"
            @input="uploadProfile"
            name="img"
          />
        </div>
        <button @click="createProduct" class="btn btn-primary">
          Thêm thức uống
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import axios from "axios";

export default {
  data() {
    return {
      itemEdit: {},
      name: "",
      price: "",
      image: "",
      type: "",
    };
  },
  methods: {
    uploadProfile(element) {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      let rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        console.log(rawImg);
        this.image = rawImg;
      };
      reader.readAsDataURL(file);
      console.log(file);
    },
    async createProduct() {
      console.log("this.image", this.type);
      this.type && this.name && this.price && this.image
        ? axios
            .post("http://localhost:3000/admin/create", {
              action: this.type,
              name: this.name,
              price: this.price,
              img: this.image,
            })
            .then(() => {
              swtoast.success({
                text: "Thêm sản phẩm thành công sản phẩm thành công",
              });
            })
        : swtoast.error({
            text: "Vui lòng nhập đủ thông tin sản phẩm!!",
          });
    },
    onChange(event) {
      this.type = event.target.value;
    },
  },
};
</script>

<style scoped>
.body-view {
  min-height: calc(100vh - 219px);
}
</style>
