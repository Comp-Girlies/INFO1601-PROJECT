//This js file is to manage modal functionality


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

//    var instance = M.Modal.getInstance(elem);

  async function getAnimeInfo(id){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      console.log(result);
      showDetails(result);
    //   let mql = window.matchMedia('(max-width: 450px)');
    //   console.log(mql.matches);
      
    //   if( (mql.matches) === true){
    //       // to print 2 tiles per row.
    //       showDetails(result);// 3. Do something with the data 
    //   }

    //   else{
    //       // 4 tiles per row
    //     // 3. Do something with the data
    //   }

      
    
   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

//  async function showDetails(AnimeData){
//     const modalhtml = document.querySelector('#modal1');
//     const modal = M.Modal.init(modalhtml);// get a modal object from materialize
  
   
    // modalhtml.innerHTML = `
    //     <div>
    //         <center>
    //         <div class="row">
    //             <div class="col s4">

    //             <img src="https://cdn.myanimelist.net/images/anime/5/17407.jpg" style="display:inline-block;"/>
    //             <h5>Naruto: Shippuuden</h5>
                
    //             </div>
    //             <div class="col s8">
                
    //             <iframe width="560" height="315" src="https://www.youtube.com/embed/zVgKnfN9i34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //         </div>
    //         </center>
    //     <br><br><br>

    //     <h5>Synopsis:</h5>
    //     <p></p>

    //     <br><br><br>
    //     <h5>Genres: Action, Adventure, Fantasy</h5>
    //     <h5>Rating: 8.24 / 10</h5>
    //     <h5>Number of Episodes: 500</h5>
    // </div>
    // <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    // `;
  
//     modal.open();//open the modal
  
//   }



///////////////////////////////////////////////////////////////////
  async function showDetails(AnimeData){
    const modalhtml = document.querySelector('#modal1');
    const modal = M.Modal.init(modalhtml);// get a modal object from materialize
  
   
    modalhtml.innerHTML = `
            <div class="modal-content">
                <h4 style="color: black;">Modal Header</h4>
                <p style="color: black;">A bunch of text</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
       `
  
    modal.open();//open the modal
  
   }

// // Sample function
//   async function showDetails(gameId){
//     const modalhtml = document.querySelector('#modal1');
//     const modal = M.Modal.init(modalhtml);// get a modal object from materialize
  
//     const game = await getGame(gameId); // retrieve the game
//     const cover_url = await getGameCover(game.id)// retrieve game cover if it exists 
   
//     modalhtml.innerHTML = `
//       <div class="modal-content">
//         <h4>${game.name}</h4>
//         <img class="materialboxed" src="${cover_url}">
//         <p>${game.summary}</p>
//       </div>
//       <div class="modal-footer">
//         <a href="${game.url}" target="_blank" class="modal-close waves-effect waves-green btn-flat">
//           View on IGDB
//         </a>
//         <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
//       </div>
//     `;
  
//     modal.open();//open the modal
  
//   }
  
