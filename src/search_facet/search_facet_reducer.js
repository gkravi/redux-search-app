
(function(ctx){
    const facetReducer = (state = { facets: 
                                    {
                                      document_type: { type: "value" },
                                      industry: { type: "value" },
                                      topic: { type: "value" },
                                      region: { type: "value" } 
                                    } }, action) => {
        switch (action.type) {
          case 'FACETS_UPDATES':
            return {...state, ...action.payload };
          case 'SELECT_FILTER':
            return {...state, ...action.payload };
          case 'CLEAR_FILTER':
            return {...state, ...action.payload };
          case 'CLEAR_ALL_FILTER':
            return {...state, ...action.payload };
          case 'RESET_FILTERS':
            return {...state, ...action.payload };
          default:
            return state;
        }
    }
   
   ctx.facetReducer = facetReducer
   

})(window)