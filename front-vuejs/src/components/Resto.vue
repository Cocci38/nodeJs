<template>
    <div class="hello">

        <h1>Ajouter un restaurant</h1>
        <form @submit.prevent="submit">
        <div v-if="errors.length">
            <p :key="index" v-for="error, index in errors"> {{error}} </p>
        </div>
        <p>
            <label for="name">Nom</label>
            <input id="name" v-model="form.name" type="text" name="name">
        </p>
        <p>
            <label for="city">Ville</label>
            <input id="city" v-model="form.city" type="text" name="city">
        </p>
        <p>
            <label for="nbcouverts">Nombre de couverts</label>
            <input id="nbcouverts" v-model.number="form.nbcouverts" type="number" min="1" name="nbcouverts">
        </p>
        <p class="terrasse"> Terrasse : <br>
            <label for="oui">Oui</label>
            <input id="tOui" type="radio" name="terrasse" v-model="form.terrasse" value="oui">

            <label for="non">Non</label>
            <input id="tNon" type="radio" name="terrasse" v-model="form.terrasse" value="non">
        </p>
        <p class="parking"> Parking : <br>
            <label for="oui">Oui</label>
            <input id="pOui" type="radio" v-model="form.parking" value="oui">
                
            <label for="non">Non</label>
            <input id="pNon" type="radio" v-model="form.parking" value="non">
            
        </p>
        <p>
            <button id="bouton" type="submit">Valider</button>
        </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Resto',
    data() {
        return {
            errors: [],
            form: {
                name: null,
                city: null,
                nbcouverts: null,
                terrasse: null,
                parking: null
            }
        }
    },
    methods: {
        submit() {
            let bouton = document.getElementById('bouton');
            this.errors = [];
            let nomRegExp = RegExp('^[a-zA-Z-\' æœçéàèùâêîôûëïüÿÂÊÎÔÛÄËÏÖÜÀÆÇÉÈŒÙ]{3,}$', 'g');

            if (this.errors) {
                bouton.disabled = true;
                bouton.style.backgroundColor = 'white';
                bouton.style.color = '#cd3333';
                bouton.style.border = ('1px solid #cd3333');
            } else {
                bouton.disabled = false;
            }
            var inputName = document.getElementById('name').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.name.match(nomRegExp)) {
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
            var inputCity = document.getElementById('city').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.city.match(nomRegExp)) {
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
            var inputNbcouverts = document.getElementById('nbcouverts').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (this.form.nbcouverts <= 0) {
                    bouton.disabled = true;
                    bouton.style.backgroundColor = 'white';
                    bouton.style.color = '#cd3333';
                    bouton.style.border = ('1px solid #cd3333');
                }else {
                    bouton.disabled = false;
                    bouton.style.backgroundColor = '#42b983';
                    bouton.style.color = 'white';
                    bouton.style.border = ('1px solid #42b983');
                }
            });
            if (this.form.name) {
                if (this.form.name != this.form.name.match(nomRegExp)) {
                console.log('erreur');
                this.errors.push('Le nombre d\'écriture .');
                }
            }
            if (!this.form.name) {
                this.errors.push("Nom du restaurant requis");
            }
            if (this.form.city) {
                if (this.form.city != this.form.city.match(nomRegExp)) {
                console.log('erreur');
                this.errors.push('Le nombre d\'écriture .');
                }
            }
            if (!this.form.city) {
                this.errors.push("Ville requise");
            }
            if (!this.form.nbcouverts && !Number.isInteger(this.form.nbcouverts)) {
                this.errors.push("Nombre de couverts requis");
            }
            if (!this.form.terrasse) {
                this.errors.push("Terrasse requise");
            }
            if (!this.form.parking) {
                this.errors.push("Parking requis");
            }
            if (this.errors.length) {
                return false;
            }
            axios.post('http://127.0.0.1:5000/restaurant', this.form)
        }
    }
}
</script>
<style scoped>
    .hello {
        width:400px;
        margin:0 auto;
        margin-top: 2%;
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
    input[type=text], input[type=date], input[type=number]{
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
input[type=radio]{
    padding: 100px;
    accent-color: #42b983;
}
    input[type=radio]:checked {
        border: 10px solid #42b983;
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
    .terrasse, .parking {
        text-align: center;
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