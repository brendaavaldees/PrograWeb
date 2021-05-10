<template>
  <div class="about">
    <h1>Mi dato random</h1>
    <input type="button" value="Obtener Dato" onclick="location.reload()"/>
    <h2>{{fact.type}}</h2>
    <p>{{fact.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Random',
  data(){
    return{
      fact: {}
    };
  },
  methods: {
    async Random(){
      try{
        const res = await fetch(`https://cat-fact.herokuapp.com/facts/random`)
        const data = await res.json();
        console.log(data);
        this.fact = data;
      }catch (error){
        console.log(error);
      }
    },

    verificado(){
      this.fact.status.verified ? true : false;
    }
  },
  computed: {
    
  },
  created(){
    this.Random();
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
  h1{
    font-family: 'Itim', cursive;
  }
  input{
    background-color: white;
    border: 2px solid green;
    border-radius: 3px;
    color:green;
    font-family: 'Itim', cursive;
    font-size: 16px;
  }
</style>