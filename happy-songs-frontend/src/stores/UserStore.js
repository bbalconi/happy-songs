import { extendObservable } from 'mobx';
var axios = require("axios");

export default class UserStore {
  constructor() {
    extendObservable(this, {
      user: null,
     get retrieveUser() {
        return this.user
      }
    })
  }
  submitSignup(signupObj) {
    return new Promise((resolve, reject) => {
    var url = '/signup';
    axios.post(url, {
        firstName: signupObj.firstName,
        lastName: signupObj.lastName,
        email: signupObj.email,
        password: signupObj.password
      }).then((userObj) => { 
        if (userObj !== undefined) {
             this.user = userObj.data
        } else {
          console.log('user add failed');
        } resolve(userObj);
    })
  }
)} 

  
  submitLogin(loginObj) {
    return new Promise((resolve, reject) => {
        axios.post('/login', {                      
            email: loginObj.email,
            password: loginObj.password
    }).then((userObj) => {
      if (userObj.data.success) { 
        this.user = userObj.data
      } else {
        this.setState({
          message: userObj.message,
          email: userObj.email,
          success: userObj.success
        }) 
      }resolve(userObj)
    })
  })
}

}