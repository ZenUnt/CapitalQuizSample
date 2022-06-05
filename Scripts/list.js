$(function() {
    'use strict';

    let cookies = document.cookie; //全てのcookieを取り出して
    let cookiesArray = cookies.split(';'); // ;で分割し配列に
    let result= [];

    for (let c of cookiesArray) { //一つ一つ取り出して
        let cArray = c.split('='); //さらに=で分割して配列に
        if( cArray[0].startsWith('q')){ // 取り出したいkeyと合致したら
            result[Number(cArray[0].substring(1, cArray[0].length))] = cArray[1];
            if (cArray[1] == 1) {
                $('#q' + cArray[0].substring(1, cArray[0].length)).html("〇");
            } else {
                $('#q' + cArray[0].substring(1, cArray[0].length)).html("×");
            }
        }
    }


})
