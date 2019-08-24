<template>
  <section>
    <!-- Top Border -->
    <div class="w-100 bg-uday-orange p-2 text-center text-white font-weight-bold">
      PROTOTYPE: Last updated Aug 24th, 2019.
    </div>

    <!-- Header -->
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-6">
          <nuxt-link to="/">
            <img src="/uday-logo-lrg.png" class="w-25" alt="Uday Logo">
          </nuxt-link>
        </div>
        <div class="col-md-6 text-right">
          <div v-if="!loggedIn" class="pt-2 mt-4">
            <ul id="footer-links" class="p-0 mb-0">
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/product">Product</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/team">Team</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
              <li>
                |
              </li>
              <li>
                <nuxt-link to="/login">Login</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/signup">Sign Up</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-else class="pt-2 mt-4">
            <ul id="footer-links" class="p-0 mb-0">
              <li>
                <nuxt-link to="/dashboard/account">Account</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/dashboard/">Dashboard</nuxt-link>
              </li>
              <li>
                |
              </li>
              <li>
                <nuxt-link @click.native="handleLogout()" to="/#">Logout</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Nuxt Body -->
    
    <nuxt class="mt-4" />
    
    <!--  End -->
    
    <!-- Footer -->
    <div class="text-white pb-2" style="background-color: #441E0D;">
      <div class="container py-5 text-center">
        <ul id="footer-links" class="p-0 mb-2">
          <li>
            <nuxt-link to="/about" class="text-white">About</nuxt-link>
          </li>
          <li>
            <!-- •  -->
          </li>
          <li>
            <nuxt-link to="/product" class="text-white">Product</nuxt-link>
          </li>
          <li>
            <!-- •  -->
          </li>
          <li>
            <nuxt-link to="/team" class="text-white">Team</nuxt-link>
          </li>
          <li>
            <!-- •  -->
          </li>
          <li>
            <nuxt-link to="/contact" class="text-white">Contact</nuxt-link>
          </li>
        </ul>
        <!-- <hr class="w-25 mx-auto" style="border: 1px solid #999;"> -->
        Uday App: Electronic Patient Records <br>
        © 2019
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    handleLogin() {
      this.$store.commit('login')
      this.$router.push({
        path: '/'
      })
    },
    handleLogout() {
      this.$store.commit('logout')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: #F6960F;
}

a:hover {
  color: #d4810d;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.btn-bg-light {
  background-color: #f9f9f9;
}

.btn-bg-light:hover {
  background-color: #f5f5f5;
}

.bg-uday-orange {
  background-color: #F1930E;
}

.btn-link:hover {
  color: #d4810d!important;
  text-decoration: none;
}

.text-uday-orange {
  color:#F1930E;
}

.btn-rounded-lrg {
  border-radius: 1.5rem;
}

ul#footer-links li {
  display: inline;
  padding: 0px 10px;
}
</style>
