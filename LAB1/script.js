
var items=[""];

function addToCart(){

    items.append(id);
}


$(document).ready(function() {

    $('.sCartB').on('click', function() {
        id=$(this).id;
        addToCart(id);

    })

});
