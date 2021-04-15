import axios from 'axios';

const URL = "http://localhost:8080/cart";


class CartServices{
    
    getCart(){
        return axios.get(URL);
    }

     deleteProduct(id){
        return axios.delete(URL+'/'+id);
    }
    deleteCartProducts(){
        return axios.delete(URL);
    }
    

}

export default new CartServices();