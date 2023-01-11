window.onload = function(){
  
  // light/dark btns
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

  // default/increasted font buttons
  let buttonDefault = document.querySelector("button.button-default");
  buttonDefault.addEventListener("click", function(){
    document.body.style.fontSize = "12px";
  });
  

  let buttonIncreased = document.querySelector("button.button-increased");
  buttonIncreased.addEventListener('click', function() {
    document.body.style.fontSize = "40px";
  });


  // onmouseover and onmouseout event handlers 
}
