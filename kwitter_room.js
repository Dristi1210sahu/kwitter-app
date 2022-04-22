
//ADD YOUR FIREBASE LINKS HERE
var  firebaseConfig = {
      apiKey: "AIzaSyBCPF2iktI5PSJU3fvjel6RneBkfKe2LeU",
      authDomain: "kwitter-app-dd132.firebaseapp.com",
      databaseURL: "https://kwitter-app-dd132-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-dd132",
      storageBucket: "kwitter-app-dd132.appspot.com",
      messagingSenderId: "404953862499",
      appId: "1:404953862499:web:a6c80f847c278918994356",
      measurementId: "G-SFE88MP5DN"
    };
    firebase.initializeApp(firebaseConfig);

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_room.html";
    }

    
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name : ",Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

 function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
