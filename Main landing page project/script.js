window.onload = function () {
  var vw = window.innerWidth;
  const burger_button = document.querySelector(".image");
  const mobile_menu = document.querySelector(".mobile-nav");
  const list = document.querySelector(".mobile-nav ul");
  burger_button.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
    list.classList.toggle("is-active");
    let imgtoggle = mobile_menu.classList.contains("is-active");
    if (imgtoggle) {
      burger_button.src = "images/icon-close.svg";
    } else {
      burger_button.src = "images/icon-hamburger.svg";
    }
  });

  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("mousedown", startDrag);
  document.addEventListener("mouseup", stopDrag);
  let drg, startX, scrollX;

  function startDrag(e) {
    drg = true;
    startX = e.pageX;
    scrollX = carousel.scrollLeft;
  }

  function stopDrag() {
    drg = false;
  }

  function dragging(e) {
    if (drg) {
      carousel.scrollLeft = scrollX - (e.pageX - startX);
    }
  }

  const dot1 = document.getElementById("dot1");
  const dot2 = document.getElementById("dot2");
  const dot3 = document.getElementById("dot3");
  const dot4 = document.getElementById("dot4");
  dot1.classList.add("is-active");
  dot1.addEventListener("click", function () {
    dot1.classList.add("is-active");
    dot2.classList.remove("is-active");
    dot3.classList.remove("is-active");
    dot4.classList.remove("is-active");
    vw = window.innerWidth;
    carousel.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  });
  dot2.addEventListener("click", function () {
    dot1.classList.remove("is-active");
    dot2.classList.add("is-active");
    dot3.classList.remove("is-active");
    dot4.classList.remove("is-active");
    vw = window.innerWidth;
    carousel.scrollTo({
      left: vw + 30,
      behavior: "smooth",
    });
  });
  dot3.addEventListener("click", function () {
    dot1.classList.remove("is-active");
    dot2.classList.remove("is-active");
    dot3.classList.add("is-active");
    dot4.classList.remove("is-active");
    vw = window.innerWidth;
    carousel.scrollTo({
      left: (vw + 30) * 2,
      behavior: "smooth",
    });
  });
  dot4.addEventListener("click", function () {
    dot1.classList.remove("is-active");
    dot2.classList.remove("is-active");
    dot3.classList.remove("is-active");
    dot4.classList.add("is-active");
    vw = window.innerWidth;
    carousel.scrollTo({
      left: (vw + 30) * 3,
      behavior: "smooth",
    });
  });
};

function EmailValidation() {
  let EmError = document.getElementById("errorid");
  let EmField = document.querySelector(".Em");
  if (!EmField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    EmError.style.color = "red";
    EmField.placeholder = "Example@SomeMail.com";
  } else {
    EmError.style.color = "rgb(0,0,0)";
  }
}
