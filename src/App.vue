<template>
  <NavbarComp />
  <ContactSlide />
  <router-view />
  <FooterComp />
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script>
/*https://v2.vuejs.org/v2/guide/transitions.html  --> velocity */
/* install animate.css */
import NavbarComp from "@/components/NavbarComp";
import FooterComp from "@/components/FooterComp";
import ContactSlide from "@/components/ContactSlide";

export default {
  name: "App",
  components: {
    NavbarComp,
    ContactSlide,
    FooterComp,
  },
};
</script>
