$(document).ready(function(){
    $('p').css('background-color','indigo')

    $('.container p:odd').css({
        'background-color':'blue',
        'font-size': '18px',
        'font-family': 'arail',
        'font-weight': 'bold'


    })

    $('ul li:even').css('color','red')
    // $('ul li').text('color')
    // $('ul li:first-child').css('color','red')
    

//  $('.box').hover(function(){
//      alert('You have hover me')

//  })
//  $('.box').mousemove(function(){
//     alert('You have moved me')

// })

$('.box').click(function(){
    $('.box').css({
        'background-color':'red',
        'color':'white'
    })
    // alert('You have clicked me')

})



})