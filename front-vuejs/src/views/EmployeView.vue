<template>
    <div class="home">
        <Employe/>
    </div>
</template>
<script>
// @ is an alias to /src

import Employe from '@/components/Employe.vue'

export default {
    name: 'EmployeView',
    components: {
        Employe
    }
}
</script>