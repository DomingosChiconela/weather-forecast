const key ="coloque a sua chave de API ";


//I need to add country
function SetDados(dados){
    document.querySelector('h2').innerHTML = "Tempo em "+dados.name
    document.getElementById('graus').innerHTML = Math.floor(dados.main.temp) +"˚C"  
    document.getElementById('prev-descri').innerHTML =dados.weather[0].description
    document.getElementById('umidade').innerHTML = dados.main.humidity +"%"
    document.getElementById('icon').src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function GetCity(city){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt`)
    .then(response=> response.json())
    console.log(dados)
    SetDados(dados)
}

const button = document.getElementById("butao");
button.addEventListener("click",function(){
   const city = document.querySelector(".inpu").value; 
    GetCity(city)
   
});
