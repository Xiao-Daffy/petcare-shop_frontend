
// get URL values

function getUrlParam(key){
    var url = decodeURI(window.location.toString());
    var arr = url.split("?");
    if(arr.length>1){
        var paramas = arr[1].split("&");//uid=1&pid=1
        for(var i=0; i <paramas.length; i++){
            var parama = paramas[i];//uid=1
            if(parama.split("=")[0] == key){
                return parama.split("=")[1];
            }
        }
    }
    return null;
}