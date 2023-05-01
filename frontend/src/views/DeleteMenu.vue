<template>
  <div class="admin container body-view">
    <form
      method="POST"
      action="/admin/handle-form"
      class="col-12 container-form"
    >
      <h2 class="admin-header_text">Danh sách thức uống có trong Menu</h2>
      <div class="d-flex changs-page">
        <a href="/admin" class="btn btn-success mr-4 my-4">Quay lại</a>
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

        <tbody v-for="trasua in trasuas" :key="trasua.id">
          <tr>
            <th scope="row">
              {{ trasua._id }}
            </th>
            <td>{{ trasua.name }}</td>
            <td>{{ trasua.price }}</td>
            <td>
              <p @click="restore(trasua._id)" class="btn btn-link btn-restore">
                Khôi phục
              </p>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="this.id = trasua._id"
              >
                Xóa vĩnh viễn
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
        <tbody v-for="tra in tras" :key="tra.id">
          <tr>
            <th scope="row">
              {{ tra._id }}
            </th>
            <td>{{ tra.name }}</td>
            <td>{{ tra.price }}</td>
            <td>
              <p @click="restore(tra._id)" class="btn btn-link btn-restore">
                Khôi phục
              </p>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="this.id = tra._id"
              >
                Xóa vĩnh viễn
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
        <tbody v-for="monanvat in monanvats" :key="monanvat.id">
          <tr>
            <th scope="row">
              {{ monanvat._id }}
            </th>
            <td>{{ monanvat.name }}</td>
            <td>{{ monanvat.price }}</td>
            <td>
              <p
                @click="restore(monanvat._id)"
                class="btn btn-link btn-restore"
              >
                Khôi phục
              </p>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="this.id = monanvat._id"
              >
                Xóa vĩnh viễn
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>

    <!-- Button trigger modal -->

    <!-- Modal -->
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
      trasuas: [],
      tras: [],
      monanvats: [],
      modalShow: false,
      id: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/trashMenu").then((response) => {
      console.log("response", response);
      this.trasuas = response.data.trasua && response.data.trasua;
      this.tras = response.data.tra && response.data.tra;
      this.monanvats = response.data.monanvat && response.data.monanvat;

      console.log("response", this.trasuas, response.trasua, response.data);
    });
  },
  methods: {
    deleteItem() {
      console.log("alo alo", this.id);
      let url = "http://localhost:3000/admin/" + this.id + "/destroyPower";
      axios
        .delete(url, {
          id: this.id,
        })
        .then(() => {
          swtoast.success({
            text: "Xóa sản phẩm thành công",
          });
        });
      this.$router.go(this.$router.currentRoute);
    },
    restore(id) {
      let url = "http://localhost:3000/admin/" + id + "/restore";
      console.log("url", url);
      axios.patch(url, {
        id,
      });
      swtoast.success({
        text: "Khôi phục sản phẩm thành công",
      });
      this.$router.push({ path: "/admin" });
    },
  },
};
</script>
<style>
.body-view {
  min-height: calc(100vh - 189px);
}
</style>
