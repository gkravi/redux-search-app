(function(ctx){
  var init_request = {
                      query: "",
                      filters: {
                        all: [
                          {
                            language: "en_us"
                          }
                        ]
                      },
                      facets: {
                        document_type: {
                          type: "value"
                        },
                        industry: {
                          type: "value"
                        },
                        topic: {
                          type: "value"
                        },
                        region: {
                          type: "value"
                        }
                      },
                      sort: {
                        modified_date: "desc"
                      },
                      page: {
                        current: 1,
                        size: 5
                      }
                    }
  
  const searchBoxReducer = (state = { request: init_request, query_suggestions: {}, result_suggestions: {} }, action) => {
    switch (action.type) {       
      case 'SEARCH_QUERY': 
        {          
          return window.merge.all([
            state,
            action.payload,
          ]);          
        }    
      case 'TYPE_QUERY':
        {
          return window.merge.all([
            state,
            action.payload,
          ]);          
        } 
      default:
        return state;
    }
  }
    
  ctx.searchBoxReducer = searchBoxReducer
   
})(window)