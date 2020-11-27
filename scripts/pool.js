class poolWindow extends Application {
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
        }
     }
}
