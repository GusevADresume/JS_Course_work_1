
class RegisterForm extends AsyncForm {

  onSubmit(data) {
    User.register(data,
      (response) => {
        if(response.success){
          App.setState( 'user-logged' );
          App.getModal('register').close();
        } else{
          console.log(response.error);
        }
    })
  }
}