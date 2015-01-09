<html>
    <head>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="main.css">
        <title>Wordly - A Word Generator for Drawing Games</title>
    </head>
    <body>
        <div class="wrap">
            <h1 class="module">Wordly <small>A word generator designed for drawing games.</small></h1>
            <select name="type" id="type" class="module">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="movies">Movies</option>
            </select>
            <button class="button module">New Word</button>
            <div id="the-word" class="module"></div>
            <footer>Built by <a href="http://www.austinsoffice.com/" title="Visit my site!">AustinsOffice.com</a><br>Get it on GitHub <a href="http://www.austinsoffice.com/" title="Visit my site!">here</a></footer>
        </div>
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="jquery.fittext.js"></script>
        <script type="text/javascript">
            $("#the-word").fitText(1, { minFontSize: '25px', maxFontSize: '90px' });    
        </script>
        <script src="worder.js"></script>
    
    </body>
</html>
