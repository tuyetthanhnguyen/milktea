<template>
  <div class="container-fluid footer-body">
    <div class="container d-flex footer-body">
      <button type="button" class="btn btn-map">
        <i class="fas fa-map-marker-alt"></i> VIEW MAP
      </button>
      <div class="footer-icons">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-youtube footer-icon"></i>
        <i class="fab fa-instagram"></i>
      </div>
      <div class="footer-links d-flex">
        <a href="" class="footer-link"
          >© 2018 Highlands Coffee. All rights reserved</a
        >
        <a href="" class="footer-link footer-link-mid"
          ><i class="fas fa-link"></i> Đăng ký để nhận bản tin</a
        >
        <a href="" class="footer-link"
          ><i class="fas fa-envelope"></i>
          customerservice@highlandscoffee.com.vn</a
        >
      </div>
    </div>
  </div>
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
      console.log("Click");
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
.footer-body {
  background-color: #53382c;
  height: 70px;
  display: flex;
  width: 100%;
  font-size: 18px;
  line-height: 70px;
  color: black;
  margin: 0px auto;
}
.footer-link {
  color: black;
  padding: 0px 12px 12px 12px;
  text-align: center;
}
.footer-link:hover {
  text-decoration: none;
  color: #f1bc7a;
}
.btn-map {
  display: none;
}
@media (max-width: 1023px) {
  .footer-body {
    width: 100%;
    height: 238px;
    display: flex;
    flex-wrap: wrap;
    color: black;
  }
  .btn-map {
    display: block;
    width: 100%;
    height: 50px;
    background: #b22830;
    margin-top: 12px;
    color: white;
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: -20px;
  }
  .footer-icon {
    padding: 0px 6px;
    font-size: 24px;
  }
  .footer-links {
    flex-wrap: wrap;
    font-size: 16px;
    margin-top: -18px;
    padding-left: 18px;
  }
  .footer-link {
    margin: -18px;
    text-align: center;
  }
  .footer-link-mid {
    padding-left: 80px;
  }
}
</style>
