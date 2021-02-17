
<script src="/__/firebase/8.2.7/firebase-app.js"></script>

https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.7/firebase-analytics.js"></script>


    <script src="/__/firebase/init.js"></script>

import(
    "fmt"
  "context"

  firebase "firebase.google.com/go"
  "firebase.google.com/go/auth"

  "google.golang.org/api/option"
)

opt:= option.WithCredentialsFile("path/to/serviceAccountKey.json")
app, err := firebase.NewApp(context.Background(), nil, opt)
if err != nil {
    return nil, fmt.Errorf("error initializing app: %v", err)
}


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKwmp8mFB9AowNnhoMJU5K6UOQiyveqy4",
    authDomain: "fromproject-b316e.firebaseapp.com",
    databaseURL: "https://fromproject-b316e-default-rtdb.firebaseio.com",
    projectId: "fromproject-b316e",
    storageBucket: "fromproject-b316e.appspot.com",
    messagingSenderId: "17730520025",
    appId: "1:17730520025:web:99fd25d7131c3a548f0fc8",
    measurementId: "G-J1KTDW1S96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
