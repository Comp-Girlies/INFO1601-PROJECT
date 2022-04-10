//This js file is to manage modal functionality




  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    var instances = M.Modal.init(elems, options);
  });

 

//    var instance = M.Modal.getInstance(elem);

  async function getAnimeInfo(id){
    try{
      console.log(`ID: ${id}`);
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
  // async function showDetails(AnimeData){
  //   const modalhtml = document.querySelector('#modal1');
  //   const modal = M.Modal.init(modalhtml);// get a modal object from materialize
  //   console.log(AnimeData);
   
  //   modalhtml.innerHTML = `
  //           <div id="modaltest" class="modal-content">
  //             <div class="row">
  //               <div class="col s4">
    
  //                 <img src="${AnimeData.data.images.jpg.image_url}" style="display:inline-block;"/>
  //                 <h5>${AnimeData.data.title}</h5>
                  
  //               </div>
  //               <div class="col s8">
                
  //                 <iframe width="400" height="200" src="${AnimeData.data.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  //               </div>
  //             </div>
  //             <h5>Synopsis:</h5>
  //             <p>${AnimeData.data.synopsis}</p>
    
  //             <br><br><br>
  //             <h5>Genres: ${AnimeData.data.genres[1]},${AnimeData.data.genres[2]}</h5>
  //             <h5>Rating: ${AnimeData.data.score} / 10</h5>
  //             <h5>Number of Episodes: ${AnimeData.data.epsiodes}</h5>
  //           </div>
  //           <div class="modal-footer">
  //               <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
  //           </div>
  //      `
  
  //   modal.open();//open the modal
  
  //  }

  
  async function showDetails(AnimeData){
    const modalhtml = document.querySelector('#modal1');
    const modal = M.Modal.init(modalhtml);// get a modal object from materialize
    console.log(AnimeData);
   
    modalhtml.innerHTML = `
            <div id="modaltest" class="modal-content">
              <div class="tab2">
              <button class="tablinks active" onclick="openInfo(event, 'anime_overview')">Anime Overview</button>
              <button class="tablinks" onclick="openInfo(event, 'synopsis')">Synopsis</button>
              <button class="tablinks" onclick="openInfo(event, 'other_info')">Other Info</button>
              </div>
          
              <div id="anime_overview" class="tabcontent" style="display: block;">
                <div class="row">
                  <div class="col s4">
                    <img src="${AnimeData.data.images.jpg.image_url}" style="display:inline-block;"/>
                    <h5>${AnimeData.data.title}</h5>     
                  </div>
                  <div class="col s8">   
                      <iframe width="400" height="200" src="${AnimeData.data.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
               </div>

              </div>
          
              <div id="synopsis" class="tabcontent">
                <h5>Synopsis:</h5>
                <p3>${AnimeData.data.synopsis}</p3>

              </div>
          
              <div id="other_info" class="tabcontent">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
            </div>
              </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>

       `
  
    modal.open();//open the modal
  
   }

   //
   function openInfo(evt, view) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(view).style.display = "block";
    evt.currentTarget.className += " active";
    }