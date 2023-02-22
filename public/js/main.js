// const { json } = require("express");

const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name')


const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

if(cityVal===""){
    city_name.innerText = "write the name "

}else{
    try{

        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},{state code},{country code}&limit={limit}&appid={API key}`
        const response= await fetch(url)
        let data = await response.json()
        console.log(data)
    }catch{
        city_name.innerText=`plz enter the proper name`
    }
   

}

}

submitBtn.addEventListener('click',getInfo)