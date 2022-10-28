

class TransactionsWidget {

  constructor( element ) {
    if (element){ 
      this.element = element;
      this.registerEvents();
    }

  }

  registerEvents() {
    const transactPanel = document.querySelector('.transactions-panel');
    transactPanel.addEventListener('click', (e)=>{
      if(e.target.className == 'btn btn-success btn-block create-income-button'){
        App.getModal('newIncome').open();
      } else{
        App.getModal('newExpense').open();
      }
    })
  }
}
