// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCYAdVH_jZxx3bKNC4B4DmrnsA6VB-2_Do",
  authDomain: "contactform-468fc.firebaseapp.com",
  databaseURL: "https://contactform-468fc.firebaseio.com",
  projectId: "contactform-468fc",
  storageBucket: "contactform-468fc.appspot.com",
  messagingSenderId: "497395486451",
  appId: "1:497395486451:web:c449de5ca219c08829b186"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}