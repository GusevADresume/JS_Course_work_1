
class CreateTransactionForm extends AsyncForm {

  constructor(element) {
    super(element)
    this.renderAccountsList();
  }


  renderAccountsList() {
    const accList = document.getElementById(this.element.children[3].children[1].id)
    if (User.current()){
    Account.list(User.current().id, (response) => {
        accList.innerHTML = response.data.reduce((acc,  item) => {
         return acc + (`<option value="${item.id}">${item.name}</option>`);
        }, 0);

    })
    }
  }


  onSubmit(data) {
    Transaction.create(data, (response) => {
      if (response.success == true){
        this.element.reset();
        if(this.element.id == 'new-income-form'){
          
          App.getModal('newIncome').close();
        } else {
          App.getModal('newExpense').close();
        }
        App.update();
      }
    })
  }
}



