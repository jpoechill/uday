<template>
  <section>
    <!-- Top Border -->
    <div class="w-100 bg-uday-orange p-2 text-center text-white font-weight-bold">
      PROTOTYPE: Last updated Aug 17th, 2019.
    </div>

    <!-- Header -->
    <div class="container text-center mt-1">
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <nuxt-link to="/">
            <img src="/uday-logo-lrg.png" class="w-50 p-2" alt="Uday Logo">
          </nuxt-link>
          <h5>
            Uday: Electronic Patient Records
          </h5>
          <div class="mb-3">
            <ul id="footer-links" class="p-0 mb-0">
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Survey</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/team">Team</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Nuxt Body -->
    
    <nuxt/>
    
    <!--  End -->
    
    <!-- Footer -->
    <div class="container mb-3 text-center">
      Uday 2.0 © 2019
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
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
