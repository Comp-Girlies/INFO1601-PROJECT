//This js file is to manage modal functionality

 async function getAnimeInfo(id){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      showAnimeDetails(result);

   }catch(e){
       console.log(e);//catch and log any errors
   }
 }
  
  async function showAnimeDetails(AnimeData){
    const modalhtml = document.querySelector('#modal1');
    const modal = M.Modal.init(modalhtml);// get a modal object from materialize
   
    modalhtml.innerHTML = `
            <div id="modaltest" class="modal-content" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;">
              <div class="tab2">
              <button id="tablink" class="tablinks active" onclick="openInfo(event, 'anime_overview')">Anime Overview</button>
              <button id="tablink" class="tablinks" onclick="openInfo(event, 'trailer')">Trailer</button>
              <button id="tablink" class="tablinks" onclick="openInfo(event, 'synopsis')">Synopsis</button>
              </div>
          
              <div id="anime_overview" class="tabcontent" style="display: block;">
                <div class="row">
                  <div class="col s12">
                    <h5>${AnimeData.data.title}</h5> 
                    <p>Japanese Title: ${AnimeData.data.title_japanese}<p> 
                    <p>Episode Number: ${AnimeData.data.episodes}<p>
                    <p>Duration: ${AnimeData.data.duration}<p> 
                    <p>Age Rating: ${AnimeData.data.rating}<p>
                    <p>Year: ${AnimeData.data.year}<p>
                    <p>Airing Status: ${AnimeData.data.status}<p>
                    <p>Aired From: ${AnimeData.data.aired.from}<p> 
                    <p>Aired Till: ${AnimeData.data.aired.to}<p> 
                    <p>Score: ${AnimeData.data.score} </p>
                    <p>Scored by: ${AnimeData.data.scored_by} </p>  
                    </div>
                    </div>
                    </div>

              <div id="trailer" class="tabcontent">
              <div style="height: 90%;">
              <iframe width="100%" height="100%" src="${AnimeData.data.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              </div>


              <div id="synopsis" class="tabcontent">
                <h5>Synopsis:</h5>
                <p3>${AnimeData.data.synopsis}</p3>
              </div>
          
            
              </div>

            <div id="modal-feet" class="modal-footer" >
                <a id="close" href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>

       `
  
    modal.open();//open the modal
  
   }



   async function getMangaInfo(id){
    try{
      let response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);//1. Send http request and get response
      let result = await response.json();//2. Get data from response;
      showMangaDetails(result);

   }catch(e){
       console.log(e);//catch and log any errors
   }
 }

 async function showMangaDetails(MangaData){
  const modalhtml = document.querySelector('#modal2');
  const modal = M.Modal.init(modalhtml);// get a modal object from materialize
 
  modalhtml.innerHTML = `
          <div id="modaltest" class="modal-content" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;">
            <div class="tab2">
            <button id="tablink" class="tablinks active" onclick="openInfo(event, 'manga_overview')">Manga Overview</button>
            <button id="tablink" class="tablinks" onclick="openInfo(event, 'synopsis2')">Synopsis</button>
            </div>
        
            <div id="manga_overview" class="tabcontent" style="display: block;">
              <div class="row">
                <div class="col s12">
                  <h5>${MangaData.data.title}</h5> 
                  <br>
                  <p>Japanese Title: ${MangaData.data.title_japanese} </p>  
                  <p>Number of Chapters: ${MangaData.data.chapters} </p>
                  <p>Number of Volumes: ${MangaData.data.volumes} </p>
                  <p>Publishing Status: ${MangaData.data.status} </p>
                  <p>Published From: ${MangaData.data.published.from} </p>
                  <p>Published To: ${MangaData.data.published.to} </p>
                  <p>Score: ${MangaData.data.score} </p>
                  <p>Scored by: ${MangaData.data.scored_by} </p>

                </div>
             </div>

            </div>

            <div id="synopsis2" class="tabcontent">
              <h5>Synopsis:</h5>
              <p3>${MangaData.data.synopsis}</p3>

            </div>
        
            </div>
          <div id="modal-feet" class="modal-footer" >
              <a id="close" href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>

     `

  modal.open();//open the modal

 }

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