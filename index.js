/*global $*/

$(() => {
    function getQuote() {
        $.ajax({
            method: "GET",
            url: "https://got-quotes.herokuapp.com/quotes",
            success: function(response) {
                $('#quote').html(response.quote);
                // document.getElementById('quote').innerHTML = response.quote;
                $('#character').html(response.character);
                // document.getElementById('character').innerHTML = response.quote;
            }
        });
    }
    getQuote();
    $('#getQuote').on('click', function(event) {
        getQuote();
    });
})

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));