// Video popup

function openGizVideo() {
    document.getElementById("gizVideo").style.display = "flex";
    document.getElementById("fullpage").style.filter = "blur(2px)"
  }

  function closeForm() {
    document.getElementById("gizVideo").style.display = "none";
    document.getElementById("fullpage").style.filter = "blur(0px)"
  }