<template>
  <section class="hello">
    <img class="img" :src="this.image">
    <h1>{{ this.titre && this.titre }}</h1>
  </section>
</template>

<script>
export default {
  name: 'NudePage',
  props: ['uid', 'titre', 'image'],
  methods: {

    data() {
        return {
            titre : null,
            image : null
        }
  },
    async getContent(){
      let data = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'nude') ).then((response) => {
            let param = this.$props.uid;
            let tab = response.results.filter(function(route) {
                return route.uid === param;
            });
            return tab;
        });
        console.log(data);
        this.titre = data[0].data.header[0].header_title[0].text;
        this.image = data[0].data.header[0].header_image.url;
    },
  },
  created(){
    this.getContent()
  }
}
</script>

<style scoped>

h1{
  margin: 10px 0px;
  font-size: 5em;
}

h3 {
  font-weight: 100;
  margin: 0px;
  max-width: 300px;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img{
  width: 25vw;
}

.landing{
  margin-bottom: 100px;
  background-color: #ffe4c4;
  padding: 60px;
  width: 80vw;
  height: 60vh;
  border-radius: 2em;
  margin: 0 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.landing2{
  width: 80vw;
  border-radius: 2em;
  margin: 135px auto;
}

.lists{
  display: flex;
}


.h1_skills{
  text-align: left;
  max-width: 45vw;
  line-height: 1em;
}

.skill_title{
  font-size: 1.5em;
}

.list{
  margin-right: 100px;
  background-color: rgb(184, 200, 245);
  color: rgb(71, 82, 129);
  padding: 50px;
  border-radius: 2em;
}
</style>
