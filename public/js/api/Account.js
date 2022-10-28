
class Account extends Entity {
  static URL = '/account'
  static get(id, callback){
    createRequest({url: `${this.URL}/${id}`,
                  data: id,
                  method: 'GET',
                  callback:callback});
  }
}
