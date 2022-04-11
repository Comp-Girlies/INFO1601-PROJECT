let api_url = "https://api.jikan.moe/v4";
let query = "NULL";

let mql = window.matchMedia('(max-width: 1190px)');
let mql2 = window.matchMedia('(max-width: 855px)');

// reads text entered in search
var anime_key = document.getElementById("search");
var anime_key2 = document.getElementById("search2");
var anime_key3 = document.getElementById("search3");

//read keys entered in search
var single_key = document.getElementById("search");
var single_key2 = document.getElementById("search2");
var single_key3 = document.getElementById("search3");

//listens for text entered by user
single_key.addEventListener("keyup", searchFn(single_key));
single_key2.addEventListener("keyup", searchFn2(single_key2));
single_key3.addEventListener("keyup", searchFn3(single_key3));

//listen for enter button to initialize search query
anime_key.addEventListener('keyup',searchFn);
anime_key2.addEventListener('keyup',searchFn2);
anime_key3.addEventListener('keyup',searchFn3);

//Functions

async function getTopAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/anime`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;

    if( ((mql.matches) === true) && (mql2.matches === false)){
        // to print 3 tiles per row.
        printTopanime2(result,location); 
    }

    else{
        // 4 tiles per row
        printTopanime(result,location);// Do something with the data
    }
 
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }



async function getTrendingAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/seasons/now`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;

      if( ((mql.matches) === true) && (mql2.matches === false)){
        // to print 3 tiles per row.
        print_anime2(result,location); 
      }

      else{
        // 4 tiles per row
        print_anime(result,location);// Do something with the data
      }  
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

 async function getUpcomingAnime(location){
    try{
        let response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);//1. Send http request and get response
        let result = await response.json();//2. Get data from response;
  
        if( ((mql.matches) === true) && (mql2.matches === false)){
          // to print 3 tiles per row.
          print_anime2(result,location); 
        }
  
        else{
          // 4 tiles per row
          print_anime(result,location);// Do something with the data
        }  
      
     }catch(e){
         console.log(e);//catch and log any errors
     }
}



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
      
      let location = '#search_result';

      if( ((mql.matches) === true) && (mql2.matches === false)){
        // to print 3 tiles per row.
        print_anime2(result,location); 
      }

      else{
        // 4 tiles per row
        print_anime(result,location);// Do something with the data
      }  
    
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


function print_anime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    for(let i = 0; i < AnimeData.data.length-1; i = i+4){

        let sym_rating = printRating(AnimeData.data[i].score);
        let sym_rating2 = printRating(AnimeData.data[i+1].score);
        let sym_rating3 = printRating(AnimeData.data[i+2].score);
        let sym_rating4 = printRating(AnimeData.data[i+3].score);

        //build html string
        html += `
            <br>
            <div class="flex">
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i].mal_id})" src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+1}  ${AnimeData.data[i].title}</h5>
                    <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+1].mal_id})" src="${AnimeData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+2}  ${AnimeData.data[i+1].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+1].score}/10  ${sym_rating2}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+2].mal_id})" src="${AnimeData.data[i+2].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+3}  ${AnimeData.data[i+2].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+2].score}/10  ${sym_rating3}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+3].mal_id})" src="${AnimeData.data[i+3].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+4}  ${AnimeData.data[i+3].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+3].score}/10  ${sym_rating4}</h5>      
                </div>
        
            </div>    
            `
                result.innerHTML = html;//add html string to DOM
    }
}


function print_anime2(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    for(let i = 0; i < AnimeData.data.length-1; i = i+4){

        let sym_rating = printRating(AnimeData.data[i].score);
        let sym_rating2 = printRating(AnimeData.data[i+1].score);
        let sym_rating3 = printRating(AnimeData.data[i+2].score);
        
        //build html string
        html += `
            <br>
            <div class="flex">
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i].mal_id})" src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+1}  ${AnimeData.data[i].title}</h5>
                    <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+1].mal_id})" src="${AnimeData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+2}  ${AnimeData.data[i+1].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+1].score}/10  ${sym_rating2}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+2].mal_id})" src="${AnimeData.data[i+2].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${i+3}  ${AnimeData.data[i+2].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+2].score}/10  ${sym_rating3}</h5>      
                </div>
            </div>    
            `

            result.innerHTML = html;//add html string to DOM

    }
}

function printTopanime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    for(let i = 0; i < AnimeData.data.length-1; i = i+4){

        let sym_rating = printRating(AnimeData.data[i].score);
        let sym_rating2 = printRating(AnimeData.data[i+1].score);
        let sym_rating3 = printRating(AnimeData.data[i+2].score);
        let sym_rating4 = printRating(AnimeData.data[i+3].score);

        //build html string
        html += `
            <br>
            <div class="flex">
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i].mal_id})" src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                    <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+1].mal_id})" src="${AnimeData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i+1].rank}  ${AnimeData.data[i+1].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+1].score}/10  ${sym_rating2}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+2].mal_id})" src="${AnimeData.data[i+2].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i+2].rank}  ${AnimeData.data[i+2].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+2].score}/10  ${sym_rating3}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+3].mal_id})" src="${AnimeData.data[i+3].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i+3].rank}  ${AnimeData.data[i+3].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+3].score}/10  ${sym_rating4}</h5>      
                </div>
        
            </div>    
            `
                result.innerHTML = html;//add html string to DOM
    }
}


function printTopanime2(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    for(let i = 0; i < AnimeData.data.length-1; i = i+4){

        let sym_rating = printRating(AnimeData.data[i].score);
        let sym_rating2 = printRating(AnimeData.data[i+1].score);
        let sym_rating3 = printRating(AnimeData.data[i+2].score);
        
        //build html string
        html += `
            <br>
            <div class="flex">
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i].mal_id})" src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
                    <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+1].mal_id})" src="${AnimeData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i+1].rank}  ${AnimeData.data[i+1].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+1].score}/10  ${sym_rating2}</h5>      
                </div>
                <div class="sections"> 
                    <img onclick = "getAnimeInfo(${AnimeData.data[i+2].mal_id})" src="${AnimeData.data[i+2].images.jpg.image_url}" style="display:inline-block;"/>
                    <h5 >#${AnimeData.data[i+2].rank}  ${AnimeData.data[i+2].title}</h5>
                    <h5>Rating: ${AnimeData.data[i+2].score}/10  ${sym_rating3}</h5>      
                </div>
            </div>    
            `

            result.innerHTML = html;//add html string to DOM

    }
}

function printRating(rating){

    let temp = rating;
    let sym_rating = "";
    let count = 0;

    while (temp > 0){

        if (temp >= 2){
            sym_rating = sym_rating + "★";
            temp = temp -2;
            count++;
        }
        else if (temp > 0 && temp < 2){
            sym_rating = sym_rating + "☆"; // insert no star symbol.
            temp = 0;
            count++;
            
        }

    }
    while(count < 5){
        sym_rating = sym_rating + "☆";
        count++;
    }
       
    return sym_rating;
}

getTopAnime('#top_anime');
getTrendingAnime('#trending_anime');
getUpcomingAnime('#upcoming_anime') ;



