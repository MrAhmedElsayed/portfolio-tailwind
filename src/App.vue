<template>
  <NavbarComp />
  <ContactSlide />
  <router-view />
  <FooterComp />
</template>

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
