<template>
    <div class="home">

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
        <p> Terrasse :
            <label for="oui">Oui</label>
            <input id="tOui" type="radio"  v-model="form.terrasse" value="oui">

            <label for="non">Non</label>
            <input id="tNon" type="radio" v-model="form.terrasse" value="non">
        </p>
        <p> Parking :
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
            let nomRegExp = RegExp('^[a-zA-Z-\']{3,}$', 'g');

            if (this.errors) {
                bouton.disabled = true;
            }
            var inputName = document.getElementById('name').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.name.match(nomRegExp)) {
                    bouton.disabled = false;
                }else {
                    bouton.disabled = true;
                }
            });
            var inputCity = document.getElementById('city').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (e.target.value == this.form.city.match(nomRegExp)) {
                    bouton.disabled = false;
                }else {
                    bouton.disabled = true;
                }
            });
            var inputNbcouverts = document.getElementById('nbcouverts').addEventListener('input', (e) =>{
                console.log(e.target.value);
                // last.innerHTML = e.target.value;
                if (!this.form.nbcouverts) {
                    bouton.disabled = true;
                }else {
                    bouton.disabled = false;
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