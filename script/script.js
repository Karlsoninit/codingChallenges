const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => cities.push(...data))


// function findToMatch(word, cities) {
//     return cities.filter(place => {
//         const regex = new RegExp(word, 'gi');
//         return place.city.match(regex) || place.state.match(regex)
//     })
// }


// function displayMatches() {
//     const matchArray = findToMatch(this.value, cities);
//     console.log(matchArray)
//     const html = matchArray.map(el => {
//         return `<li>
//         <span class='name'>${el.city}, ${el.state}</span>
//         <span class='population'>${el.population}</span>
//         </li>`
//     }).join()
//     about.innerHTML = html;
// }


// const searchForm = document.querySelector('.search');
// const about = document.querySelector('.about');


// searchForm.addEventListener('change', displayMatches);
// searchForm.addEventListener('keyup', displayMatches)


const cities = []

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data))




function find(word, city) {
    return city.filter( el => {
        const regex =  new RegExp(word, 'gi')
        return el.city.match(regex) || el.state.match(regex)
    })
}

const about = document.querySelector('.about')

function draw() {
    console.log(this.value)
    const DrawInnerHtml = find(this.value, cities)
    console.log(DrawInnerHtml)
    DrawInnerHtml.map(el => {
        
        return about.innerHTML =
        `<li>${el.city} ${el.state} ${el.latitude}</li>`
    })
}


const search = document.querySelector('.search');


search.addEventListener('change' , draw);
search.addEventListener('keyup' , draw);


