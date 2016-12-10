$(document).ready(function(){
 

  $("#accordion").accordion({
    heightStyle:"content",collapsible: true, active: false });

// $(".text_process").click(function(){

//     $.ajax({
//         url: 'https://montanaflynn-l33t-sp34k.p.mashape.com/encode', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
//         type: 'GET', // The HTTP Method
//         data: {sentence: $("#leet_input").val()}, // Additional parameters here
//         datatype: 'json',
//         success: function (data) {
//             $("#output").html(data);
//         },
//         error: function (err) {
//             alert(err);
//         },
//         beforeSend: function (xhr) {
//             xhr.setRequestHeader("X-Mashape-Authorization", "uMAFSzpIuumshQK8VpnGwka1XnRwp1FgNTSjsnAJ30MUyxHlRO"); // Enter here your Mashape key
//         }
//     });


// });


$(".text_process").click(function(){

    var input = $("#leet_input").val();

    console.log(input);
  
    var change = input.split(' ');
    var arrInput = change.join("+");
  
    console.log(arrInput);
  
    $.ajax({
        url: 'https://montanaflynn-l33t-sp34k.p.mashape.com/encode?text=' + arrInput, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        datatype: 'json',
        success: function (data) {
            $("#output").html(data.responseText);
            console.log(data.responseText);
        },
        error: function (err) {
            console.log(err);
            $("#output").html(err.responseText);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "uMAFSzpIuumshQK8VpnGwka1XnRwp1FgNTSjsnAJ30MUyxHlRO"); // Enter here your Mashape key
        }
    });

});

    // $("button").click(function(){
    //     $("h3").hide();
    // });

    // $("img").click(function(){
    //     $("h3").show();
    // });

    // $("button").click(function(){
    //     $("h5").hide();
    // });

    // $("img").click(function(){
    //     $("h5").show();
    // });


});
