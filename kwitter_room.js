
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCweShfi8ik-ZjaKgx5An1AgrYNbZ_7nXE",
      authDomain: "kwitter-20699.firebaseapp.com",
      databaseURL: "https://kwitter-20699-default-rtdb.firebaseio.com",
      projectId: "kwitter-20699",
      storageBucket: "kwitter-20699.appspot.com",
      messagingSenderId: "219862457312",
      appId: "1:219862457312:web:8462db873560c6144fa985",
      measurementId: "G-1JXHGP0EN6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name")
document.getElementById("username").innerHTML = "Welcome" + username
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room_name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function addroom() {
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", Room_name)
      window.location = "kwitter_page.html"
}

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}


function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname")
      window.location = "kwitter.html"
}

