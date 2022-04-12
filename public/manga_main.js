let mql = window.matchMedia('(max-width: 1190px)');
let mql2 = window.matchMedia('(max-width: 855px)');

async function getTopManga(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/manga`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      
      if( ((mql.matches) === true) && (mql2.matches === false)){
          // to print 3 tiles per row.
          print_manga2(result,location);// 3. Do something with the data 
      }

      else{
          // 4 tiles per row
        print_manga(result,location);// 3. Do something with the data
      }    
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


 function print_manga(MangaData,location){
    let result = document.querySelector(location);
    //add html code inside of result
    let html = '';// create html string
    for(let i = 0; i < MangaData.data.length-1; i = i+4){

            let sym_rating = printRating(MangaData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
             <br>
            <div class="flex">
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i].mal_id})" src="${MangaData.data[i].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;"> #${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i+1].mal_id})" src="${MangaData.data[i+1].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+1].rank}  ${MangaData.data[i+1].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+1].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i+2].mal_id})" src="${MangaData.data[i+2].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+2].rank}  ${MangaData.data[i+2].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+2].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i+3].mal_id})" src="${MangaData.data[i+3].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+3].rank}  ${MangaData.data[i+3].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+3].score}/10  ${sym_rating}</h5>
                </div>
                
            </div>    
                `
    }
    result.innerHTML = html;//add html string to DOM
}

function print_manga2(MangaData,location){
    let result = document.querySelector(location);
    
    //add html code inside of result
    let html = '';// create html string
    for(let i = 0; i < MangaData.data.length-1; i = i+3){

            let sym_rating = printRating(MangaData.data[i].score);
            //build html string
            html += `
            <div class="flex">
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i].mal_id})" src="${MangaData.data[i].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i+1].mal_id})" src="${MangaData.data[i+1].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+1].rank}  ${MangaData.data[i+1].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+1].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getMangaInfo(${MangaData.data[i+2].mal_id})" src="${MangaData.data[i+2].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+2].rank}  ${MangaData.data[i+2].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+2].score}/10  ${sym_rating}</h5>
                </div>              
            </div>    
                `
    }
    result.innerHTML = html;//add html string to DOM
}

function getMangaInfo(){
    
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


getTopManga('#top_manga');

/////////////////////////////////////////////////////////////////////
//Search Manga Functions
////////////////////////////////////////////////////////////////////

let api_url = "https://api.jikan.moe/v4";
let query2 = "NULL";

// manga search word
let manga_keys = document.getElementById("search4");
let manga_keys2 = document.getElementById("search5");
let manga_keys3 = document.getElementById("search6");


// manga search letter
let single_manga_key = document.getElementById("search4");
let single_manga_key2 = document.getElementById("search5");
let single_manga_key3 = document.getElementById("search6");

//Manga Event Listeners
single_manga_key.addEventListener("keyup", manga_searchFn(single_manga_key));
single_manga_key2.addEventListener("keyup", manga_searchFn2(single_manga_key2));
single_manga_key3.addEventListener("keyup", manga_searchFn3(single_manga_key3));

manga_keys.addEventListener('keyup',manga_searchFn);
manga_keys2.addEventListener('keyup',manga_searchFn2);
manga_keys3.addEventListener('keyup',manga_searchFn3);

function manga_searchFn(single_manga_key){
    if (single_manga_key.key === 'Enter') {
        query2 = manga_keys.value;
        getMangaData(query2);
    }
}

function manga_searchFn2(single_manga_key2){
    if (single_manga_key2.key === 'Enter') {
        query2 = manga_keys2.value;
        console.log(query2);
        getMangaData(query2);
    }
}

function manga_searchFn3(single_manga_key3){
    if (single_manga_key3.key === 'Enter') {
        query2 = manga_keys3.value;
        console.log(query2);
        getMangaData(query2);
    }
}

async function getMangaData(query2){
    try{
      let response = await fetch(`${api_url}/manga?q=${query2}&page=1`);// Send http request and get response
      let result = await response.json();// Get data from response;
      console.log(result);

      let location = "#search_result2";

    if( ((mql.matches) === true) && (mql2.matches === false)){
        // to print 3 tiles per row.
        print_manga2(result,location);// Do something with the data 
    }

    else{
        // 4 tiles per row
      print_manga(result,location);// Do something with the data
    }
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }
