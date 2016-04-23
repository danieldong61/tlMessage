<?php
$pageId =$_Get['pageId'];
if($pageId == 1) {
    echo "3";
/*    @ $db = new mysqli('localhost', 'dfr3602dzq', 'C72p?H~xy6A[', 'articles');

    $db->query("SET NAMES 'utf8'");
    if (mysqli_connect_errno()) {
        echo 'Error: Could not connect to database.  Please try again later.';
        exit;
    }

    $query = "select * from article";
    $result = $db->query($query);

    $num_results = $result->num_rows;

    echo "<p>Number of books found: " . $num_results . "</p>";

    for ($i = 0; $i < $num_results; $i++) {
        $row = $result->fetch_assoc();
        echo "<p><strong>" . ($i + 1) . ". articleid: ";
        echo htmlspecialchars(stripslashes($row['articleid']));
        echo "</strong><br />content: ";
        echo stripslashes($row['content']);
        echo "<br />date: ";
        echo stripslashes($row['date']);
        echo "<br />likes: ";
        echo stripslashes($row['likes']);
        echo "<br />title: ";
        echo $row['title'];
        echo "<br />views: ";
        echo stripslashes($row['views']);
        echo "</p>";
    }
    $result->free();
    $db->close();*/
}
?>


