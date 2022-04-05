var image;

function randImg() {

    let choice = Math.floor((Math.random() * 5) + 1);
    image = `chibi_img/image${choice}.jpg`;
    printImage(image);

 
}

function printImage(image){
    let result = document.querySelector('#random');
    console.log(result);
    //add html code inside of result
    let html = '';// create html string
        //build html string
        html += `
        
        <img id="random2" src="${image}" alt="">

        `
    
    
    result.innerHTML = html;//add html string to DOM
}

randImg();