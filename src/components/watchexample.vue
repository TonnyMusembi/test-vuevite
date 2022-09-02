<template>
<div>
    <h2>Watchers</h2>
</div>
<input type="text" v-model="Search" placeholder="Search">
{{Search}}

<div class="col-md-12 bg-light p-5 mb-5">
<table class="table table-bordered">
  <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    
        <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td scope="row">{{post.id}}</td>
          <td>{{post.name}}</td>
          <td>{{post.email}}</td>
          <td><a href="#" class="btn btn-warning" @click="get_user(post.id,post.name,post.email)">Edit</a> <a href="#"  class="btn btn-danger" @click="delete_user(post.id)">Delete</a></td>
         
        </tr>
      </tbody>
</table>
</div>
    
</template>
<script>
import { ref } from 'vue';
export default {
    setup(props) {
        const Search = ref("");
         console.log('Search',Search.value)

    
        return{
            Search,

        };
        
    }
  
}

</script>
