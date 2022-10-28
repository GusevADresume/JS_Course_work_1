

class UserWidget {

  constructor(element){
    if (!element){
      new Error("Element is undefined")
    } 
    this.element = element;
  }


  update(){
    const currentUser = User.current();
    if (currentUser){
      const user = document.querySelector('.user-name');
      user.innerHTML = currentUser['name'];
    }

  }
}
