<template>
  <div>
    <h2>Watchers</h2>
  </div>
  <input type="text" v-model="Search" placeholder="Search" />
  {{ Search }}

  <!-- <input type="text" v-model="input" placeholder="Search fruits..." />
  <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
    <p>{{ fruit }}</p>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
     <p>No results found!</p>
  </div> -->

  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <datepicker name="birthdate"></datepicker>
  </div>
</template>
<script>
import { ref } from "vue";
import Datepicker from "vuejs-datepicker";

export default {
  // components: {
  //   Datepicker,
  // },
  setup(props) {
    const Search = ref("");
    console.log("Search", Search.value);
    //          let input = ref("");

    //          const fruits = ["apple", "banana", "orange"];
    // function filteredList() {
    //   return fruits.filter((fruit) =>
    //     fruit.toLowerCase().includes(input.value.toLowerCase())
    //   );
    // }

    // watch(Search,() =>   {
    //  console.log('Search',Search.value)

    // })

    return {
      Search,
      Datepicker,
    };
  },
};
</script>