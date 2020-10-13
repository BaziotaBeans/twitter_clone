var textarea = document.getElementById("textarea");
var limitRows = 10;
var messageLastScrollHeight = textarea.scrollHeight;

textarea.oninput = function() {
    var rows = parseInt(textarea.getAttribute("rows"));
    // If we don't decrease the amount of rows, the scrollHeight would show the scrollHeight for all the rows
    // even if there is no text.
    textarea.setAttribute("rows", "1");
    
    if (rows < limitRows && textarea.scrollHeight > messageLastScrollHeight) {
        rows++;
    } else if (rows > 1 && textarea.scrollHeight < messageLastScrollHeight) {
        rows--;
    }
    
    messageLastScrollHeight = textarea.scrollHeight;
    textarea.setAttribute("rows", rows);
};

