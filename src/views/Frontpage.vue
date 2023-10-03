<template>
  <header class="motd">No olvides revisar nuestras ofertas!</header>
  <Navbar />
  <Carousel />
  <section class="container">
    <h2 id="section-title">Ofertas del día</h2>
    <Cards />
  </section>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
  import Footer from '@/components/Footer.vue';
  import Carousel from '@/components/Carousel.vue';
  import Cards from '@/components/Cards.vue';

  export default defineComponent({
    name: 'Frontpage',
    components: {
      Navbar,
      Carousel,
      Cards,
      Footer
    },
  });
</script>