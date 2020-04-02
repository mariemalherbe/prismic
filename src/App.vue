<template>
  <div id="app">
     <a>
       <router-link v-for="(doc, index) in this.routes" class="card" tag="div" :to="doc.uid" :key="'route' + index">{{ doc.uid }}</router-link>
      </a>
      <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data() {
    return{
      routes : null,
    }
  },
  
  methods : {
    async getDocuments(){
      let data = this.$prismic.client.query('')
        .then((response) => {
          console.log(response.results);
          let docs = response.results;
          return docs
      });
      this.routes = await data;
      console.log(this.routes)
    }
  },
    created(){
    this.getDocuments()
  }
  
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
