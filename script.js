$(function() {
    'use strict';
    $('[data-toggle="tooltip"]').tooltip();

    $('.select-btn').click(function(){
        let id = $(this).attr('id');
        if (id == 'correct') {
            $('#checkAnswer').html("〇正解").attr('class', 'text-success font-weight-bold bg-light p-1 border rounded shadow');
        } else {
            $('#checkAnswer').html("×不正解").attr('class', 'text-danger font-weight-bold bg-light p-1 border rounded shadow');
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
