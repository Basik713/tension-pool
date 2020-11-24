export default class MessageWindow extends Application {
    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            id : "messagewindow",
            template : "modules/LPTips/templates/messagebox.html",
            resizable : false,
            height : "auto",
            width : 400,
            minimizable : true,
            title : "LPTips Message",
            renderContext: "Does this work?"
        }
    }
}
new MessageWindow().render(true);
