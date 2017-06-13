(function() {

  document.addEventListener("DOMContentLoaded", function() {
    if (window.Clipboard) {
      var selector = "[data-clipboard-target]";
      var $button = document.querySelector(selector);
      var board = new Clipboard(selector);

      board.on("success", function() {
        $button.innerText = "Copied!";
      });
    }
  });

})();
