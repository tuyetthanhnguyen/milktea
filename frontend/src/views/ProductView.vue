<template>
  <div class="admin container body-view">
    <form
      method="POST"
      action="/admin/handle-form"
      class="col-12 container-form"
    >
      <h2 class="admin-header_text">Danh sách thức uống có trong Menu</h2>
      <div class="d-flex changs-page">
        <a href="/add" class="btn btn-success mr-4 my-4">Thêm thức uống</a>
        <a href="/delete" class="btn btn-success my-4">Các món đã xóa</a>
      </div>

      <table class="table table-hover table-dark col-sm-12">
        <thead>
          <tr>
            <th scope="col">Trà sữa</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá</th>
            <th scope="col" class="text-center">Tùy chọn</th>
          </tr>
        </thead>

        <tbody v-for="milktea in milkteas" :key="milktea.id">
          <tr>
            <th scope="row">
              {{ milktea._id }}
            </th>
            <td>{{ milktea.name }}</td>
            <td>{{ milktea.price }}</td>
            <td>
              <a
                :href="'/admin/' + milktea._id + '/edit'"
                class="btn btn-link btn-restore"
                >Chỉnh sửa</a
              >
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="this.id = milktea._id"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Trà</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá</th>
            <th scope="col" class="text-center">Tùy chọn</th>
          </tr>
        </thead>
        <tbody v-for="tea in teas" :key="tea.id">
          <tr>
            <th scope="row">
              {{ tea._id }}
            </th>
            <td>{{ tea.name }}</td>
            <td>{{ tea.price }}</td>

            <td>
              <a
                :href="'/admin/' + tea._id + '/edit'"
                class="btn btn-link btn-restore"
                >Chỉnh sửa</a
              >
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="this.id = tea._id"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Món ăn vặt</th>
            <th scope="col">Tên thức uống</th>
            <th scope="col">Giá</th>
            <th scope="col" class="text-center">Tùy chọn</th>
          </tr>
        </thead>
        <tbody v-for="fastfood in fastfoods" :key="fastfood.id">
          <tr>
            <th scope="row">
              {{ fastfood._id }}
            </th>
            <td>{{ fastfood.name }}</td>
            <td>{{ fastfood.price }}</td>
            <td>
              <a
                :href="'/admin/' + fastfood._id + '/edit'"
                class="btn btn-link btn-restore"
                >Chỉnh sửa</a
              >
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="this.id = fastfood._id"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>

    <div
      class="modal fade show"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Bạn có chắc là xóa sản phẩm không?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Không đồng ý
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="deleteItem()"
            >
              Đồng ý
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import ContactService from "@/services/contact.service";
import axios from "axios";

export default {
  data() {
    return {
      milkteas: [],
      teas: [],
      fastfoods: [],
      modalShow: false,
      id: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/admin/").then((response) => {
      this.milkteas = response.data.milktea;
      (this.teas = response.data.tea)(
        (this.fastfoods = response.data.fastfood)
      );

      console.log("response", this.milkteas, response.milktea, response.data);
    });
  },
  methods: {
    deleteItem() {
      console.log("alo alo", this.id);
      let url = "http://localhost:3000/admin/" + this.id + "/destroy";
      axios.delete(url, {
        id: this.id,
      });

      swtoast.success({
        text: "Liên hệ được cập nhật thành công.",
      });
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
<style>
.body-view {
  min-height: calc(100vh - 189px);
}
</style>
