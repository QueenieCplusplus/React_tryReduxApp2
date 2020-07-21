import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

// 2020, 7/21, pm 4:15
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/reducer';

// connect component with Redux
// store.dispatch(action)
import {connect} from 'react-redux';
import {add_on, read, pause} from './actions/creators';

let store = createStore(reducer);
//store.dispatch(action);
/*const mapStateToState = (state) => {
  ...
}*/

const mapDispatchToState = (dispatch) => {

  return{

    add_on: (name) =>{

      dispatch(addon(name))

    },

    read:(id) => {

      dispatch(read(id))

    },

    pause: () =>{

      dispatch(pause())

    }
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <View >
        <Text>Kates Redux App</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}



