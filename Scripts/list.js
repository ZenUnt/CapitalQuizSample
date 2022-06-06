$(function() {
    'use strict';

    let cookies = document.cookie; //全てのcookieを取り出して
    let cookiesArray = cookies.split(';'); // ;で分割し配列に
    let result= [];

    for (let c of cookiesArray) { //一つ一つ取り出して
        let cArray = c.split('='); //さらに=で分割して配列に
        if (!cArray[0]) {
            continue;
        }
        let q_results = cArray[0].match(/q\d+/); // qで始まり数字が続く場合だけ取り出す
        if( q_results !== null){
            let q_result = q_results[0];
            result[Number(q_result.substring(1, q_result.length))] = cArray[1];
            if (cArray[1] == 1) {
                $('#q' + q_result.substring(1, q_result.length)).html("〇");
            } else {
                $('#q' + q_result.substring(1, q_result.length)).html("×");
            }
        }
    }


})
