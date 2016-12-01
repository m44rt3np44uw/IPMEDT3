$(document).ready(function() {

    // Elements met ID's.
    var box = document.getElementById('box');
    var sphere = document.getElementById('sphere');
    var box_parent = document.getElementById('box_parent');

    // Animatie
    var animation_box_parent = '<a-animation attribute="rotation" dur="10000" fill="forwards" to="0 360 0" repeat="indefinite"></a-animation>';
    var animation_isset = false;

    box.addEventListener('mouseenter', function () {
        $(box).attr('width', 100);

        if(!animation_isset) {
            $(box_parent).append(animation_box_parent);
            animation_isset = true;
        }
    });

    box.addEventListener('mouseleave', function () {
        $(box).attr('width', 5)
    });

    sphere.addEventListener('mouseenter', function () {
        $(this).remove();
    })

});