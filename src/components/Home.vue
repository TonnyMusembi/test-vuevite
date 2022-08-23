<script setup>
import { ref  ,onMounted} from 'vue';


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
const username= ref('Tony')
function updateUserName(newUserName){
    username.value=newUserName

}
onMounted(()=>{
    updateUserName('Stevo')

})
const isModalShown = ref(false)
function showModal(){
    isModalShown.value=true
}
onMounted(()=>{
    showModal()

})

 const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
      
    console.log(arr1.toString());
      
    arr1[2] = "Narayan"; // possible
      
    console.log(arr1.toString());


    const first =[0,1,2];
    const second =[3,4,5];
    const third = first.concat(second);

    // url =""
    // fetch('url')
    // .then((response) => {
    //     console.log(response)
        
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        
}).catch(err => console.error(err));




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

    
<table  class="w-full border rounded-md overflow-hidden">
    <thead>
        <tr class="text-sm bg-black-100 text-left divide-x">
            <th class="py-2 px-3">First Name</th>
            <th class="py-2 px-3">Last Name</th>
            <th class="py-2 px-3">Msisdn</th>
            <th class="py-2 px-3">Email</th>
            <th class="py-2 px-3">Network</th>
            <th class="py-2 px-3">Role</th>
        </tr>

    </thead>
    <tbody>


    </tbody>
</table>
</template>