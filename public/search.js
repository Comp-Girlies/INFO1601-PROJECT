let api_url = "https://api.jikan.moe/v4";
let query = "NULL";



//function pulls text from search bar and stores it in variable query.
    //launches get search data


// reads text entered in search
var anime_key = document.getElementById("search");
var anime_key2 = document.getElementById("search2");
var anime_key3 = document.getElementById("search3");
//read keys entered in search
var single_key = document.getElementById("search");
var single_key2 = document.getElementById("search2");
var single_key3 = document.getElementById("search3");
//search button?
//var but =document.getElementById('sb');

//listens for text entered by user
single_key.addEventListener("keyup", searchFn(single_key));
single_key2.addEventListener("keyup", searchFn2(single_key2));
single_key3.addEventListener("keyup", searchFn3(single_key3));
//listen for enter button to initialize search query
anime_key.addEventListener('keyup',searchFn);
anime_key2.addEventListener('keyup',searchFn2);
anime_key3.addEventListener('keyup',searchFn3);
//Debate to remove button?
//click event listener for button
//but.addEventListener('click',searchFn);

function searchFn(single_key){
    console.log(anime_key.value);
    if (single_key.key === 'Enter') {
        query = anime_key.value;
        getAnimeData(query);
    }
}

function searchFn2(single_key2){
    console.log(anime_key2.value);
    if (single_key2.key === 'Enter') {
        query = anime_key2.value;
        getAnimeData(query);
    }
}

function searchFn3(single_key3){
    console.log(anime_key3.value);
    if (single_key3.key === 'Enter') {
        query = anime_key3.value;
        getAnimeData(query);
    }
}


// use search info to get data from api

async function getAnimeData(query){
    try{
      let response = await fetch(`${api_url}/anime?q=${query}&page=1`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      displayAnimeData(result);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


//display anime search data

function displayAnimeData(aniData){
    let result = document.querySelector('#search_result');
    console.log(result);
    console.log(aniData.data.length);

    if (aniData.data.length === 0){
        let html = '';

        html += `
            <h1>No Results Found.</h1>
            `
        
        result.innerHTML = html;//add html string to DOM
    }
    else{
            //add html code inside of result
        let html = '';// create html string

        for(i=0;i<aniData.data.length;i++){
            //build html string
            html += `
            <div>
            <img src="${aniData.data[i].images.jpg.image_url}" alt="${aniData.data[i].title} Image"></img>
            </div>
            <div>
                <h5>${aniData.data[i].title}</h5>
            </div>
            `
        }

        result.innerHTML = html;//add html string to DOM
    }
    
}


