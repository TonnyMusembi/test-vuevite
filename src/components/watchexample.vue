<template>
<div>
    <h2>Watchers</h2>
</div>
<input type="text" v-model="Search" placeholder="Search">
{{Search}}

    
</template>
<script>
import { ref } from 'vue';
export default {
    setup(props) {
        const Search = ref("");
         console.log('Search',Search.value)
        // watch(Search,() =>   {
        //  console.log('Search',Search.value)

            
        // }) 
        
    

        return{
            Search,

        };
        
    }
    



}

</script>
