class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }
    isAdmin(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user==="rupalitomar98@gmail.com")
           return true;
        return false;
    }

}

export default new AuthenticationService()