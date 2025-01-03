

function passshow(){
    let x = document.getElementById("Inputu");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function registry(){
  location.replace('loggedin.html');
} 
