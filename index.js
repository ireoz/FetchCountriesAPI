
function fetchCountries(){

     const promise = new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
        xhr.send();
        xhr.onload = function() {
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.response))
            }
            else reject("something went wrong fetching data"); 
            }
        })

        promise.then(fileContent => {
            let element = document.querySelector('.container');
                    fileContent.forEach(country => {
                    let countryCard = document.createElement('div')
                    let imageCard = document.createElement('img');
                     countryCard.innerHTML = country.name.official;
                     imageCard.setAttribute('src', country.flags.png);
                     element.appendChild(countryCard);
                     element.appendChild(imageCard);
            })
        }).catch(value => alert(value));

    }


