
class AsyncForm {

  constructor(element) {
    this.element = element;
    if (!this.element){
      throw new Error('element is null or undefined');
    } 
    this.registerEvents();
  }


  registerEvents() {
    this.element.addEventListener('submit', (event) => {
      event.preventDefault();
      this.submit();
      
    });
  }


  getData() {
    let object = {};
    formData = new FormData(this.element);
    for(let [key, value] of formData.entries()){
      object[key] = value;
    }
    return object;

  }

  onSubmit(options){

  }


  submit() {
    this.onSubmit(this.getData());
  }
}