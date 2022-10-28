
class TransactionsPage {

  constructor( element ) {
    if (!element){
      throw new Error('element is null')
    } else {
      this.element = element;
      this.registerEvents();
    }

  }


  update() {
    
    this.render(this.lastOption);
  }


  registerEvents() {
    const dellAcc = document.querySelector('.remove-account');
    const dellTrans = document.querySelector('.content');
    dellAcc.addEventListener('click', (e)=>{
      this.removeAccount()
    })
    dellTrans.addEventListener('click', (e) =>{
      if (e.target.closest('button')){
        this.removeTransaction(e.target.dataset.id)
      }
      
    })

  }


  removeAccount() {
   // if (this.lastOption){
      if(confirm('Delete?') || this.lastOption){
        Account.remove({id:this.lastOption.account_id}, (response) => {
          if(response.success == true){
            App.updateWidgets();
            App.updateForms();
          };
        });
        this.clear();
      }
    //}
  }


  removeTransaction( id ) {
    if(confirm('Вы действительно хотите удалить эту транзакцию?')){
      Transaction.remove({id:id}, (response)=>{
        if(response.success == true){
          App.update();
        };
      })
    }

  }


  render(options){
    if (options){
      this.lastOption = options;
      Account.get(options.account_id, (response)=>{
        if(response.success == true){
          this.renderTitle(response.data.name)
        }
        
        Transaction.list(options, (response)=>{
          if(response.success == true){
            this.renderTransactions(response.data);
          };
        })
      })   
    }

  }


  clear() {
    App.update();
    this.renderTransactions([]);
    this.renderTitle('Название счета');
    this.lastOption = null;

  }

  renderTitle(name){
    const title = document.querySelector('.content-title');
    title.innerText=name;
  }


  formatDate(date){
    const Data = new Date(date)
    return `${Data.getDay()} ${Data.toLocaleString('ru', { month: 'long' })} ${Data.getFullYear()} г. в ${Data.getHours()}:${Data.getHours()}:${Data.getHours()}`
    
  }


  getTransactionHTML(item){
      let html = `<div class="transaction transaction_${item.type} row">
      <div class="col-md-7 transaction__details">
        <div class="transaction__icon">
            <span class="fa fa-money fa-2x"></span>
        </div>
        <div class="transaction__info">
            <h4 class="transaction__title">${item.name}</h4>
            <div class="transaction__date">${this.formatDate(item.created_at)}</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="transaction__summ">
        ${item.sum} <span class="currency">₽</span>
        </div>
      </div>
      <div class="col-md-2 transaction__controls">
          <!-- в data-id нужно поместить id -->
          <button class="btn btn-danger transaction__remove" data-id="${item.id}">
              <i class="fa fa-trash"></i>  
          </button>
      </div>
  </div>`
    return html;
  }



  renderTransactions(data){
    const transactions = document.querySelector('.content');
    let htmlList = [];
    for (let item of data){

      htmlList.push(this.getTransactionHTML(item))
    }
    transactions.innerHTML = htmlList
  }
}