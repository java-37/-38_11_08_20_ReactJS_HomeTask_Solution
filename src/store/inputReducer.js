const init = {
    inputHeader:''
}

export default function(state = init,{type,payload}){
    switch(type){
        case '[ToDoHeader] change input':
            return {
                ...state,
                inputHeader:payload.inputHeader
            };
            default: return state;
    }
}