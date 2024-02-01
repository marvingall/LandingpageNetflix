let accordian = document.getElementsByClassName("FAQ__title");
for (let i = 0; i < accordian.leght; i++) {
  accordian[i].addEventListener("click", fuction() {
    if(this.childNodes[1].classList.contains("fa-plus")) {
    this.childNodes[1].classList.remove("fa-plus");
    this.childNodes[1].classList.add("fa-times");
  } else {
    this.childNodes[1].classList.remove("fa-times");
    this.childNodes[1].classList.add("fa-plus");
  }
  let content = this.nextElementSibling;
  if (content.styles.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "ph";
  }
});    
    }