<script setup>
import { ref } from 'vue';

const name = ref('Tonny');
const age =ref(26);

const handHeadClick = ()=> {
    name.value ='Steve'
    age.value ='30'

}
const post = ref ({

})
function undo(){
    undoing.value=true
    _undo()
    undoing.value=false

}




</script>

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