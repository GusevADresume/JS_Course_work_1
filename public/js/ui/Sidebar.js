
class Sidebar {

  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }


  static initToggleButton() {
    const sideBarButton = document.getElementsByClassName('sidebar-toggle visible-xs')
    sideBarButton[0].addEventListener('click', function(e){
      if(document.body.className === 'skin-blue sidebar-mini app'){
        document.body.className = 'skin-blue sidebar-mini app sidebar-open sidebar-collapse';
      } else{
        document.body.className = 'skin-blue sidebar-mini app';
      }
    });

    
  
  }


  static initAuthLinks() {
    const login = document.querySelector('.menu-item_login');
    const reg =  document.querySelector('.menu-item_register');
    const logout = document.querySelector('.menu-item_logout');

    login.addEventListener('click',(e)=>{

      App.getModal('login').open();

    });

    reg.addEventListener('click',(e)=>{

      App.getModal('register').open();
      
    });

    logout.addEventListener('click',(e)=>{
      User.logout(function (response){
        if(response.success){
          App.setState( 'init' )
        } else{
          console.log(response.error)
        }
      });
    });

  }
}
