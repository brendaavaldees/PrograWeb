<template>
  <div id="home">
    <div id="contenedores"
    v-for="f in facts"
    :key="f._id">
      <router-link :to="`/facts/${f._id}`">
        <h2>{{f.text}}</h2>
        <p>{{f._id}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components:{
  },
  computed: {
    ...mapState(['facts'])
  },
  methods:{
    ...mapActions(['getFacts'])
  },
  created(){
    this.getFacts()
  }
}
</script>

<style>
  #contenedores{
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin: 0 15px 15px 15px;
  }
  
  
</style>