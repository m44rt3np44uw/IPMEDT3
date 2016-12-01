$(document).ready(function () {

    var echt = document.getElementById('echt');

    var $echt   = $('#echt'),
        $nep    = $('#nep');

    $nep.attr('visible', false);
    $echt.attr('visible', true);

    echt.addEventListener('mouseenter', function () {
        $nep.attr('visible', true);
        $echt.attr('visible', false);
    })
});