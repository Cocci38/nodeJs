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
                bouton.style.backgroundColor = 'white';
                bouton.style.color = '#cd3333';
                bouton.style.border = ('1px solid #cd3333');
            } else {
                bouton.disabled = false;
            }
            var inputFirst_name = document.getElementById('first_name').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.first_name.match(nomRegExp)) {
                    bouton.disabled = false;
                    bouton.style.backgroundColor = '#42b983';
                    bouton.style.color = 'white';
                    bouton.style.border = ('1px solid #42b983');
                }else {
                    bouton.disabled = true;
                    bouton.style.backgroundColor = 'white';
                    bouton.style.color = '#cd3333';
                    bouton.style.border = ('1px solid #cd3333');
                }
            });
            var inputLast_name = document.getElementById('last_name').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.last_name.match(nomRegExp)) {
                    bouton.disabled = false;
                    bouton.style.backgroundColor = '#42b983';
                    bouton.style.color = 'white';
                    bouton.style.border = ('1px solid #42b983');
                }else {
                    bouton.disabled = true;
                    bouton.style.backgroundColor = 'white';
                    bouton.style.color = '#cd3333';
                    bouton.style.border = ('1px solid #cd3333');
                }
            });
            var inputHire_date = document.getElementById('hire_date').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.hire_date) {
                    bouton.disabled = false;
                    bouton.style.backgroundColor = '#42b983';
                    bouton.style.color = 'white';
                    bouton.style.border = ('1px solid #42b983');
                }else {
                    bouton.disabled = true;
                    bouton.style.backgroundColor = 'white';
                    bouton.style.color = '#cd3333';
                    bouton.style.border = ('1px solid #cd3333');
                }
            });
            var inputRestaurant_id = document.getElementById('restaurant_id').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (!this.form.restaurant_id) {
                    bouton.disabled = false;
                    bouton.style.backgroundColor = '#42b983';
                    bouton.style.color = 'white';
                    bouton.style.border = ('1px solid #42b983');
                }else {
                    bouton.disabled = true;
                    bouton.style.backgroundColor = 'white';
                    bouton.style.color = '#cd3333';
                    bouton.style.border = ('1px solid #cd3333');
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
<style scoped>
    .hello {
        width:400px;
        margin: auto;
        margin-top: 2%;
        text-align: center;
    }
    h1 {
        text-align: center;
    }
    form {
        width:100%;
        padding: 30px;
        border: 1px solid #f1f1f1;
        background: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    input[type=text], input[type=date], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        color: #2c3e50;
        text-align: center;
        font-size: 15px;
        border: 1px solid #2c3e50;
        box-sizing: border-box;
    }
    button {
        background-color: #42b983;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    button:hover {
        background-color: white;
        color: #42b983;
        border: 1px solid #42b983;
    }
    option {
        color: #2c3e50;
        text-align: center;
        font-size: 15px;
    }
        @media screen and (max-width: 800px) {
        .hello {
        width:85%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
</style>