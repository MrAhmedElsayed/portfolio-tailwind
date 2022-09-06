<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="slideOpen">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                >
                  <form method="post" @submit.prevent="submitMessage">
                    <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle
                          class="flex text-lg font-medium text-gray-900"
                        >
                          <div
                            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
                          >
                            <ChatBubbleLeftEllipsisIcon
                              class="w-6 h-6"
                              aria-hidden="true"
                            />
                          </div>
                          <span class="ml-3 my-1">Contact Me</span>
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            @click="slideOpen = false"
                          >
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div class="mt-8">
                        <div class="flow-root">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="first-name"
                                class="block text-sm font-medium text-gray-700"
                                >First name</label
                              >
                              <input
                                type="text"
                                name="first-name"
                                v-model="firstName"
                                autocomplete="given-name"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="last-name"
                                class="block text-sm font-medium text-gray-700"
                                >Last name</label
                              >
                              <input
                                type="text"
                                name="last-name"
                                v-model="lastName"
                                autocomplete="family-name"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>

                            <div class="col-span-6">
                              <label
                                for="email-address"
                                class="block text-sm font-medium text-gray-700"
                                >Email address</label
                              >
                              <input
                                type="text"
                                name="email-address"
                                v-model="emailAddress"
                                autocomplete="email"
                                placeholder="example@mail.com"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div class="col-span-6">
                              <label
                                for="message"
                                class="block text-sm font-medium text-gray-700"
                                >Message</label
                              >
                              <div class="mt-1">
                                <textarea
                                  v-model="message"
                                  name="message"
                                  rows="6"
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="hi my name is ahmed i want a websit that ..."
                                />
                              </div>
                              <p class="mt-2 text-sm text-gray-500">
                                Brief description for your dream project.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      ></div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        I will reply as soon as I receive your message
                      </p>
                      <div class="mt-6">
                        <button
                          type="submit"
                          class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          SEND
                        </button>
                      </div>

                      <div
                        class="mt-6 flex justify-center text-center text-sm text-gray-500"
                      >
                        <p>
                          or
                          <router-link
                            target="_blank"
                            to="/blog"
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            First see my Blog
                            <span aria-hidden="true"> &rarr;</span>
                          </router-link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  XMarkIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "ContactSlide",
  props: {
    // slideOpen: false,
  },
  data: () => ({
    slideOpen: true,
    firstName: "",
    lastName: "",
    emailAddress: "",
    message: "",
  }),
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
    ChatBubbleLeftEllipsisIcon,
  },
  methods: {
    submitMessage() {
      console.log("submit");
      this.firstName = "";
      this.lastName = "";
      this.emailAddress = "";
      this.message = "";
    },
  },
};
</script>
