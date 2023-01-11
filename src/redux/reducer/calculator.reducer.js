const initialValue={
    count:0,
    inputValue:""
}
export const calculatorReducer=(state=initialValue, action)=>{

    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                count:state.count+1,
            };
            case "DECREMENT":
                return{
                    ...state,
                    count:state.count-1,
                };
            
                case "SET_INPUT":
                return{
                    ...state,
                   inputValue: action.payload,
                };
                case "INPUT_BY_USER":
                    return{
                        ...state,
                       count:state.count +Number(action.payload),
                       inputValue: " ",
                    };
                    case "INPUT_BY_USER_DEC":
                        return{
                            ...state,
                           count:state.count -Number(action.payload),
                           inputValue: " ",
                        };
                        case "INPUT_BY_USER_MUL":
                            return{
                                ...state,
                               count:state.count *Number(action.payload),
                               inputValue: " ",
                            };
                            case "INPUT_BY_USER_PAR":
                                return{
                                    ...state,
                                   count:state.count /Number(action.payload),
                                   inputValue: " ",
                                };
                                

                     
    
        default:
            return state;
    }
};