const countryInputt=document.getElementById('inputCountry')
const searchBtn=document.getElementById('search')
const countryNAme=document.getElementById('countryName')
const totalCase=document.getElementById('totalCase')
const totalDeath=document.getElementById('totalDeaths')


searchBtn.addEventListener('click',async()=>{
  let countryName=(countryInputt.value)
  let response= await fetch('https://covid-api.mmediagroup.fr/v1/cases?country='+countryName)
        response= await response.json()
        response=response.All
        console.log(response)
       countryName.innerHTML=response.country
       totalCase.innerHTML=response.confirmed
       totalDeath.innerHTML=response.deaths
})
