$( document ).ready(function() {
    
    httpGetReq();
});

function getData(){
    
	var tweet = {
        username: $("#username").val(),
        tweetID: $("#id").val(),
        email: $("#email").val(),
        apellido: $("#lastname").val()
    }
	return tweet;
}

function httpGetReq(){
    
    $.ajax({
        type: 'GET',
        url:'http://nacion.herokuapp.com/donauntweet/principito/',
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
            fillHtml(responseData)
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('GET failed.');
        }
	});
}

function httpGetIDReq(value){
    
    
}

function fillHtml(json){
    
    var tbody ="";
    $.each(json, function(i, item) {
        tbody += '<tr class="cktweet odd gradeX">';
        tbody += '<td> <input type="radio" name="grupo" value="'+ item._id + '" class="toggle" />'+item.username+'</td>';
        tbody += '<td>' + item.apellido + '</td>';
        tbody += '<td>' + item.email + '</td>';
        tbody += '<td>' + item.tweetID + '</td>';
        tbody += '</tr>';
    });
    $('#tbTweets tbody').append(tbody);
}

function httpPostReq(tweet){

    $.ajax({
        type: 'POST',
        url: 'http://nacion.herokuapp.com/donauntweet/principito/',
        crossDomain: true,
        data: tweet,
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
            alert('POST create.');
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('POST failed.');
        }
	});
}

function httpPutReq(tweet){
     
    var id="";
    
    $('.cktweet :checked').each(function () {
        id = $(this).val();
    });
    
    $.ajax({
        type: 'PUT',
        url: 'http://nacion.herokuapp.com/donauntweet/principito/'+id,
        crossDomain: true,
        data: tweet,
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
            alert('PUT edit.');
        },
        error: function (responseData, textStatus, errorThrown) {
            alert(responseData);
        }
	});
}

$('#btnSendData').click(function(){
    
    var id="";
    
    $('.cktweet :checked').each(function () {
        id = $(this).val();
    });
    
    $.ajax({
        type: 'GET',
        url: 'http://nacion.herokuapp.com/donauntweet/principito/'+id,
        crossDomain: true,
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
            fillForm(responseData)
        },
        error: function (responseData, textStatus, errorThrown) {
            alert('GET failed.');
        }
	}); 
});

function fillForm(json){
        $("#username").val(json.username);
        $("#id").val(json.tweetID);
        $("#email").val(json.email);
        $("#lastname").val(json.apellido);
        
}

$('#btnAdd2').click(function(){

	var tweet = getData();
    httpPostReq(tweet);	
});

$('#btnEdit').click(function(){

	var tweet = getData();
    httpPutReq(tweet);	
});

/*---------------------------------------------------------------------------*/


$('#btnAdd2').click(function(){
    
    var jsonObj ="";
    var serviceGetAll = "http://localhost:3000/donauntweet/principito";
    jsonObj = httpRequest.getAllReq(serviceGetAll);
    jsonObj.success(function (data){
        console.log(data);
    });
});

$('#btnAdd2').click(function(){
      
    var tweetP = {
        username: "userExample",
        tweetID: "12293",
        email: "contacme@gmail.com",
        apellido: "benavides"
    }

    var servicePost = "http://localhost:3000/donauntweet/principito";
    jsonObj = httpRequest.postReq(servicePost,tweetP);
});

$('#btnAdd2').click(function(){
    
    var jsonObj ="";
    var id="54f1cd8338aad69c1e92200a";
    var serviceGetId = "http://localhost:3000/donauntweet/principito/";
    jsonObj = httpRequest.getIdReq(serviceGetId,id);
    jsonObj.success(function (data){
        console.log(data);
    });
});

$('#btnAdd2').click(function(){
    
    var jsonObj ="";
    var id="54f1cd8338aad69c1e92200a";
    var tweetP = {
        username: "modificadousername",
        tweetID: "111222",
        email: "conmodific@gmail.com",
        apellido: "guzman"
    }
    
    var servicePut = "http://localhost:3000/donauntweet/principito/";
    httpRequest.putReq(servicePut,tweetP,id);
});

/*---------------------------------------------------------------------------*/


function getAllData(){
    
    var jsonObj ="";
    var serviceGetAll = "http://localhost:3000/donauntweet/principito";
    jsonObj = httpRequest.getAllReq(serviceGetAll);
    jsonObj.success(function (data){
        console.log(data);
    });
}

function insertData(){
      
    var tweetP = {
        username: "userExample",
        tweetID: "12293",
        email: "contacme@gmail.com",
        apellido: "benavides"
    }

    var servicePost = "http://localhost:3000/donauntweet/principito";
    jsonObj = httpRequest.postReq(servicePost,tweetP);
}

function getDataById(){
    
    var jsonObj ="";
    var id="54f1cd8338aad69c1e92200a";
    var serviceGetId = "http://localhost:3000/donauntweet/principito/";
    jsonObj = httpRequest.getIdReq(serviceGetId,id);
    jsonObj.success(function (data){
        console.log(data);
    });
}

function updateData(){
    
    var jsonObj ="";
    var id="54f1cd8338aad69c1e92200a";
    var tweetP = {
        username: "modificadousername",
        tweetID: "111222",
        email: "conmodific@gmail.com",
        apellido: "guzman"
    }
    
    var servicePut = "http://localhost:3000/donauntweet/principito/";
    httpRequest.putReq(servicePut,tweetP,id);
}



