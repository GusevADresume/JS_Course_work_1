
class Modal {

  constructor(element){
    this.element = element;
    if (!this.element){
       throw new Error('element is null or undefined');
    }
    this.registerEvents()
  }


  registerEvents() {
    const close = document.querySelectorAll(".modal")
    for (let i = 0; i < close.length; i++){
      close[i].addEventListener('click', (e)=>{
        if(e.target.parentElement.getAttribute('data-dismiss') == 'modal' || e.target.getAttribute('data-dismiss') == 'modal'){
          this.onClose();
        }
      })
    }
  }


  onClose(e) {
    this.close()
  }
 
  open() {
    this.element.style.display = "block";
  }

  close(){
    this.element.style.display = "none";
  }
}