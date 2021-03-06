/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-presentations', {

    /**
     * Broadcasts new presentation on specific channel
     * (which makes it appear)
     *
     * @param {BEM} presentation
     */
    broadcastPresentation: function(presentation) {
        // Переводим все контролы в исходное состояние
        this.channel('slide').trigger('change');
        // Сообщаем о том, что нужно показать презентацию
        this.channel('presentation').trigger('show', {
            presentation: presentation
        });
    },

    onSetMod : {

        'js' : function() {
            var t = this;

            // Загрузка первой презентации
            t.broadcastPresentation(t.domElem.children()[0]);

            // Выбор презентации
            t.bindTo('preview', 'click', function(e) {
                if (e.data) {
                    t.broadcastPresentation(e.data.domElem[0]);
                }
            });
        }

    }

}, {});

})();
