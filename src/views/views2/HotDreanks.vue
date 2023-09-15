<template>
    <h3>نوشیدنی های گرم</h3>
    <div>
        <ul>
           <div><li>اسپرسو</li><p>40</p></div> 
            <div><li>آمریکانو(اسپرسو + اب جوش)</li><p>50</p></div>
            <div><li>لته(اسپرسو + فوم شیر)</li><p>60</p></div>
            <div><li>قهوه ترک</li><p>40</p></div>
            <div><li>کاپوچینو(کف شیر + اسپرسو)</li><p>55</p></div>
            <div><li>موکا(سس شکلات + کف شیر + اسپرسو)</li><p>60</p></div>
            <div><li>کارامل ماکیاتو(کارامل + کف شیر + اسپرسو)</li><p>60</p></div>
            <!-- <div><li>آفوگانو</li><p>45</p></div> -->
            <div><li>هات چاکلت</li><p>50</p></div>
            <div><li>وایت چاکلت</li><p>50</p></div>
            <div><li>هات پینک(شیر + ثعلب + توت‌فرنگی)</li><p>55</p></div>
            <div><li>هات چاکلت فندوق دارچین</li><p>55</p></div>
            <div><li>ثعلب زعفران</li><p>65</p></div>
            <div><li>ثعلب وانیلی</li><p>55</p></div>
            <div><li>هات پسته ویژه</li><p>65</p></div>
            <div><li>چای ماسالا</li><p>50</p></div>
            <div><li>چای سیاه</li><p>30</p></div>


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
    border-bottom:solid 1px rgb(224, 129, 129) ;
}
ul div li{
    display:flex;
    justify-content: end;
    align-items: end;
    width: 50%;
    margin: 0px 0 0 100px;
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