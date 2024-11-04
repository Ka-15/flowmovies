 //ES5
 $.fn.stars = function() {
    return $(this).each(function() {
        var rating = $(this).data("rating");
        var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fas fa-star"></i>');
        var halfStar = ((rating%1) !== 0) ? '<i class="fas fa-star-half-alt"></i>': '';
        var noStar = new Array(Math.floor($(this).data("numStars") + 1 - rating)).join('<i class="far fa-star"></i>');
        $(this).html(fullStar + halfStar + noStar);
    });
}
//ES6
$.fn.stars = function() {
    return $(this).each(function() {
        const rating = $(this).data("rating");
        const numStars = $(this).data("numStars");
        const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
        const halfStar = (rating%1!== 0) ? '<i class="fas fa-star-half-alt"></i>': '';
        const noStar = '<i class="far fa-star"></i>'.repeat(Math.floor(numStars-rating));
        $(this).html(`${fullStar}${halfStar}${noStar}`);
    });
}
$(function(){
    $('.stars').stars();
});
function myFunction() {
    var input, filter, title, i, txtValue;
    input = document.getElementById("srchInput");
    filter = input.value.toUpperCase();
    crd = document.getElementsByClassName("card");
    for (i = 0; i < crd.length; i++) {
        title = crd[i].getElementsByTagName("a")[1];
        hideNr = crd[i].getElementsByTagName("a")[0];
        if (input.value == "") {
          hideNr.style.display = "";
        } else {
          hideNr.style.display = "none"; 
        }
        
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            crd[i].style.display = "";
        } else {
            crd[i].style.display = "none";
        }
    }
}

