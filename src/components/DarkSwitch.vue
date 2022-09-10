<template>
  <Switch
    @click="btnChange"
    v-model="radioEnabled"
    :class="
      radioEnabled
        ? 'bg-slate-700 text-slate-400 focus-visible:ring-slate-500'
        : 'bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600'
    "
    class="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none"
  >
    <span class="sr-only"
      >{{ radioEnabled ? "Enabled" : "Disabled" }}
      <!-- -->
      dark mood</span
    >
    <!-- sun svg -->
    <SunIcon
      :class="radioEnabled ? 'scale-100 duration-300' : 'scale-0 duration-500'"
      class="h-6 w-6 transform transition-transform"
    />
    <!-- sun svg-->

    <!-- moon svg-->
    <svg
      width="24"
      height="24"
      fill="none"
      aria-hidden="true"
      :class="radioEnabled ? 'scale-0 duration-500' : 'scale-100 duration-300'"
      class="ml-3.5 transform transition-transform"
    >
      <path
        d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    <!-- moon svg-->

    <!-- span with two svg -->
    <span
      aria-hidden="true"
      :class="radioEnabled ? 'translate-x-10' : 'translate-x-0'"
      class="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform"
    >
      <!-- sun svg-->
      <SunIcon
        :class="radioEnabled ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
        class="h-6 w-6 flex-none transition duration-500 transform text-cyan-500"
      />

      <!-- sun svg-->

      <!-- moon svg -->
      <svg
        width="24"
        height="24"
        fill="none"
        aria-hidden="true"
        :class="radioEnabled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
        class="flex-none -ml-6 transition duration-500 transform text-slate-700"
      >
        <path
          d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <!-- moon svg -->
    </span>
    <!-- span with two svg -->
  </Switch>
</template>

<script>
//https://stackoverflow.com/questions/47311936/v-model-and-child-components
import { SunIcon } from "@heroicons/vue/24/solid";
import { Switch } from "@headlessui/vue";
export default {
  name: "DarkSwitch",

  props: { radioEnabledProp: Boolean },
  data: () => ({
    // radioEnabled: this.radioEnabledProp,
    radioEnabled: false,
  }),
  components: {
    Switch,
    SunIcon,
  },
  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  },
  methods: {
    btnChange() {
      if (this.radioEnabled) {
        document.body.classList.remove(
          "bg-gradient-to-r",
          "from-gray-700",
          "via-gray-900",
          "to-black",
          "z-0"
        );
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.body.classList.add(
          "bg-gradient-to-r",
          "from-gray-700",
          "via-gray-900",
          "to-black",
          "z-0"
        );
      }
    },
  },
};
</script>
