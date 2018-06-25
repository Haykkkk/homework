let list = document.getElementById("myOl"),
    input = document.getElementById('myInput'),
    listItem = null;

input.addEventListener("keyup",function () {
  for (let i = 0; i < list.children.length; i++) {
     listItem = list.children[i].textContent.toLowerCase();
    if (listItem.indexOf(input.value.toLowerCase()) === -1) {
      list.children[i].style.display = "none";
    }else {
      list.children[i].style.display = "block";
    }
  }
})
