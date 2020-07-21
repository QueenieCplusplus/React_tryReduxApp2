//2020, 7/21, pm 4:00
// reducer 的輸入值決定了回傳值，沒有副作用，屬於純功能函式。

/*const reducer = (state = {}, action) =>{

    return state;

}*/

import {add_on, add_line, read, pause, keep} from '../actions/creators';
import { ActionSheetIOS } from 'react-native';
import { ADD_ON } from '../actions/types';

const reducer = (state=[], action)=>{

    switch(action.type){
        case ADD_ON:
            return state.concat(action.data);
        //...

    }

    return state;

};

export default reducer;
