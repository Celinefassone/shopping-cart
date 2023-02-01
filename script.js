document.addEventListener("DOMContentLoaded", function () {
  const myHoodie = document.querySelector("#hoodie");
  const myShoes = document.querySelector("#shoes");
  const myBeanie = document.querySelector("#beanie");
  let myCounter = document.querySelector("#counter");
  let count = 0;

  if (myHoodie) {
    myHoodie.addEventListener("click", function () {
      if (myHoodie.classList.contains("selected")) {
        count--;
        myHoodie.classList.remove("selected");
      } else {
        count++;
        myHoodie.classList.add("selected");
      }
      myCounter.textContent = count;
    });
  }

  if (myShoes) {
    myShoes.addEventListener("click", function () {
      if (myShoes.classList.contains("selected")) {
        count--;
        myShoes.classList.remove("selected");
      } else {
        count++;
        myShoes.classList.add("selected");
      }
      myCounter.textContent = count;
    });
  }

  if (myBeanie) {
    myBeanie.addEventListener("click", function () {
      if (myBeanie.classList.contains("selected")) {
        count--;
        myBeanie.classList.remove("selected");
      } else {
        count++;
        myBeanie.classList.add("selected");
      }
      myCounter.textContent = count;
    });
  }
});
