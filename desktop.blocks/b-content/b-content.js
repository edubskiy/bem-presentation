/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-content', {

    onSetMod : {

        'active': function() {
            console.log('trigger active');
        },

        'js' : function() {
            /* ... */
        }

    }

}, {

});

})();
