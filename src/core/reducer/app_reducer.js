import {
    ERR_ARRAY,
    SET_TEXT,
    setText,
    UPDATE_LATTER,
} from "../../redux/action_type";
import {setTextAPI} from "../../redux/api";

const initialState = {
    letter: '',
    text: '',
    textLoud: false,
    okLatter: [],
    errLatter: []
}


export function app_reducer(state= initialState, action) {
    switch (action.type) {
        case SET_TEXT: {
            return {
                ...state,
                text: [...action.text],
                textLoud: true
            }
        }
        case UPDATE_LATTER: {
            return  {
                ...state,
                letter: ''
            }
        }
        case ERR_ARRAY: {
            return {
                ...state,
                errLatter: [...state.errLatter, action.array]
            }
        }

        default: return state
    }

}

export const  setTextThunk = () => (dispatch ) => {
    setTextAPI.setext().then(response => {
        if(response.status === 200) {
            console.log(response);
            const random = Math.floor(Math.random() * response.data.length);
            dispatch(setText(response.data[random]))
        }

    })
}
