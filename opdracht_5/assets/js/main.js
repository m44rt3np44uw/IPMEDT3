$(document).ready(function() {

    for(var i = 1; i<4; i++) {

        // events
        document.getElementById('box' + i).addEventListener('mouseenter', function () {

            $(this).attr('color', 'red');
            getData(this);
        });

        document.getElementById('box' + i).addEventListener('mouseleave', function () {
            $(this).attr('color', 'blue');
        });
    }

    function getData(data) {

        var dataString, ranNum;

        switch (data.id)
        {
            case "box1":
                ranNum = Math.floor((Math.random() * 90) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();
                break;

            case "box2":

                ranNum = Math.floor((Math.random() * 40) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();
                break;

            case "box3":
                ranNum = Math.floor((Math.random() * 7) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();

                break;
        }

        $.ajax({
            url: 'https://swapi.co/api' + dataString,
            method: 'GET',
            dataType: 'json',
            success: function(msg) {
                var x = msg['name'] !== undefined ? msg['name'] : msg['title'];

                $('#text').attr('text', 'text: ' + x)
            }
        });
    }

});