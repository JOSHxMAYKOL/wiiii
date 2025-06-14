document.getElementById("cambioBtn").onclick = function() {
    var info = document.getElementById("mas");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
};
