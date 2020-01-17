// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDb4x8ICSRPu8TQpKBjpV_s2Jt5B_UnnGM",
    authDomain: "hang-contact.firebaseapp.com",
    databaseURL: "https://hang-contact.firebaseio.com",
    projectId: "hang-contact",
    storageBucket: "hang-contact.appspot.com",
    messagingSenderId: "248994446285",
    appId: "1:248994446285:web:e0a556b26dc34f61e8e284",
    measurementId: "G-5Q0LD57595"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactform').addEventListener('submit',submitform);

function submitform(e)
{
    e.preventDefault();
    var name = getInputval('name');
    var email = getInputval('email');
    var telephone = getInputval('telephone');
    var message = getInputval('message');

    //save message
    saveMessage(name, email, telephone, message);

//show alert
document.querySelector('.alert').style.display = 'block';
//document.querySelector('.alertsub').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function()
{
    document.querySelector('.alert').style.display = 'none';
    //document.querySelector('.alertsub').style.display = 'none';   
},3000);
//clear form
document.getElementById('contactform').reset();
}
function getInputval(id)
{
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, telephone, message)
{
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        telephone:telephone,
        message:message
    });
}