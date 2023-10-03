<template>
  <Navbar />
    <Qna />
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
  import Footer from '@/components/Footer.vue';
  import Qna from '@/components/Qna.vue';

  export default defineComponent({
    name: 'Search',
    components: {
      Navbar,
      Qna,
      Footer
    },
  });
</script>

<style></style>