<template>
  <img
    class="hidden absolute top-32 left-24 w-40 md:block"
    :src="require('../assets/resume.svg')"
    alt="svg"
  />
  <div
    class="my-card relative max-w-md mx-auto md:max-w-3xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-32"
  >
    <img
      class="hidden absolute top-10 right-10 w-40 md:block transform -rotate-45 cursor-pointer"
      :src="require('../assets/hire-me.svg')"
      alt="svg"
    />
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full flex justify-center">
          <div class="relative">
            <img
              :src="require('../assets/ahmed.jpg')"
              class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              alt="Ahmed Image"
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-28">
        <h3 class="text-2xl text-indigo-600 font-bold leading-normal mb-1">
          Ahmed El-Sayed
        </h3>
        <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i
          >Full-Stack Web developer
        </div>
      </div>
      <div class="mt-6 py-6 border-t border-slate-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4">
            <p class="font-light leading-relaxed text-slate-600 mb-4">
              An artist of considerable range, Mike is the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm.
            </p>
            <router-link
              to="/skills"
              class="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >Skills</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
