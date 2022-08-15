let items = document.querySelectorAll(".item");
let dropAreas = document.querySelectorAll(".drop-area");

let id = "";

items.forEach((item) => {
  item.ondragstart = function () {
    id = item.getAttribute("id");
    item.style.border = "5px dashed red";
  };
  item.ondragend = function () {
    item.style.border = "none";
  };
});

dropAreas.forEach((dropArea) => {
  dropArea.ondragenter = function () {
    dropArea.style.border = "5px dashed red";
  };
  dropArea.ondragleave = function () {
    dropArea.style.border = "none";
  };
  dropArea.ondragover = function (e) {
    e.preventDefault();
  };
  dropArea.ondrop = function () {
    dropArea.style.border = "none";
    dropArea.append(document.getElementById(id));
  };
});
