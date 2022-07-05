<template>
    <div class="hello">
        <h1>Ajouter un employé</h1>
        <p>
            <label for="first_name">Prénom</label>
            <input type="text" id="first_name" v-model="form.first_name" />
        </p>
        <p>
            <label for="last_name">Nom</label>
            <input type="text" id="last_name" v-model="form.last_name" />
        </p>
        <p>
            <label for="hire_date">Date d'embauche</label>
            <input type="date" id="hire_date" v-model="form.hire_date" />
        </p>
        <p>
            <select v-model="form.restaurant_id">
                <option :key="index" v-for="(restaurant, index) in restaurants" :value="restaurant.id_restaurants">
                {{restaurant.name}}</option>
            </select>
        </p>
        <p>
            <button v-on:click="submit">Valider</button>
        </p>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "Employe",
    data() {
        return {
            restaurants: null,
            form: {
            first_name: null,
            last_name: null,
            hire_date: null,
            restaurant_id: null,
        }
        
        };
    },
    mounted() {
        axios
            .get("http://127.0.0.1:5000/restaurants")
            .then((res) => (this.restaurants = res.data))
            .catch((error) => (this.restaurants = [{ name: "Erreur de chargement" }])
            );
        },
    methods: {
        submit() {
            axios.post("http://127.0.0.1:5000/employe",this.form);
        },
    },
};
</script>
