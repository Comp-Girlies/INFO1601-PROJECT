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

console.log(manga_keys.value);
console.log(single_manga_key.value);

function manga_searchFn(single_manga_key){
    if (single_manga_key.key === 'Enter') {
        query2 = manga_keys.value;
        console.log(query2);
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
      let response = await fetch(`${api_url}/manga?q=${query2}&page=1`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      displayMangaData(result);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }


//display search data

function displayMangaData(mangaData){
    let result = document.querySelector('#search_result2');
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
