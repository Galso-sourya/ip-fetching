const lookupBtn=document.querySelector(".lookup-btn");
const ipDisplay=document.querySelector(".ip-display");
const locationDisplay=document.querySelector(".location-display");
const geoDisplay=document.querySelector(".geo-display");
const loader=document.querySelector(".loader-container");
const details=document.querySelector(".details");
lookupBtn.addEventListener("click",()=>{
    loader.style.display="flex";
    //it is required as it takes time to load. as it is coming from a server
    details.style.display="none";
    axios.get("https://ipapi.co/json/").then(response=>{
        loader.style.display="none";
        details.style.display="block";
        ipDisplay.textContent=`ip:${response.data.ip}`;
        locationDisplay.textContent=`location:${response.data.city},${response.data.region},
        ${response.data.country_name},`;
        geoDisplay.textContent=`geo-location:${response.data.latitude},${response.data.longitude}`;
        //console.log(response)
    });
});
