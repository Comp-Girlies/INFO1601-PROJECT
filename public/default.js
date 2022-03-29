// const server = "https://anime-userbase.herokuapp.com/nc/anime_userdb_5wjm/api/v1/Userdata";
   
      
// function getFormData(form){
//     return Object.fromEntries(new FormData(form));
//   }

//     //the Event object is passed to any event handler called via an event attribute eg onclick, onsubmit etc
//   function submit(event){
//     event.preventDefault();//prevents page redirection
       
//   //  //event target returns the element on which the event is fired upon ie event.target === myForm
  
//      const data = getFormData(event.target);//convert form data to object
//      postData(server, data);
//    }
  
//   //attach the submit function to the submit event of myForm    
//   document.querySelector('#myForm').addEventListener('submit', submit);


// async function postData(url, data){
//   try{

//      let response = await fetch(
//        url, 
//        {
//           method: 'POST',
//           body: JSON.stringify(data),//convert data to JSON string
//           headers: { 'Content-Type':'application/json' }// JSON data
//        },
//      );//1. Send http request and get response
     
//      let result = await response.json();//2. Get message from response
//      console.log(result);//3. Do something with the message
   
//    }catch(error){
//      console.log(error);//catch and log any errors
//    }
// }
