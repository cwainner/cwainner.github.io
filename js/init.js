(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var modal = document.getElementById('aboutSectionModal');

    // Get the button that opens the modal
    var btn = document.getElementById("aboutSection");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space