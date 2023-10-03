<template>
  <Navbar />
  <div class="w-100 d-flex flex-column flex-md-row">
    <aside class="filters p-5 mb-5 mb-md-0">
      <Filters />
    </aside>
    <main class="container">
      <h1 id="section-title">Resultados de búsqueda</h1>
      <Cards />
    </main>
  </div>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
  import Footer from '@/components/Footer.vue';
  import Filters from '@/components/Filters.vue';
  import Cards from '@/components/Cards.vue';

  export default defineComponent({
    name: 'Search',
    components: {
      Navbar,
      Filters,
      Cards,
      Footer
    },
  });
</script>

<style>@import '../css/search.less'</style>