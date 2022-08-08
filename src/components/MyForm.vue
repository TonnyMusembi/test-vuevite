<template>
    <div>
    <input type="text" placeholder="name" v-model="Name"/>
    </div>
    <div>
        <!-- <button  @click="submitForm">Submit</button> -->
    </div>
    <h1 @click="handHeadClick">My Name is {{name}} an my age is {{age}}</h1>
    <MyButton/>
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
const name = ref('Tonny');
const age =ref(26);

const handHeadClick = ()=> {
    name.value ='Steve'
    age.value ='30'

}

</script>