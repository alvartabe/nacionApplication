var httpRequest = {}
    
    httpRequest.postReq = function(service, json){
               
        if(jQuery.isEmptyObject(json) && service == ""){
            
            console.log("servicio no definido o json no definido")
            
        }else{
            
            $.ajax({
                type: 'POST',
                url: service,
                crossDomain: true,
                data: jsson,
                dataType: 'json',
                success: function(responseData, textStatus, jqXHR) {
                    console.log('POST create.')
                },
                error: function (responseData, textStatus, errorThrown) {
                    console.log('POST failed.')
                }
	       });
        }  
    }
    
    httpRequest.getAllReq = function(service){            

        if(service == ""){
            console.log("servicio no definido")
            
        }else{
            return $.ajax({
                type: 'GET',
                url: service,
                crossDomain: true,
                dataType: 'json',
                error: function (responseData, textStatus, errorThrown) {
                    console.log('GET failed.')
                }
           });  
        }
  
    }
    
    httpRequest.getIdReq = function(service, id){            

        if(service == "" && id ==""){
            console.log("servicio no definido  id")
            
        }else{
            return $.ajax({
                type: 'GET',
                url: service+id,
                crossDomain: true,
                dataType: 'json',
                error: function (responseData, textStatus, errorThrown) {
                    console.log('GET failed.')
                }
           }); 
        }
    }
    
    httpRequest.putReq = function(service,json,id){
     
        if(jQuery.isEmptyObject(json) && service == "" && id ==""){
            console.log("servicio, json o id no definido")
            
        }else{
            $.ajax({
                type: 'PUT',
                url: service+id,
                crossDomain: true,
                data: json,
                dataType: 'json',
                error: function (responseData, textStatus, errorThrown) {
                    console.log('put failed.')
                }
            });
        }
    }
    
    












