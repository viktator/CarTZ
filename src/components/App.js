import React from 'react';
import {Provider} from 'react-redux'
import store from '../redux'
import InputSearch from './InputSearch'
import Main from './Main'

function App() {
    return (
        <Provider store={store()}>
            <div className="App">
                <InputSearch />
                <Main />
            </div>
        </Provider>
    )
}

export default App;
