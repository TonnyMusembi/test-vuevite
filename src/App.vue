<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//  import  MyForm from './components/MyForm.vue'

// import { RouterView } from 'vue-router';

// <router-view/>
import LayoutVue from './components/Layout.vue';


</script>

<template>
  <!-- <div> -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <nav>
  <router-link to="/"> Home</router-link>
   <router-link to="/"> About</router-link>

  </nav>
  <MyForm msg="Vite + Vue" /> -->

<div class=" col-end-1">
<router-link  to="/">Home</router-link>
<router-link to="/">Pages</router-link>
</div>
<router-view/>  
</template>
