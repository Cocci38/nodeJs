<template>
    <div class="home">

        <h1>Ajouter un restaurant</h1>
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
            <input id="nbcouverts" v-model="form.nbcouverts" type="text" name="nbcouverts">
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
            <button v-on:click="submit">Valider</button>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Resto',
    data() {
        return {
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