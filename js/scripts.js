window.onload = function(){
  let buttonLight = document.querySelector("button.button-light")
  buttonLight.addEventListener('click', function(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
  });

  let buttonDark= document.querySelector("button.button-dark");
  buttonDark.addEventListener('click', function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
  });
  
}