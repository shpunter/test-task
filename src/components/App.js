import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import ModalSmall from './UI/ModalSmall/ModalSmall';
import UserList from './userList/UserList';
import Navigation from './navigation/Navigation';
import Search from './Search/Search';

import reducer, { initialState } from '../store/reducer';
import { Context } from '../store/context';

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { pagesLength } = state;
    return (
        <Context.Provider value={ { state, dispatch} }>
            <Search />
            <Switch>
                <Route path="/page/:pageNumber" component={ UserList } />
                <Route path="/" component={ UserList } />
            </Switch>

            <Navigation pagesLength={ pagesLength }/>
            <ModalSmall />
        </Context.Provider>
    );
}

export default App;
