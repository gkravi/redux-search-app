
(function(ctx){
    const searchResultReducer = (state = {}, action) => {
        switch (action.type) {
          case 'SEARCH_BY_QUERY':
            return {...state, ...action.payload };
          case 'CLICK_TAG':
            return {...state, ...action.payload };
          default:
            return state;
        }
    }
    
  ctx.searchResultReducer = searchResultReducer
    

})(window)