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
            <input id="nbcouverts" v-model="form.nbcouverts" type="number" min="1" name="nbcouverts">
        </p>
        <p> Terrasse :
            <label for="oui">Oui</label>
            <input id="oui" type="radio"  v-model="form.terrasse" value="oui">

            <label for="non">Non</label>
            <input id="non" type="radio" v-model="form.terrasse" value="non">
        </p>
        <p> Parking :
            <label for="oui">Oui</label>
            <input id="oui" type="radio" v-model="form.parking" value="oui">

            <label for="non">Non</label>
            <input id="non" type="radio" v-model="form.parking" value="non">
        </p>
        <p>
            <button type="submit">Valider</button>
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
            this.errors = [];

            if (!this.form.name) {
                this.errors.push("Nom du restaurant requis");
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
    // return: {
    // el: '#app',
    // data: {
    //     errors: [],
    //     name: null,
    //     city: null,
    //     nbcouverts: null,
    //     terrasse: null,
    //     parking: null
    // },
    // },
    // methods: {
    //     checkForm: function (e) {
    //         this.errors = [];

    //         if (!this.name) {
    //             this.errors.push("Name required");
    //         }
    //         if (!this.city) {
    //             this.errors.push("City required");
    //         }
    //         if (!this.nbcouverts) {
    //             this.errors.push("Name required");
    //         }
    //         if (!this.terrasse) {
    //             this.errors.push("Terrasse required");
    //         }
    //         if (!this.parking) {
    //             this.errors.push("Name required");
    //         }
    //     }
    // }
}
</script>