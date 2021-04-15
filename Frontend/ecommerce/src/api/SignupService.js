import axios from 'axios'
import base_url from "../api/baseapi"
class SignupService{

        addUser(User){
        return axios.post(`${base_url}/signup`,User);
    }

}

export default new SignupService()