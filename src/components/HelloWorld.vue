<template>
  <section class="hello">

  <div class="landing">
    <img class="img" :src="this.fields.description_image">
    <h1>{{ this.fields.title }}</h1>
    <h3>{{ this.fields.description }}</h3>
  </div>

   <section class="landing2" v-for="(slice, index) in slices" :key="'slice' + index">
     <h1 class="h1_skills"><prismic-rich-text :field="slice.primary.section_title"/></h1>
        <div class="lists">
          <div class="list" v-for="(item, index) in slice.items" :key="'items' + index">
            <prismic-rich-text :field="item.title1" class="skill_title" />
            <ul>
              <li v-for="(list, index) in item.description1" :key="'description1' + index">
              {{ list.text }}
              </li>
            </ul>
          </div>
        </div>
    </section>

  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      fields: {
        title: null,
        title1: null,
        description: null,
        description_image: null
      },
      slices: []
    };
  },
  methods: {
    async getContent(){
      let data = await this.$prismic.client.getSingle('home');
      // console.log(data);
      this.slices = data.data.body;
      this.fields.title = data.data.title[0].text;
      this.fields.description = data.data.description[0].text;
      this.fields.description_image = data.data.description_image.url;
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
