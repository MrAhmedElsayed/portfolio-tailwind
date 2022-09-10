<template>
  <NavbarComp />
  <ContactSlide />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterComp />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
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
