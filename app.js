 const slides = document.querySelectorAll('.slide')
 
//for (const slide of slides ) {
slides.forEach(slide => {
  
  slide.addEventListener('click', (event) => {
    const active = event.target.classList.contains("active")
     
    switch (active) {
      case true:
        clearActiveClasses()
        break;
     
      case false:
        clearActiveClasses()
        slide.classList.add('active')
        break;
  
     }}) 
})
  
   //}

function clearActiveClasses (){
  
  /*slides.forEach(slide => {
        slide.classList.remove('active')
  
  })*/ for (const slide of slides){
    slide.classList.remove('active')
  }
}

