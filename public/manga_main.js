
async function getTopManga(location){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/top/manga`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);

      let mql = window.matchMedia('(max-width: 450px)');
      console.log(mql.matches);
      
      if( (mql.matches) === true){
          // to print 2 tiles per row.
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

    i=0;
    while(i<MangaData.data.length){

            let sym_rating = printRating(MangaData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img onclick = "getAnimeInfo(${MangaData.data[i].mal_id})" src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5 >#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                            <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (MangaData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                            <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (MangaData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                            <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM
                    
                }

                i = i + 1;

                if( i >= (MangaData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                            <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
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

function printTopManga2(MangaData,location){
    let result = document.querySelector(location);
    console.log(result);
    //add html code inside of result
    let html = '';// create html string

    i=0;
    while(i<MangaData.data.length){

            let sym_rating = printRating(MangaData.data[i].score);
            console.log(sym_rating);
            //build html string
            html += `
            <center>
            <div class="row">
                <div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                            <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
                    </div>
                </div>`

                result.innerHTML = html;//add html string to DOM

                i = i + 1;

                if( i >= (MangaData.data.length -1)){
                    html += `</div>
                    </center>`

                    result.innerHTML = html;//add html string to DOM
                }
                else{
                    html += `<div class="col s6 l3">
                    <div class="section"> 
                            <img  src="${MangaData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
                            <h5>#${MangaData.data[i].rank}  ${MangaData.data[i].title}</h5>
                            <h5>Rating: ${MangaData.data[i].score}/10  ${sym_rating}</h5>
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


// async function getTrendingAnime(location){
//     try{
//       let response = await fetch(`https://api.jikan.moe/v4/seasons/now`);//1. Send http request and get response
//       let result = await response.json();//2. Get data from response;
//       console.log(result);
//       let mql = window.matchMedia('(max-width: 450px)');
//       if( (mql.matches) === true){
//         // to print 2 tiles per row.
//         printTrendingAnime2(result,location);// 3. Do something with the data 
//     }

//     else{
//         // 4 tiles per row
//         printTrendingAnime(result,location);// 3. Do something with the data
//     }
      
    
//    }catch(e){
//        console.log(e);//catch and log any errors
//    }
//  }


// function printTrendingAnime(AnimeData,location){
//     let result = document.querySelector(location);
//     console.log(result);
//     //add html code inside of result
//     let html = '';// create html string

//     i=0;
//     while(i<AnimeData.data.length){

//             let sym_rating = printRating(AnimeData.data[i].score);
//             console.log(sym_rating);
//             //build html string
//             html += `
//             <center>
//             <div class="row">
//                 <div class="col s6 l3">
//                     <div class="section"> 
//                             <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
//                             <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
//                             <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
//                     </div>
//                 </div>`

//                 result.innerHTML = html;//add html string to DOM

//                 i = i + 1;

//                 if( i >= (AnimeData.data.length -1)){
//                     html += `</div>
//                     </center>`

//                     result.innerHTML = html;//add html string to DOM
//                 }
//                 else{
//                     html += `<div class="col s6 l3">
//                     <div class="section"> 
//                             <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
//                             <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
//                             <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
//                     </div>
//                 </div>`

//                 result.innerHTML = html;//add html string to DOM
                    
//                 }

//                 i = i + 1;

//                 if( i >= (AnimeData.data.length -1)){
//                     html += `</div>
//                     </center>`

//                     result.innerHTML = html;//add html string to DOM
//                 }
//                 else{
//                     html += `<div class="col s6 l3">
//                     <div class="section"> 
//                             <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
//                             <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
//                             <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
//                     </div>
//                 </div>`

//                 result.innerHTML = html;//add html string to DOM
                    
//                 }

//                 i = i + 1;

//                 if( i >= (AnimeData.data.length -1)){
//                     html += `</div>
//                     </center>`

//                     result.innerHTML = html;//add html string to DOM
//                 }
//                 else{
//                     html += `<div class="col s6 l3">
//                     <div class="section"> 
//                             <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
//                             <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
//                             <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
//                     </div>
//                 </div>
//                 </div>
//                 </center>
//                 `

//                 result.innerHTML = html;//add html string to DOM
                    
//                 }

//                 i = i + 1;

//     }
// }


// function printTrendingAnime2(AnimeData,location){
//     let result = document.querySelector(location);
//     console.log(result);
//     //add html code inside of result
//     let html = '';// create html string

//     i=0;
//     while(i<AnimeData.data.length){

//             let sym_rating = printRating(AnimeData.data[i].score);
//             console.log(sym_rating);
//             //build html string
//             html += `
//             <center>
//             <div class="row">
//                 <div class="col s6 l3">
//                     <div class="section"> 
//                             <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
//                             <h5>#${i+1} ${AnimeData.data[i].title}</h5>
//                             <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
//                     </div>
//                 </div>`

//                 result.innerHTML = html;//add html string to DOM

//                 i = i + 1;

//                 if( i >= (AnimeData.data.length -1)){
//                     html += `</div>
//                     </center>`

//                     result.innerHTML = html;//add html string to DOM
//                 }
//                 else{
//                     html += `<div class="col s6 l3">
//                     <div class="section"> 
//                             <img  src="${AnimeData.data[i].images.jpg.image_url}" style="display:inline-block;"/>
//                             <h5>#${i+1}  ${AnimeData.data[i].title}</h5>
//                             <h5>Rating: ${AnimeData.data[i].score}/10  ${sym_rating}</h5>
//                     </div>
//                 </div>
//                 </div>
//                 </center>
//                 `

//                 result.innerHTML = html;//add html string to DOM
                    
//                 }

//                 i = i + 1;

//     }
// }


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