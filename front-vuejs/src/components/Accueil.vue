<template>
  <div>
    <router-link to="/resto">Ajouter un restaurant </router-link>
    <router-link to="/employe">Ajouter un employe</router-link>
    <h1>Liste de mes restaurants</h1>
    <!-- <p @click="increment">Il y a {{total}} restaurants</p> -->

    <p :key="index" v-for="(restaurant, index) in restaurants">
      {{ restaurant.name }} à {{ restaurant.city }} <br>
      {{ restaurant.nbcouverts }} couverts <br> Terrasse : {{ restaurant.terrasse }} <br>
      Parking : {{ restaurant.parking }} <br><button  v-on:click="suprim(restaurant.id_restaurants)"  >Supprimer le restaurant</button><br> <br>
      <strong>Employes : </strong>
      <span :key="index" v-for="(employe, index) in employes">
        <span v-if="restaurant.id_restaurants === employe.restaurant_id">
          {{ employe.first_name }} {{ employe.last_name }} <button  v-on:click="suprimEmploye(employe.id_employes)" >X</button>
        </span>
      </span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Accueil",
  data() {
    return {
      restaurants: null,
      employes: null,
      //total: 3
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:5000/restaurants")
      .then((res) => (this.restaurants = res.data))
      .catch(
        (error) => (this.restaurants = [{ name: "Erreur de chargement" }])
      );
    axios
      .get("http://127.0.0.1:5000/employes")
      .then((res) => (this.employes = res.data))
      .catch((error) => (this.employes = [{ name: "Erreur de chargement" }]));
  },
  methods: {
      suprim(index) {
        // console.log(index);
        axios.delete("http://127.0.0.1:5000/restaurants/" + index )
      },
      suprimEmploye(index) {
          // console.log(index);
          axios.delete("http://127.0.0.1:5000/employe/" + index)
      }
  //     increment() {
  //         this.total += 1;
  //     }
  }
};
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