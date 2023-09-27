<template>
    <h3>نوشیدنی های سرد</h3>
    <div>
        <ul>
            <div><li>لیموناد</li><p>50</p></div>
            <div><li>موهیتو</li><p>50</p></div>
            <div><li>بلو هاوایی</li><p>50</p></div>
          
        </ul>
    </div>
</template>


<style scoped>
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