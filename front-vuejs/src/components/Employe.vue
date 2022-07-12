<template>
    <div class="hello">
        <h1>Ajouter un employé</h1>
        <form  @submit.prevent="submit">
        <div v-if="errors.length">
            <p :key="index" v-for="error, index in errors"> {{error}} </p>
        </div>
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
            <input type="date" min="1979-12-31" id="hire_date" v-model="form.hire_date" />
        </p>
        <p> Choisissez un restaurant
            <select v-model="form.restaurant_id" id="restaurant_id">
                <option disabled value="" >Choisissez</option>
                
                <option :key="index" v-for="(restaurant, index) in restaurants" :value="restaurant.id_restaurants">
                {{restaurant.name}}</option>
            </select>
        </p>
        <p>
            <button id="bouton" type="submit">Valider</button>
        </p>
        <span class="c"></span>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "Employe",
    data() {
        return {
            errors: [],
            restaurants: null,
            form: {
            first_name: null,
            last_name: null,
            hire_date: null,
            restaurant_id: null,
        },
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
            let bouton = document.getElementById('bouton');
            // let last = document.querySelector('.c');
            this.errors = [];
            let nomRegExp = RegExp('^[a-zA-Z-\']{3,}$', 'g');
            // let testNom = nomRegExp.test(this.form.first_name);
            // if (testNom == false) {
            //     this.errors.push('Le nombre d\'écriture .');
            // }
            if (this.errors) {
                bouton.disabled = true;
            }
            var inputFirst_name = document.getElementById('first_name').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.first_name.match(nomRegExp)) {
                    bouton.disabled = false;
                }else {
                    bouton.disabled = true;
                }
            });
            var inputLast_name = document.getElementById('last_name').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.last_name.match(nomRegExp)) {
                    bouton.disabled = false;
                }else {
                    bouton.disabled = true;
                }
            });
            var inputHire_date = document.getElementById('hire_date').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.hire_date) {
                    bouton.disabled = false;
                }else {
                    bouton.disabled = true;
                }
            });
            var inputRestaurant_id = document.getElementById('restaurant_id').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (!this.form.restaurant_id) {
                    bouton.disabled = false;
                }else {
                    bouton.disabled = true;
                }
            });
            if (this.form.first_name) {
                if (this.form.first_name != this.form.first_name.match(nomRegExp)) {
                console.log('erreur');
                this.errors.push('Le nombre d\'écriture .');
                }
            }
            if(!this.form.first_name){
                this.errors.push('Prénom requis.');
            }
            if (this.form.last_name) {
                if (this.form.last_name != this.form.last_name.match(nomRegExp)) {
                    console.log('erreur');
                    this.errors.push('Le nombre d\'écriture .');
                }
            }
            if(!this.form.last_name){
                this.errors.push('Nom requis.');
            }
            if(!this.form.hire_date ){
                this.errors.push('Date d\'embauche requise.');
            }
            if(!this.form.restaurant_id){
                this.errors.push('Restaurant requis.');
            }

            if (this.errors.length) {
                return false;
            }

            axios.post("http://127.0.0.1:5000/employe",this.form)
                    .then(function(response){
                        this.form = response.data;
                    }.bind(this));
        },
    },
};
</script>
