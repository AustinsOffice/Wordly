<?php
    $temp = json_encode($_POST['data']);
    $myfile = fopen("words.json", "w") or die("Couldn't write to file for some reason. :(");
    fwrite($myfile, $temp);
    fclose($myfile);
?>