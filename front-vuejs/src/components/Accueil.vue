<template>
<div class="home">
  <div class="container">
    <!-- <router-link to="/resto">Ajouter un restaurant </router-link>
    <router-link to="/employe">Ajouter un employe</router-link> -->
    <h1>Liste des restaurants</h1>
    <!-- <p @click="increment">Il y a {{total}} restaurants</p> -->
    
    <p :key="index" v-for="(restaurant, index) in restaurants" class="resto">
      <br><strong>{{ restaurant.name }}</strong>
      à {{ restaurant.city }} <button  v-on:click="suprim(restaurant.id_restaurants)" ><img src="../assets/Delete.png" alt="supprimer un restaurant" ></button><br>
      {{ restaurant.nbcouverts }} couverts <br> Terrasse : {{ restaurant.terrasse }} <br>
      Parking : {{ restaurant.parking }} <br><br> <br>
      <strong>Employés : </strong><br>
      <span :key="index" v-for="(employe, index) in employes" class="employe">
        <span v-if="restaurant.id_restaurants === employe.restaurant_id">
          {{ employe.first_name }} {{ employe.last_name }} <button  v-on:click="suprimEmploye(employe.id_employes)" ><img src="../assets/Delete.png" alt="supprimer un employé" ></button>
        </span>
      </span>
    </p>
  </div>
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
this.update();
  },
  methods: {
    update(){
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
      suprim(index) {
        // console.log(index);
        axios.delete("http://127.0.0.1:5000/restaurant/" + index )
        this.update();
      },
      suprimEmploye(index) {
          // console.log(index);
          axios.delete("http://127.0.0.1:5000/employe/" + index)
          this.update();
      }
  //     increment() {
  //         this.total += 1;
  //     }
  }
};
</script>
<style scoped>
    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width:50%;
      border: 1px solid #f1f1f1;
      background: #fff;
    }
    .resto {
      width: 90%;
      border: 1px solid #f1f1f1;
    }
    img{
      width: 20px;
      color: #fff;
    }
  button {
      background-color: #42b983;
      color: white;
      padding: 3px 6px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: auto;
      }
      /* button:hover {
          background-color: white;
          color: #42b983;
          border: 1px solid #42b983;
      } */
    @media screen and (max-width: 800px) {
        .container {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
</style>