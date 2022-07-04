<template>
    <div class="hello">
        <h1>Ajouter un employé</h1>
        <p>
            <label for="first_name">Prénom</label>
            <input type="text" id="first_name" v-model="form.first_name">
        </p>
            <p>
            <label for="last_name">Nom</label>
            <input type="text" id="last_name" v-model="form.last_name">
        </p>
        <p>
            <label for="hire_date">Date d'embauche</label>
            <input type="date" id="hire_date" v-model="form.hire_date">
        </p>
        <!-- <p>
            <select v-model="selected" id="restaurant_id">
                <option disabled value="">Liste des restaurants</option>
                <option v-for-key="option in options" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </p> -->
        <p>
            <button v-on:click="submit">Valider</button>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Employe',
    data() {
        return {
            form: {
                first_name: null,
                last_name: null,
                hire_date: null,
            }
        }
    },
    methods: {
        submit(index) {
            axios.post('http://127.0.0.1:5000//restaurants/' + index + '/employe', this.form)
        }
    }
}
</script>
