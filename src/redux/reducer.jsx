import { LoginInfo } from "./action";

const initialState = {
    login:""
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case LoginInfo:
            return action.payload
            break;
    
        default:
            return state
            break;
    }
}