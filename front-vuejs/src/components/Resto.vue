<template>
    <div class="home">

        <h1>Ajouter un restaurant</h1>
        <form id="app" @submit="checkForm" method="post">
        <p>
            <label for="name">Nom</label>
            <input id="name" v-model="name" type="text" name="name">
        </p>
        <p>
            <label for="city">Ville</label>
            <input id="city" v-model="city" type="text" name="city">
        </p>
        <p>
            <label for="nbcouverts">Nombre de couverts</label>
            <input id="nbcouverts" v-model="nbcouverts" type="text" name="nbcouverts">
        </p>
        <p> Terrasse :
            <label for="oui">Oui</label>
            <input id="oui" type="radio" name="terrasse" value="oui">

            <label for="non">Non</label>
            <input id="non" type="radio" name="terrasse" value="non">
        </p>
        <p> Parking :
            <label for="oui">Oui</label>
            <input id="oui" type="radio" name="parking" value="oui">

            <label for="non">Non</label>
            <input id="non" type="radio" name="parking" value="non">
        </p>
        <p>
            <input type="submit" value="Valider">
        </p>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Resto',
    return: {
    el: '#app',
    data: {
        errors: [],
        name: null,
        city: null,
        nbcouverts: null,
        terrasse: null,
        parking: null
    },
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.name) {
                this.errors.push("Name required");
            }
            if (!this.city) {
                this.errors.push("City required");
            }
            if (!this.nbcouverts) {
                this.errors.push("Name required");
            }
            if (!this.terrasse) {
                this.errors.push("Terrasse required");
            }
            if (!this.parking) {
                this.errors.push("Name required");
            }
        }
    }
}
</script>