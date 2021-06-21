(function(ctx, combineReducers) {
 
    //Create Instance of Redux-Thunk
    const thunk = ReduxThunk.default
    //Create Redux Store
    const store = Redux.createStore(combineReducers, Redux.applyMiddleware(thunk));
    
    //Assign store to searchStore inside window scope
    ctx.searchStore = store
    
    store.dispatch(fetchSearchByQuery({query: "", type: "search", cacheKey: "search:init"}))
})(window, window.searchReducer)
