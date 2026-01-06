import Api from "./Api";

export default {
    event(payload){
        return Api().post('/event/create', payload);
    }
}