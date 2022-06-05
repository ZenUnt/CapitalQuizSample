$(function() {
    'use strict';

    let cookies = document.cookie; //全てのcookieを取り出して
    let cookiesArray = cookies.split(';'); // ;で分割し配列に
    let result= [];

    for (let c of cookiesArray) { //一つ一つ取り出して
        let cArray = c.split('='); //さらに=で分割して配列に
        let q_result = cArray[0].match(/q\d*/)[0];
        if( q_result !== undefined){ // 取り出したいkeyと合致したら
            result[Number(q_result.substring(1, q_result.length))] = cArray[1];
            if (cArray[1] == 1) {
                $('#q' + q_result.substring(1, q_result.length)).html("〇");
            } else {
                $('#q' + q_result.substring(1, q_result.length)).html("×");
            }
        }
    }


})
