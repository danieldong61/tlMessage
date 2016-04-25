<?php
$backValue=$_POST['pageId'];
if($backValue == 1){
    @ $db = new mysqli('localhost','root','', 'articles');
    $db->query("SET NAMES 'utf8'");
    if (mysqli_connect_errno()) {
        echo 'Error: Could not connect to database.  Please try again later.';
        exit;
    }

    $query = "select * from article";
    $result = $db->query($query);

    $num_results = $result->num_rows;

    for ($i=0; $i <$num_results; $i++) {
        $row = $result->fetch_assoc();
        $list[$i]=array("articelid"=>$row['articleid'],"likes"=>$row['likes'],"content"=>$row['content'],"views"=>$row['views'],"date"=>$row['date'],"title"=>$row['title']);
    }
    echo json_encode($list);
    $result->free();
    $db->close();
}else{
    echo "none";
}
?>

