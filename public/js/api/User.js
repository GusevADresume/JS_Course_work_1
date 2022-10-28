


class User {
  static URL = '/user';

  static setCurrent(user) {
    const currentUser =  JSON.stringify({'id':user.id, 'name':user.name});
    localStorage.setItem('user',currentUser);
  }


  static unsetCurrent() {
    localStorage.removeItem('user');
    
  }


  static current() {
    return JSON.parse(localStorage.getItem('user'));
  }


  static fetch(callback) {
    createRequest({
      url: this.URL + '/current',
      method: 'GET',
      responseType: 'json',
      callback:  (response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent()
        }
        callback(response);
      }
    })
  }


  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data: data,
      callback:  (response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(response);
      }
      })
  }


  static register(data, callback) {
    createRequest({
      url: this.URL + '/register',
      method: 'POST',
      responseType: 'json',
      data:data,
      callback:  (response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(response);
      }
    });

  }


  static logout(callback) {
    createRequest({
      url: this.URL + '/logout',
      method: 'POST',
      responseType: 'json',
      callback:  (response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(response);
      }
    })
  }
}




