<template>

    <div class="lista">
        <cardcidade
v-for="cidade in cidades"
:key="cidade.id"
:cidade="cidade">
</cardcidade>
        <div class="card" v-for="cidade in cidades" :key="cidade.id">
            <div class="card-img"></div>
            <h3>{{ cidade.name }}</h3>
            <h4>{{ cidade.description }}</h4>
            <div class="temperatura">{{ cidade.temp }}</div>
        </div>
    </div>
</template>

<script>

import cardcidade from "./cardcidade.vue";
export default {
    componets: { cardcidade },
    data() {
        return {
            cidades: {
                {
                    id: 8429,
                    void: "Rio de Janeiro",
                    description: "Ensolarado",
                    icon: "Old",
                    temnp: "25",
                }
            }
        }
    }
} 
</script>