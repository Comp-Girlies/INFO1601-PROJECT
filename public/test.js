async function test_data (location, id){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      print_test(result,location);// 3. Do something with the data
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

 function print_test(AnimeData,location){
    let result = document.querySelector(location);
    //add html code inside of result
    let html = '';// create html string
        //build html string
        html += `
        <h1>${AnimeData.data.title}</h1>
        
        `
    result.innerHTML = html;//add html string to DOM
}


function test2(id){
    console.log(id);
    test_data("test_case", id); 
}
