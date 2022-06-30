<template>
    <div>
        <h1>Liste de mes restaurants</h1>
        <!-- <p @click="increment">Il y a {{total}} restaurants</p> -->
        <p :key="index" v-for="(restaurant, index) in restaurants"> {{restaurant}}</p>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'Accueil',
    data() {
        return {
            restaurants: null
            //total: 3
        }
    },
    mounted() {
        
    }
    // methods: {
    //     increment() {
    //         this.total += 1;
    //     }
    // }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>