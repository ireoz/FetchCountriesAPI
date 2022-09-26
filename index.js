
function fetchCountries(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
    xhr.send();
    xhr.onload = function() {
        if(xhr.status = 200){
            let countries = JSON.parse(xhr.response);
            let element = document.querySelector('.container');
            let img
            countries.forEach(country => {
                let countryCard = document.createElement('div');
                let imageCard = document.createElement('img');
                countryCard.innerHTML = country.name.official;
                imageCard.setAttribute('src', country.flags.png);
                // console.log(country.flags.png)
                element.appendChild(countryCard);
                element.appendChild(imageCard);

                

            })
        }
    }
    
   
}
