
class LoginForm extends AsyncForm {

  onSubmit(data) {
    User.login(data,
        (response) => {
          if(response.success){
            App.setState( 'user-logged' );
             App.getModal('login').close();
          } else{
            console.log(response.error);
          }
      })
  }
}