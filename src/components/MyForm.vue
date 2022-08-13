<template>
    <div>
    <input type="text" placeholder="name" v-model="Name"/>
    </div>
    <div>
        <!-- <button  @click="submitForm">Submit</button> -->
    </div>
    <h1 @click="handHeadClick">My Name is {{name}} an my age is {{age}}</h1>
    <MyButton/>
    <div class="counter">
        {{counter}}
0  </div>
<div class="buttons">
<button @click="decreasCounter">-</button>
<button @click="increaseCounter">+</button>
</div>
<h1> {{msg}} </h1>

  <button type="button" @click="doubleCount()">
    count is: {{ count }}
  </button>
</template>
<script setup>

import { ref } from "vue";


// import  MyButton from '@components/MyButton'
//  const name = ref('');
//  const SubmitForm = () => {console.log('FormSubmitted! Name = ${name.value}')
//  }
//  return{
// name,
// submitForm,
//  },


    // return {
    //     counter:0
        
    // }

const name = ref('Tonny');
const age =ref(26);

const handHeadClick = ()=> {
    name.value ='Steve'
    age.value ='30'

}


function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }

methods: {
    
    
}

const api ='';
fetch('')
.then((response) => {
})
.catch((error) => {
    console.log(error)
    
})
const name1= "Tonny"
console.log(name1)


// const props = defineProps({
//   msg: String,
//   start: Number,
// });

// const count = ref(props.start);
// const doubleCount = () => {
//   return count.value * 2
//   }
</script>