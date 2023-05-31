document.getElementById("bar").addEventListener("click", function() {
  var widthDiv = document.getElementById("progressBar");
  widthDiv.style.width = "300px";

  var textParagraph = document.getElementById("downloadText");
  textParagraph.textContent = "Eges Virus Downloaded";
  setTimeout();
});

setTimeout(function() {
  var widthDiv = document.getElementById("progressBar");
  widthDiv.style.width = "0px";

  var textParagraph = document.getElementById("downloadText");
  textParagraph.textContent = "Thanks:)";
  alert("ege now is in control");
}, 3000);

function changeColor() {
  var colorInput = document.getElementById("colorInput").value;
  var changeColor = document.getElementById("changeColor");

  changeColor.style.backgroundColor = colorInput;
}