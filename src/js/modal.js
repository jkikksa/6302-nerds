var writeusClose = document.getElementById("writeusClose");
var writeusOpen = document.getElementById("writeusOpen");
var writeus = document.getElementById("writeus");

writeusOpen.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.add("write-us--show");
});

writeusClose.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.remove("write-us--show");
});
