$(function() {
    'use strict';

    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    $('#sidebar').load('./sidebar.html');

    let date1, date_gmt;
    let kigen = 3000; //cookieの期限（今回は3000日）
    date1 = new Date();
    date1.setTime(date1.getTime() + kigen*24*60*60*1000);
    //GMT形式に変換
    date_gmt = date1.toGMTString();

    let html_num = window.location.href.split('/').pop().match(/\d*.html/);
    html_num = html_num[0].substring(0, html_num[0].length - 5)

    $('.next-btn').click(function(){
        let next_page = Number(html_num) + 1;
        window.location.href = 'q' + next_page + '.html';
    })
    $('.prev-btn').click(function(){
        let prev_page = Number(html_num) - 1;
        window.location.href = 'q' + prev_page + '.html';
    })

    $('.select-btn').click(function(){
        let id = $(this).attr('id');
        if (id == 'correct') {
            $('#checkAnswer').html("〇正解").attr('class', 'text-success font-weight-bold bg-light p-1 border rounded shadow');
            document.cookie = 'q' + html_num + '=1; expires=' + date_gmt;
        } else {
            $('#checkAnswer').html("×不正解").attr('class', 'text-danger font-weight-bold bg-light p-1 border rounded shadow');
            document.cookie = 'q' + html_num + '=0; expires=' + date_gmt;
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
