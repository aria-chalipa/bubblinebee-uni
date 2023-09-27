<template>
  <HeaderCOP />
  <nav>
    <router-link to="/" class="inline">خانه</router-link> |
    <router-link to="/menu" class="inline">منو</router-link>
  </nav>
  <router-view/>
  <br>
  <br>
  <br>

  <hr>

  <div>
    <FooterCOP />
  </div>
</template>


<script>
import HeaderCOP from './components/HeaderCop.vue'
import FooterCOP from './components/FooterCOP.vue'

export default{
  components:{
    HeaderCOP,
    FooterCOP
  }
}
</script>

<style>
@import "../public/style.css";
#app {
  font-family: vazir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/FO70303-1.jpg');
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline;
}
.inline{
  display: inline;
}

nav a.router-link-exact-active {
  color:rgb(224, 129, 129);
}
</style>
