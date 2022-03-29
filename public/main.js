let server ="https://api.jikan.moe/v4/anime/1/characters";
let server2 = 'https://jsonplaceholder.typicode.com/todos/1';

async function getData(url){
    try{
      let response = await fetch(url);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printFunction(result);// 3. Do something with the data
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function printFunction(returnData){
    let result = document.querySelector('#result');
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    record = returnData;
        //build html string
        html += `<tr id="test">
          <td>${record.data[0].character.name}</td>
          <td>${record.data[0].character.name}</td>
          
          <td><a href="NULL" onclick="getData(NULL, drawDetails)" >View More Details</a></td>    
        </tr>`
    
    
    result.innerHTML = html;//add html string to DOM
}

getData(server);


async function getData2(url){
    try{
      let response = await fetch(url);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      printFunction2(result);// 3. Do something with the data
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

function printFunction2(returnData2){
    let result = document.querySelector('#image');
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
    record2 = returnData2;
        //build html string
        html += `
          
        <div class="card-image" >
                <img src="${record2.data[0].character.images.jpg.image_url}" alt="${record2.data[0].character.name} Image"></img>
         </div>`
    
    
    result.innerHTML = html;//add html string to DOM
}

getData2(server);