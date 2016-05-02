<?php
$pageId=$_POST['pageId'];
$pageNo=$_POST['pageNo'];

@ $db = new mysqli('localhost','root','', 'articles');
$db->query("SET NAMES 'utf8'");
if (mysqli_connect_errno()) {
    echo 'Error: Could not connect to database.  Please try again later.';
    exit;
}
if($pageId == "all"){
    $query = "select * from article order by date asc";
}else if($pageId == "internet"){
    $query = "select * from article where category = 'internet' order by date asc";
}else if($pageId == "intelligent"){
    $query = "select * from article where category = 'intelligent' order by date asc";
}else if($pageId == 1){
    $startIndex = ($pageNo - 1)*10;
    $query = "select * from article order by date asc limit $startIndex,10";
}else if($pageId == 2){
    $startIndex = ($pageNo - 1)*10;
    $query = "select * from article where category = 'internet' order by date asc limit $startIndex,10";
}else if($pageId == 3){
    $startIndex = ($pageNo - 1)*10;
    $query = "select * from article where category = 'intelligent' order by date asc limit $startIndex,10";
}else if($pageId == "oneArticle"){
    $query = "select * from article where articleid = 1";
}
$result = $db->query($query);
$num_results = $result->num_rows;
$list[0] = $num_results;
if($num_results>10) $num_results = 10;
for ($i=0; $i < $num_results; $i++) {
    $row = $result->fetch_assoc();
    $list[($i+1)]=array("articelid"=>$row['articleid'],"likes"=>$row['likes'],"brief"=>$row['brief'],"content"=>$row['content'],"views"=>$row['views'],"date"=>$row['date'],"title"=>$row['title'],"picture"=>$row['picture']);
}
echo json_encode($list);
$result->free();
$db->close();
?>

