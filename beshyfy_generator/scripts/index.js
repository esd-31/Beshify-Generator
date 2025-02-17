var keyword = "🤸";

var inputTEXT = document.getElementById("input-text");
var btnGENERATE = document.getElementById("generate");
var resultINFO = document.getElementById("result-info");
inputTEXT.addEventListener("input", () => {
  if (inputTEXT !== "") {
    btnGENERATE.disabled = false;
  } else {
  }
});

var settingFUNCTION = document.getElementById("setting-function");
settingFUNCTION.addEventListener("click", () => {
  var toggleSETTING = document.getElementById("toggle-setting");
  if (toggleSETTING.style.display === "none") {
    toggleSETTING.style.display = "block";
  } else {
    toggleSETTING.style.display = "none";
  }
});

var escFUNCTION = document.addEventListener("keydown", (e) => {
  var toggleSETTING = document.getElementById("toggle-setting");
  if (e.key === "Escape") {
    toggleSETTING.style.display = "none";
  }
});

var escCOMMAND = document.getElementById("esc");
escCOMMAND.addEventListener("click", () => {
  alert("Press Esc Key!");
});

var btnGENERATE = document.getElementById("generate");
var inputTEXT = document.getElementById("input-text");
var resultINFO = document.getElementById("result-info");
var keyword = "🤸";
btnGENERATE.addEventListener("click", () => {
  if (inputTEXT.value !== "") {
    resultINFO.value += `${keyword}` + inputTEXT.value + `${keyword}`;
    inputTEXT.value = null;
  }
});

const removeFunction = () => {
  var inputTEXT = document.getElementById("input-text");
  if (inputTEXT.value) {
    inputTEXT.value = null;
  }
};

var darkTheme = document.querySelector(".dark");
darkTheme.addEventListener("click", () => {
  var bodyIndex = document.body;
  var parentContainer = document.querySelector(".parent-container");
  parentContainer.style.background = "#000";
  parentContainer.style.color = "#fff";
  bodyIndex.style.background = "#000";
});
var lightTheme = document.querySelector(".light");
lightTheme.addEventListener("click", () => {
  var bodyIndex = document.body;
  var parentContainer = document.querySelector(".parent-container");
  bodyIndex.style.background = "#dddd";
  parentContainer.style.background = "#dddd";
});