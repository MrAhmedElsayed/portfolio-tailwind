<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="sr-only block text-sm font-medium text-gray-700"
      >select language</ListboxLabel
    >
    <div class="relative ml-5">
      <ListboxButton
        class="relative w-full md:w-40 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      >
        <span class="flex items-center">
          <img
            :src="selected.flag"
            alt=""
            class="h-6 w-6 flex-shrink-0 rounded-full"
          />
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="language in languages"
            :key="language.code"
            :value="language"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="language.flag"
                  alt=""
                  class="h-6 w-6 flex-shrink-0 rounded-full"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                  >{{ language.name }}</span
                >
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
export default {
  name: "LanguageDropdown",
  data() {
    return {
      languages: [
        {
          code: "EN",
          name: "English",
          flag: require("../assets/flags/English.svg"),
        },
        {
          code: "AR",
          name: "العربية",
          flag: require("../assets/flags/Arabic.svg"),
        },
        {
          code: 3,
          name: "اُردُو",
          flag: require("../assets/flags/Urdu.svg"),
        },
      ],
      selected: {
        code: "EN",
        name: "English",
        flag: require("../assets/flags/English.svg"),
      },
    };
  },
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronUpDownIcon,
  },
};
</script>
