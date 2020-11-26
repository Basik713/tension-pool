Hooks.on('init' => () {
    class MessageWindow extends Application {
        static get defaultOptions() {
            return {
                ...super.defaultOptions,
                id : "messagewindow",
                template : "modules/tension-pool/templates/tensionpool.html",
                resizable : false,
                height : "auto",
                width : 200,
                minimizable : true,
                title : "Tension Pool",
                //renderContext: "Does this work?"
            }
        }
    }
    new MessageWindow().render(true);
})
