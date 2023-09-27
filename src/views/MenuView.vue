<template>
  <div>
    <router-link to="/coffe">قهوه</router-link>
    <router-link to="/coldCoffe">قهوه‌ی سرد</router-link>
    <router-link to="/hot">نوشیدنی های گرم</router-link>
    <router-link to="/cold"> نوشیدنی های سرد</router-link>
    <router-link to="/shake"> شیک</router-link>
    <router-link to="/cake"> کیک و بستنی</router-link>
    <router-link to="/breakfast"> صبحانه</router-link>
    <router-link to="/food">وعده های غذایی</router-link>




  </div>
  <router-view/>
</template>

<style >
div a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  margin: 15px;
  font-style: none;
  text-decoration: none;
}

div a.router-link-exact-active {
  color:rgb(224, 129, 129);

}

h3{
    text-align: center;
    font-weight: bold;
    margin: 20px 0 0 0;
}
div ul{
    margin: 20px 10px;
}
ul div{
    display: block;
    margin: 15px 0;
    
}
ul div li{
    display:flex;
    justify-content: end;
    align-items: end;
    width: 50%;
    margin: 0px 0 0 140px;
    top: 35px;
    position: relative;
}
div ul li{
    list-style-type: none ;
    font-weight: 700;
    padding: 10px 0;
    text-align: end;
    
}
ul p{
    display: flex;
    justify-content: start;
    align-items: start;
    font-weight: 400;
    font-size: 18px;
    margin: 5px;
    padding: 0;
    width: 50%;
}

</style>
