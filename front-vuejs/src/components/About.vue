<template>
    <div class="hello">
        <div>
        <h1>Projet NodeJs et VueJs</h1>
            <p>
                Voici ma réalisation pour découvrir NodeJs et VueJs grâce au TP que m'a donné mon formateur.
            </p>
            <p>
                La partie NodeJs se situe dans le dossier node-express-app. J'ai créé la connexion à la base de données, la création des
                tables sql, ainsi que les routes GET POST PUT et DELETE.
                Ces fichiers devaient être installés dans la partie node-modules.
            </p>
            <p>
                La partie VueJs se trouve ici. Je devais afficher les restaurants et les employés ainsi que la possibilité de les supprimer.
                J'ai également réalisé 2 formulaires, l'un pour insérer les restaurants et l'autre pour insérer les employés.
                <br> <br>
                J'ai également codé la validation des formulaires : <br>
                &#x2022; Les noms/prénoms doivent avoir au moins 3 caractères parmi a-z A-Z – et '<br>
                &#x2022; Le nombre de couverts doit être un nombre. <br>
                &#x2022; En cas de non-validation d’un champ d’un formulaire, un message indique à l’utilisateur l’erreur. <br>
                &#x2022; De même, le bouton d’envoi sera disabled tant que le formulaire n’est pas valide. <br>
                &#x2022; Je devais effectuer les mêmes tests côté back-end avant l’insertion en base. <br>
            </p> 
            </div>
    </div>
</template>
<script>
export default {
    name: "Employe",
    }
</script>
<style scoped>

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }
    /* .about {
        display: flex;
        flex-direction: column;
        justify-items: center;
        width: 50%;
    } */
    .hello {
        width:600px;
        margin:0 auto;
        margin-top: 1%;
    }
    p {
        text-align: left;
    }
    @media screen and (max-width: 750px) {
        .hello {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        font-size: 21px;
    }
    }
</style>