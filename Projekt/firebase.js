
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import {
    getFirestore,
    addDoc ,
    collection,
    getDocs
   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  
  

  const form = document.getElementById("teamForm");
  


   const firebaseConfig = {
    apiKey: "AIzaSyAtLOK38ryDQH9iXv_42G0MCph_Trnz-T4",
    authDomain: "nogomet-a89d2.firebaseapp.com",
    projectId: "nogomet-a89d2",
    storageBucket: "nogomet-a89d2.appspot.com",
    messagingSenderId: "746485414100",
    appId: "1:746485414100:web:5554e7064cb65f9f176341"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  const ref = database.ref("timovi")

  
  try{
    const docRef =  await addDoc(collection(db,"users"),{
       name: "Dani",
       lastName : "Raja",
       born : 26111978

    })

    console.log("good");
  }catch(err){
     console.log(err);
  }

   const quertSnapshot = await getDocs(collection(db,"users"));

     quertSnapshot.forEach(elment=>{
        console.log(elment.data());
     })



    format.addEventListener("submit", (e) => {
      e.preventDefault();

      const ekipa = document.getElementById("ekipa").ariaValueMax


      ref.push({
        ekipa: ekipa
      })

  
      
      form.reset()
    })