

class AccountsWidget {

  constructor( element ) {
    this.element = element;
    if (!this.element){
      throw new Error('element is null or undefined');
    } 
    this.registerEvents();
    this.update();
  }



  registerEvents() {
    const crAccountBtn = document.querySelector('.accounts-panel');
    crAccountBtn.addEventListener('click', (e)=>{
      if (e.target.className == 'create-account label label-success'){
        App.getModal('createAccount').open();
      } else if(e.target.closest('li').className == 'account') {
        this.onSelectAccount(e.target);
      }
    })
  }


  update() {
    if(User.current()){
      Account.list(User.current().id, (response) => {
        this.clear();
        for (let item of response.data){
          this.renderItem(item);
        } ;
      });
    }
    
  }


  clear() {
    const accList = document.querySelectorAll('.account')
    if(accList){
      for (let acc of accList){
       acc.remove();
      }
    }
    
  }


  onSelectAccount( element ) {
    if(element.closest('li').className == 'account'){
      for (let acc of document.querySelectorAll('.account')){
        acc.className = 'account';
      }
      element.closest('li').className = 'active account';
      App.showPage( 'transactions', { account_id: element.closest('li').dataset.id });
    }

  }


  getAccountHTML(item){
    const htmlString = `<li class="account" data-id="${item.id}">
      <a href="#">
        <span>${item.name}</span> /
        <span>${item.sum} ₽</span>
      </a>
    </li>`;
    return htmlString

  }


  renderItem(data){
   this.element.insertAdjacentHTML("beforeend", this.getAccountHTML(data));
  }
}
