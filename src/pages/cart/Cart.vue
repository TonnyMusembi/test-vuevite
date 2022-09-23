<template>
    <div class="justify text-justify">
        <button class="" onclick="(onCreate)">Create</button>

    </div>
</template>
<script>
   export default {
    data() {
        return {
            data:[],
            
        }
    },
methods: {
    onCreate(){
        const url =""
        axios.post('').then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        
        })

    }
    
},

   }
</script>
