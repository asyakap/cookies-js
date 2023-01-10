// User Interface Logic
window.onload = () => {
  let h1 = document.querySelector("h1");
  h1.onmouseover = () => {
    window.alert("I am a heading element.");
  }

  let p = document.querySelector("p");
  p.onmouseover = () =>  {
    document.querySelector("p>em").innerText = "Don't be surprised";
  };

  let img = document.querySelector("img");
  img.onmouseover = () => {
    img.style.height = "700px";
  };
}