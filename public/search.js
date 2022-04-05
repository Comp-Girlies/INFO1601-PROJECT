let api_url = "https://api.jikan.moe/v4";




//function pulls text from search bar and stores it in variable query.
    //launches get search data

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

//Manga Search
//function pulls text from search bar and stores it in variable query.
    //launches get search data

async function getMangaData(query){
    try{
      let response = await fetch(`${api_url}/manga?q=${query}&page=1`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      displayMangaData(result);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


//display search data

function displayMangaData(mangaData){
    let result = document.querySelector('#search_result');
    console.log(result);
    console.log(mangaData.data.length);
    //add html code inside of result
    let html = '';// create html string

        for(i=0;i<mangaData.data.length;i++){
            //build html string
            html += `
            <div>
            <img src="${mangaData.data[i].images.jpg.image_url}" alt="${mangaData.data[i].title} Image"></img>
            </div>
            <div>
                <h5>${mangaData.data[i].title}</h5>
            </div>
            `
        
        }
    result.innerHTML = html;//add html string to DOM
}


// temporary input for search data.
let query = "shingeki no kyojin";
getMangaData(query);