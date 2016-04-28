<?php
$pageId=$_POST['pageId'];
$pageNo=$_POST['pageNo'];
if($pageId == "all"){
        @ $db = new mysqli('localhost','root','', 'articles');
        $db->query("SET NAMES 'utf8'");
        if (mysqli_connect_errno()) {
            echo 'Error: Could not connect to database.  Please try again later.';
            exit;
        }
        $startIndex = ($pageNo - 1)*10;
        $query = "select * from article order by date asc";
        $result = $db->query($query);

        $num_results = $result->num_rows;
        if($num_results%10 == 0) $list[0]=$num_results/10;
        else $list[0]=(int)($num_results/10)+1;
        for ($i=0; $i < $num_results; $i++) {
            $row = $result->fetch_assoc();
            $list[($i+1)]=array("articelid"=>$row['articleid'],"likes"=>$row['likes'],"content"=>$row['content'],"views"=>$row['views'],"date"=>$row['date'],"title"=>$row['title']);
        }
        echo json_encode($list);
        $result->free();
        $db->close();
} else if($pageId == 1){
    @ $db = new mysqli('localhost','root','', 'articles');
    $db->query("SET NAMES 'utf8'");
    if (mysqli_connect_errno()) {
        echo 'Error: Could not connect to database.  Please try again later.';
        exit;
    }
    $startIndex = ($pageNo - 1)*10;
    $query = "select * from article order by date asc limit $startIndex,10";
    $result = $db->query($query);

    $num_results = $result->num_rows;
    if($num_results%10 == 0) $list[0]=$num_results/10;
    else $list[0]=(int)($num_results/10)+1;
    for ($i=0; $i < $num_results; $i++) {
        $row = $result->fetch_assoc();
        $list[($i+1)]=array("articelid"=>$row['articleid'],"likes"=>$row['likes'],"content"=>$row['content'],"views"=>$row['views'],"date"=>$row['date'],"title"=>$row['title']);
    }
    echo json_encode($list);
    $result->free();
    $db->close();
}else if($pageId == 2){
    //互联网
}else if($pageId == 3){
    //智能
}else if($pageId == "internet"){
    @ $db = new mysqli('localhost','root','', 'articles');
    $db->query("SET NAMES 'utf8'");
    if (mysqli_connect_errno()) {
        echo 'Error: Could not connect to database.  Please try again later.';
        exit;
    }
    $query = "select * from article where category = 'internet' order by date asc";
    $result = $db->query($query);

    $num_results = $result->num_rows;
    $list[0] = $num_results;
    for ($i=0; $i < $num_results; $i++) {
        $row = $result->fetch_assoc();
        $list[($i+1)]=array("articelid"=>$row['articleid'],"likes"=>$row['likes'],"content"=>$row['content'],"views"=>$row['views'],"date"=>$row['date'],"title"=>$row['title']);
    }
    echo json_encode($list);
    $result->free();
    $db->close();
}else if($pageId == "intelligent"){
    @ $db = new mysqli('localhost','root','', 'articles');
    $db->query("SET NAMES 'utf8'");
    if (mysqli_connect_errno()) {
        echo 'Error: Could not connect to database.  Please try again later.';
        exit;
    }
    $query = "select * from article where category = 'intelligent' order by date asc";
    $result = $db->query($query);

    $num_results = $result->num_rows;
    $list[0] = $num_results;
    for ($i=0; $i < $num_results; $i++) {
        $row = $result->fetch_assoc();
        $list[($i+1)]=array("articelid"=>$row['articleid'],"likes"=>$row['likes'],"content"=>$row['content'],"views"=>$row['views'],"date"=>$row['date'],"title"=>$row['title']);
    }
    echo json_encode($list);
    $result->free();
    $db->close();
}
?>

