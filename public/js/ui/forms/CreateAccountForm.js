
class CreateAccountForm extends AsyncForm {

  onSubmit(data) {
    Account.create(data, (response) => {
      if (response.success == true){
        App.getModal('createAccount').close();
        App.update();
        this.element.reset();
      } else {
        this.element.reset();
        console.log(response)
      }
    })
  }
}