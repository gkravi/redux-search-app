(function(){
    var searchBox = {        
        init: function() {   
          this.cacheDom();
          this.bindEvents();
          this.render();
        },
        cacheDom: function() {
          this.query = ""
          this.$search_input = document.querySelector('.searchbar .search_input');          
        },
        bindEvents: function() {
            this.$search_input.addEventListener('keyup', function (event) {    
                if (event.keyCode === 13) {
                    // Generate Hascode from request object
                    let hashCode = `${JSON.stringify(window.searchStore.getState().search_facets).hashCode()}:${JSON.stringify(window.searchStore.getState().search_request).hashCode()}`
                    // Cancel the default action, if needed
                    event.preventDefault(); 
                    window.searchStore.dispatch(fetchSearchByQuery({query: this.value, type: "search", cacheKey: `search_box:query:${hashCode}`}))
                }
            });          
        },
        render: function() {
          var data = {
            resultSuggestions: {},
            querySuggestions: {}
          };
          // var compiledTemplate = window.Handlebars.compile(this.template);
          // this.$ul.html(compiledTemplate(data))
        },       
        displayResultSuggestions: function() {
            // call method for displaying search results
    
            // call method to render the results
            this.render();
        },
        displayQuerySuggestions: function() {
            // call method for displaying search results
    
            // call method to render the results
            this.render();
        }

  
    }
    searchBox.init();

  })()