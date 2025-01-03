function showpasss(){
  let show = document.getElementById(`passwod`);
  if (show.type === "password"){
    show.type = `text`;
  }
  
  else {
    show.type = `password`;
  }
}

function redirect(){
  location.replace('loggedin.html');
}
