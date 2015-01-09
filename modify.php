<html>
    <head>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="main.css">
        <title>Wordly - A Word Generator for Drawing Games</title>
    </head>
    <body>
        <div class="wrap">
            <h1 class="module">Wordly <small>A word generator designed for drawing games.</small></h1>
                <select name="type-modify" id="type-modify" class="module">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="movies">Movies</option>
                </select>
                <textarea class="module" name="words" id="words-textarea"></textarea>
                <button id="submit" class="button-modify module">Save List</button>
            <div id="update-info" class="module"></div>
            <footer>Built by <a href="http://www.austinsoffice.com/" title="Visit my site!">AustinsOffice.com</a><br>Check out the code <a href="http://www.austinsoffice.com/" title="Visit my site!">here</a></footer>
        </div>
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="worder.js"></script>
    
    </body>
</html>

