'use strict'

var userName = prompt("Hello, what is your name?", "Name");

if(userName === null || userName === "")
    document.write('<h2>Well then, you shall henceforth and forevermore be known as "Bob", welcome to Earth.</h2>');
else {
    if(userName === "Name") {
        var c = confirm('Are you sure your name is really "Name"?');
        if(c)
            document.write("<h2>What an interesting name you have, Name!</h2>");
       else
            document.write("<h2>Hack the planet!</h2>");
    } else if(userName === 'Mark' || userName === 'mark')
         document.write("<h2>Hello Creator "+userName+"!</h2>");
    else
         document.write("<h2>Hello there "+userName+"!</h2>");
}