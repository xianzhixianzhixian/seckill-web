<template>
  <div class="hello">
      <table border="1">
        <thead>
            <tr>
              <td>秒杀咨询</td>
              <td>发布时间</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="news in newsList">
              <td>{{news.message}}</td>
              <td>{{news.ctime}}</td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'SeckilNews',
  data () {
    return {
      newsList: [{"message":"白菜限时秒杀","ctime":"20180605"}]
    }
  },
  created () {
    this.$http.get('http://localhost:8000/listnewsData/').then((response) => {
      this.newsList = response.data
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
