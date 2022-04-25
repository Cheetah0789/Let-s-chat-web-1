// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDn29KaruzVXpaF-qU6Tyhgovm514zs-lc",
    authDomain: "lets-chat-12d7e.firebaseapp.com",
    databaseURL: "https://lets-chat-12d7e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-12d7e",
    storageBucket: "lets-chat-12d7e.appspot.com",
    messagingSenderId: "1029927579686",
    appId: "1:1029927579686:web:1c3f2482e5b99705d3b6e7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}