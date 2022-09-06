<template>
  <Popover class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <router-link
            to="/"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >Home</router-link
          >
          <router-link
            to="/projects"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >Projects</router-link
          >
          <router-link
            to="/about-me"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >About Me</router-link
          >
        </PopoverGroup>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <!-- put language dropdown-->
          <DarkSwitch />
          <!-- put contact slide-->
          <LanguageDropdown />
          <button
            type="button"
            class="ml-5 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <LinkIcon
              class="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Contact
          </button>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="z-50 absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link
                  v-for="item in solutions"
                  :key="item.name"
                  :to="item.href"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">{{
                    item.name
                  }}</span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div>
              <router-link
                to="/blog/sign-up"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                target="_blank"
                >Blog Sign up</router-link
              >
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Share your Knowledge?

                <router-link
                  to="/blog/sign-in"
                  target="_blank"
                  class="text-indigo-600 hover:text-indigo-500"
                  >Blog Sign in</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  color: #4f46e5;
}
</style>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Switch,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartBarIcon,
  Squares2X2Icon,
  XMarkIcon,
  LinkIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import DarkSwitch from "@/components/DarkSwitch";
import LanguageDropdown from "@/components/LanguageDropdown";

export default {
  name: "NavbarComp",
  components: {
    LanguageDropdown,
    DarkSwitch,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    Switch,
    LinkIcon,
    UserCircleIcon,
  },
  data: () => ({
    enabled: false,
    openContact: false,
    solutions: [
      {
        name: "Home",
        description:
          "Get a better understanding of where your traffic is coming from.",
        href: "/",
        icon: ChartBarIcon,
      },
      {
        name: "Projects",
        description: "my projects",
        href: "/projects",
        icon: Squares2X2Icon,
      },
      {
        name: "About Me",
        description:
          "Speak directly to your customers in a more meaningful way.",
        href: "/about-me",
        icon: UserCircleIcon,
      },
    ],
  }),
};
</script>
