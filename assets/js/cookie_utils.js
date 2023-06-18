var OPERATOR = "="

// set cookies 
function setCookies(keyStr, values){

    document.cookie= keyStr+OPERATOR+values;
    //eg: username=daffy; password=d1234
}


// get cookies values by key
function getCookies(keyStr){
    
    //get cookies 
    var value = null;
    var str = window.document.cookie;//eg: username=daffy; password=d1234
    var arr = str.split("; "); //eg: username=daffy
    for(var i =0; i<arr.length;i++){
        var c = arr[i];  // payUrl = weixin://wxpay/bizpayurl?pr=NfbMIUFzz
        var k = c.split(OPERATOR)[0];
        var v = c.split(OPERATOR)[1];
        if(keyStr == k){
            value = v;
            break;
        }
    }
    return value;

}
function getPayUrlCookies(keyStr){
    
    //get cookies 
    var value = null;
    var str = window.document.cookie;//eg: username=daffy; password=d1234
    var arr = str.split("; "); //eg: username=daffy
    for(var i =0; i<arr.length;i++){
        var c = arr[i];  // payUrl = weixin://wxpay/bizpayurl?pr=NfbMIUFzz
        var k = c.split(OPERATOR)[0];
        var v = c.split(OPERATOR)[1];
        var s = c.split(OPERATOR)[2];
        if(keyStr == k){
            value = v+'='+s;
            break;
        }
    }
    return value;

}
function deleteCookie(){
    var Cookies = document.cookie.split(';');
 
         // set 1 Jan, 1970 expiry for every cookies
         for (var i = 0; i < Cookies.length; i++)
         document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
         
}