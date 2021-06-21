(function(ctx, searchBoxReducers, searchFacetReducers, searchResultsReducers) {

    // Access the reducers 
    const combineReducers = Redux.combineReducers({
        search_request: ctx.searchBoxReducer,
        search_facets: ctx.facetReducer,
        search_results: ctx.searchResultReducer
    })
    ctx.searchReducer = combineReducers
})(window)

