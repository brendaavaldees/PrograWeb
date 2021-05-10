<template>
    <div>
        <h2><span>ID: </span>{{fact._id}}</h2>
        <h3><span>Fact: </span>{{fact.text}}</h3>
        <p><span>Fecha de Creación: </span>{{fact.createdAt}}</p>
    </div>
</template>

<script>
export default {
    name: 'Detalle',
    data(){
        return{
            fact: {}
        };
    },
    methods: {
        async detalleFact(){
            try{
                const res = await fetch(`https://cat-fact.herokuapp.com/facts/${this.$route.params._id}`)
                const data = await res.json();
                console.log(data);
                this.fact = data;
            }catch (error){
                console.log(error);
            }
        },
    },
    created(){
        this.detalleFact();
    },
};
</script>

<style>

</style>