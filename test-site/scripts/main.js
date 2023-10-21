/*
这里的所有内容
都是注释。
*/
let myImage = document.querySelector("img");// 这是一条注释。

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test-image-2.png") {
    myImage.setAttribute("src", "images/test-image-1.png");
  } else {
    myImage.setAttribute("src", "images/test-image-2.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if(!myName) {
	  setUserName();
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};