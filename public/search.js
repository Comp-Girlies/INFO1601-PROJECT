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
      let mql = window.matchMedia('(max-width: 450px)');
      if( (mql.matches) === true){
          // to print 2 tiles per row.
          displayAnimeData2(result);// 3. Do something with the data 
      }

      else{
          // 4 tiles per row
          displayAnimeData(result);// 3. Do something with the data
      }
      displayAnimeData(result);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function displayAnimeData(AnimeData){
    let result = document.querySelector('#search_result');
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>
                </div>
                </center>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}


function displayAnimeData2(AnimeData){
    let result = document.querySelector('#search_result');
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

            let sym_rating = printRating(AnimeData.data[i].score);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1} ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (AnimeData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                            <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>
                </div>
                </center>
                `

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

    }
}



