// Define a variable that holds the return data from our JSON AJAX call
var list;

// Wait until the document is ready for us!
$(document).ready(function() {
    // Start an AJAX call to get the word list from our JSON file
    $.ajax({
        // Path to the JSON file we're fetching
        url: "words.json",
        // Tell jQuery to treat the value as a JSON object (now we don't have to convert it)
        dataType: "json",
        success: function(data) {
            // Upon successfully getting the file, lets store the data in an accessible variable
            list = data;
        }
    });
    
    // Function that is called when the "New Word" button is clicked
    $('.button').click(function() {
        // Store the Type dropdown menu's value in a local variable
        var selectedCategory = $('#type').val();
        // This generates a random number from 0 to the total number of items in the current word category
        var wordIndex = randomRange(0, list[selectedCategory].length-1);
        // After getting an index, we'll fill our html with that word from our word list
        $('#the-word').html(list[selectedCategory][wordIndex]);
        // Now we need to remove that item from our local version of the word list so we can't get duplicates
        delete list[selectedCategory][wordIndex];
        // Delete removed the content of the index, but leaves a gap so we filter the array and remove that gap
        list[selectedCategory] = list[selectedCategory].filter(function(a) { return a !== null; })
        // If there are no more words in the current list after the currently selected one, show a warning
        if (list[selectedCategory].length <= 0)
            $('#the-word').append("<br><small>That's the last of the words in this category!</small>");
    });
    
    // This stuff is for the modify page
    $('.button-modify').click(function() {
        // Store the Type dropdown menu's value in a local variable
        var selectedCategory = $('#type-modify').val();
        // Build an array by splitting the content of the text area based on the newline character (return down)
        if ($('#words-textarea').val() !== "") {
            var temp = $('#words-textarea').val().split("\n");
            // Append the newly created array to the end of the array based on the selected category
            for (var i=0; i < temp.length; i++)
                list[selectedCategory].push(temp[i]);
            // Start an ajax call to create the JSON file using PHP
            $.ajax({
                // The file that handles writting the JSON file
                url: "update-json.php",
                data: {data: list},
                type: "POST",
                success: function(t) {
                    $('#update-info').html(temp.length.toString() + ' word(s) successfully added to the word list.');
                }
            });
        } else {
            $('#update-info').html('The textarea is blank! Please add 1 word per line.');
        }
    });
});

// Simple helper function for generating a random number based on a minumum and maximum value
function randomRange(min,max)
{
    // Stores the generated number based on Math.random function
    var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    // Return the generated number
    return randomNumber;
}