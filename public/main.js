let server ="https://api.jikan.moe/v4/anime/1/characters";
let server3 ="https://api.jikan.moe/v4/anime/55/characters";
// let server2 = 'https://jsonplaceholder.typicode.com/todos/1'; // sample api(only use for testing)
let server4 = "https://api.jikan.moe/v4/anime/";


////////////////////////////////////////////////////////////////////////////////////////////////////


async function getTopAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/anime`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);

      let mql = window.matchMedia('(max-width: 600px)');
      console.log(mql.matches);
      
      if( (mql.matches) === true){
          // to print 2 tiles per row.
          printTopAnime2(result,location);// 3. Do something with the data
      }

      else{
          // 4 tiles per row
        printTopAnime(result,location);// 3. Do something with the data
      }

      
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


 function printTopAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

        // if (i ===AnimeData.data.length-1){
            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
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
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
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
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
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

function printTopAnime2(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<AnimeData.data.length){

        // if (i ===AnimeData.data.length-1){
            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
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
                            <h5>#${AnimeData.data[i].rank}  ${AnimeData.data[i].title}</h5>
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

//getData2(server,'#image');
//getData2(server3,'#image2');
//getData3("#top");

async function getTrendingAnime(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/seasons/now`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printTrendingAnime(result,location);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function printTrendingAnime(AnimeData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    for(i=0;i<AnimeData.data.length;i = i+1){

            let sym_rating = printRating(AnimeData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <div class="row">
                <div class=" col s6 m4 l3 offset-s0 m0 l0">
                    <div class="section"> 
                        <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                        <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
                        <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
            </div>`

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


