export const incrementAction=()=>{
    return{

        type:"INCREMENT",
    };
};

export const decrementAction=()=>{

    return {
        type:"DECREMENT",
    };
};

export const setIncrementValueAction=(value)=>{
    return {
        type:"SET_INPUT",
        payload:value
    };
};
export const incrementByUser=(value)=>{

    return{
        type:"INPUT_BY_USER",
        payload:value
    };
    
};
export const decrementByUser=(value)=>{

    return{
        type:"INPUT_BY_USER_DEC",
        payload:value
    };
    
    
};

export const multiplicationByUser=(value)=>{

    return{
        type:"INPUT_BY_USER_MUL",
        payload:value
    };
    
    
};
export const partitionByUser=(value)=>{

    return{
        type:"INPUT_BY_USER_PAR",
        payload:value
    };
    
    
};