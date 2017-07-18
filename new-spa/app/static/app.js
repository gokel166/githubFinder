$(document).ready(function() {
    console.log("ready");

    $("form").on("submit", function() {
        console.log("This form has been submitted");

        var valueOne = $('input[name="number-one"]').val()
        var valueTwo = $('input[name="number-one"]').val()

        console.log(valueOne, valueTwo)
        
        $.ajax({
            type: "POST",
            url: "/",
            data: {first: valueOne, second: valueTwo},
            success: function(results) {
                console.log(results);
            },
            error: function(error) {
                console.log(error);
            }
        })
    });

    
});