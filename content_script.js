var match = /^\d+$/;

setTimeout(() => {
    var ad = Array.from(document.getElementsByClassName("mgbox"));
    var allDiv = Array.from(document.getElementsByTagName("div"));
    
    allDiv.forEach((ele) => {
        
        var div = ele.getAttribute("id");
        if (div !== null)
        {
            if (div.match(match))
            {
                
                ele.remove();
            }
            
        }
    });


    ad.forEach((ele) => {
        ele.remove();
    });
}, 4000);

