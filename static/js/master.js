if(window.top == window){

var ArkClient = function(options){
    console.log(options);
    this.iFrame = document.getElementById(options.iFrame);
    this.receiveMessage = function (event){
        console.log("Incoming");
        if(event.origin !== this.iFrame.src.host)
            return;
         console.log("Message for me");
    
    }
    window.addEventListener("message",this.receiveMessage,false);
    
};
ArkClient.prototype.sendMessage = function(call, options, callback){



};

var client = new ArkClient({iframe:'clientPage1'});

    client.sendMessage('test',{},function(data){
    
        console.log(data);
    
    });

}

if(window.top != window){

    var ArkServer = function(){
        document.getElementGetById("pageName").innerHTML = "Server";
        this.receiveMessage = function (event){
            Console.log("Incoming For Server");            
            Console.log("Message for me");        
        }
        window.addEventListener("message",this.receiveMessage,false);        
    };
}