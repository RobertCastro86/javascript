<template>
    <Cabecalho/>
    <div class="lista">
        <div class="card" v-for="cidade in cidades" :key="cidades.id">
            <div class="card-img"></div>
            <h3>{{ cidade.name }}</h3>
            <h4>{{ cidade.description }}</h4>
            <div class="temperatura">{{ cidade.temp }}</div>

        </div>
    </div>
</template>

<script>
import "/assts/estilo.css";
import cabecalho from "./cabecalho.vue";
import ListaCidades from "./ListaCidades.vue";
import ListaCidades from "./ListaCidades.vue";
export default {
    components: { cabecalho, ListaCidades },
    data() {}
}
</script>