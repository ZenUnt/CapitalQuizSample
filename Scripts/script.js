$(function() {
    'use strict';

    let html_num = window.location.href.split('/').pop().match(/\d*.html/);
    html_num = html_num[0].substring(0, html_num[0].length - 5)

    let cookies = document.cookie; //全てのcookieを取り出して
    let cookiesArray = cookies.split(';'); // ;で分割し配列に
    let q1 = 0;

    for (let c of cookiesArray) { //一つ一つ取り出して
        let cArray = c.split('='); //さらに=で分割して配列に
        if ( cArray[0] == 'q1') { // 取り出したいkeyと合致したら
            q1 = cArray[1];
        }
    }
    if (q1 == 1) {
        $('#saiten').html("〇");
    } else {
        $('#saiten').html("×");
    }


    $('[data-toggle="tooltip"]').tooltip();

    $('.select-btn').click(function(){
        let id = $(this).attr('id');
        if (id == 'correct') {
            $('#checkAnswer').html("〇正解").attr('class', 'text-success font-weight-bold bg-light p-1 border rounded shadow');
            document.cookie = 'q' + html_num + '=1';
        } else {
            $('#checkAnswer').html("×不正解").attr('class', 'text-danger font-weight-bold bg-light p-1 border rounded shadow');
            document.cookie = 'q' + html_num + '=0';
        }
        showAnswer();
    })

    $('#showAnswerBtn, .select-btn').click(function(){
        showAnswer();
    })

    function showAnswer(){
        $('#showAnswerBtn').hide();
        $('#answerChar, #kaisetu').show();
    }

    $('#checkAnswer').click(function(){
        let classlist = document.getElementById('checkAnswer').classList;
        classlist.add('fadeout');
    })


})
