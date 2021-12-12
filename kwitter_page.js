
    const firebaseConfig = {
        apiKey: "AIzaSyDpZEcsGQ-hU-qPEYy8DEoakKTMyx8kFNg",
        authDomain: "minsta-7124d.firebaseapp.com",
        databaseURL: "https://minsta-7124d-default-rtdb.firebaseio.com",
        projectId: "minsta-7124d",
        storageBucket: "minsta-7124d.appspot.com",
        messagingSenderId: "806050775344",
        appId: "1:806050775344:web:7e62bdebfd83dffee808f5",
        measurementId: "G-1J7L9TC5B2"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
  //ADD YOUR FIREBASE LINKS HERE
  
  function logout(){
    window.location = "index.html"
    localStorage.removeItem("Username")
    localStorage.removeItem("RoomName")

}

user_name = localStorage.getItem("Username")
room_name = localStorage.getItem("room_name")

function send() {
    msg = document.getElementById("message").value
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,like:0
    })
    document.getElementById("message").innerHTML = ""
}


  