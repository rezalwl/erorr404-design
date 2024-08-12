const container = document.querySelector("#container");


window.addEventListener('mousemove' , (e)=>{
  let x = e.clientX / 5;
  let y = e.clientY / 5;

  container.style.backgroundPositionX = x + "px";
  container.style.backgroundPositionY = y + "px";

})
