/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-presentations', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        this.liveBindTo('preview', 'click', function(e) {
            var presentations = this.findBlockOutside('b-presentation')
                .findBlockInside('b-slides');

            // Сообщаем о том, что нужно показать презентацию
            if (e.data) {
                var presentationId = e.data.domElem[0].getAttribute('data-id');
                presentations.trigger('show:presentation', {
                    presentationId: presentationId
                })
            }
        });
    }

});

})();
