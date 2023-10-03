<template>
  <Navbar />
  <main>
    <section class="container main-container d-flex gap-md-1 mb-5 flex-column flex-md-row">
      <Products />
      <Summary />
    </section>
  </main>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
  import Footer from '@/components/Footer.vue';
  import Products from '@/components/Products.vue';
  import Summary from '@/components/Summary.vue';

  export default defineComponent({
    name: 'Cart',
    components: {
      Navbar,
      Products,
      Summary,
      Footer
    },
  });
</script>

<style>@import '../css/cart.less';</style>