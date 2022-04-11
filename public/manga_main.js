
async function getTopManga(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/manga`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printTopManga(result,location); 
      let mql = window.matchMedia('(max-width: 1190px)');
      console.log(mql.matches);
      let mql2 = window.matchMedia('(max-width: 855px)');
      console.log(mql2.matches);
      
      if( ((mql.matches) === true) && (mql2.matches === false)){
          // to print 3 tiles per row.
          printTopManga2(result,location);// 3. Do something with the data 
      }

      else{
          // 4 tiles per row
        printTopManga(result,location);// 3. Do something with the data
      }

      
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


 function printTopManga(MangaData,location){
    let result = document.querySelector(location);
    console.log(result);
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
               
                        <img onclick = "getAnimeInfo(${MangaData.data[i].mal_id})" src="${MangaData.data[i].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;"> #${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getAnimeInfo(${MangaData.data[i+1].mal_id})" src="${MangaData.data[i+1].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+1].rank}  ${MangaData.data[i+1].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+1].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getAnimeInfo(${MangaData.data[i+2].mal_id})" src="${MangaData.data[i+2].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+2].rank}  ${MangaData.data[i+2].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+2].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getAnimeInfo(${MangaData.data[i+3].mal_id})" src="${MangaData.data[i+3].images.jpg.image_url}" style="display: block; margin-left: auto; margin-right: auto;"/>
                        <h5 style="text-align:center;">#${MangaData.data[i+3].rank}  ${MangaData.data[i+3].title}</h5>
                        <h5 style="text-align:center;">Rating: ${MangaData.data[i+3].score}/10  ${sym_rating}</h5>
                </div>
                
            </div>    
                `
    }
    result.innerHTML = html;//add html string to DOM
}

function printTopManga2(MangaData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    for(let i = 0; i < MangaData.data.length-1; i = i+3){

            let sym_rating = printRating(MangaData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <div class="flex">
                <div class="sections"> 
                        <img onclick = "getAnimeInfo(${MangaData.data[i].mal_id})" src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                        <h5 >#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                        <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getAnimeInfo(${MangaData.data[i+1].mal_id})" src="${MangaData.data[i+1].images.jpg.image_url}" style="display:inline-block;"/>
                        <h5 >#${MangaData.data[i+1].rank}  ${MangaData.data[i+1].title}</h5>
                        <h5>Rating: ${MangaData.data[i+1].score}/10  ${sym_rating}</h5>
                </div>
                <div class="sections"> 
                        <img onclick = "getAnimeInfo(${MangaData.data[i+2].mal_id})" src="${MangaData.data[i+2].images.jpg.image_url}" style="display:inline-block;"/>
                        <h5 >#${MangaData.data[i+2].rank}  ${MangaData.data[i+2].title}</h5>
                        <h5>Rating: ${MangaData.data[i+2].score}/10  ${sym_rating}</h5>
                </div>              
            </div>    
                `
    }
    result.innerHTML = html;//add html string to DOM
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


// getTopAnime('#top_anime');
// getTrendingAnime('#trending_anime');
getTopManga('#top_manga');
