'strict types'

/* random integer 0-255, from w3schools.com */
function rand_255() {
    return Math.floor(Math.random() * 255);
}

/* set the background-colour style of element with id "colour_button" to a random rbg value */
function random_color() {
    var red   = rand_255();
    var green = rand_255();
    var blue  = rand_255();

    document.getElementById('color_button').setAttribute("style", "background-color: rgb(" +red+ "," +green+ "," +blue+ ")");
}