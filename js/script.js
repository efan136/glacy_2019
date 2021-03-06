  var ppbtn = document.querySelector(".contacts__btn");
  var popup = document.querySelector(".pop-up");
  var ppclose = document.querySelector(".pop-up-close");
  var ppname = popup.querySelector(".pop-up-name");
  var ppemail = popup.querySelector(".pop-up-email");
  var pptextarea = popup.querySelector(".pop-up-text");
  var ppform = popup.querySelector(".pop-up-form");
  
  ppbtn.addEventListener("click", function (evt) 
    { evt.preventDefault();
    popup.classList.add("modal-show");
    ppname.focus();
  });
  ppclose.addEventListener("click", function(evt) 
    { evt.preventDefault();
      popup.classList.remove("modal-error");
    popup.classList.remove("modal-show");
    
});

  window.addEventListener("keydown", function(evt)
  {
  if (evt.keyCode ===27) {evt.preventDefault();
    if (popup.classList.contains("modal-show")) 
      { popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
     }
   }
    
  });

  ppform.addEventListener("submit", function(evt)
  {
      if(!ppname.value || !ppemail.value || !pptextarea.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error"); 
    }
  });