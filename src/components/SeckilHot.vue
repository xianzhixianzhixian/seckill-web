<template>
  <div class="hello">
   <table border="1">
    <tr>
      <td>商品名称</td>
      <td>商品热度</td>
    </tr>
     <tr v-for="info in infolist">
       <td>{{info.Productname}}</td>
       <td>{{info.Hotvalue}}</td>
     </tr>
   </table>
  </div>
</template>

<script>
export default {
  name: 'SeckilHot',
  data() {
    return {
      infolist: [{"Productname": "测试商品名称", "Hotvalue": "45"}]
    }
  }, created() {
    this.$http.get('http://localhost:7082/listHotInfo').then((response) => {
      this.infolist = response.data
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
