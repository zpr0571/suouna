<?php 
require 'common.php';
$z_id = $_REQUEST['id'];
$c_id = $_REQUEST['cid'];
switch ($_REQUEST['a']) { 
	case '查':
	 res(queryData("SELECT * FROM data WHERE t_id=1 || t_id=2 || t_id=3"));
	 break;
	case '视频':
	 res(queryData("SELECT * FROM data WHERE t_id=4 || t_id=5 || t_id=6"));
	 break;
	case '婚纱':
	 res(queryData("SELECT * FROM data WHERE t_id=7"));
	 break;
	case '礼服':
	 res(queryData("SELECT * FROM data WHERE t_id=8"));
	 break;
	case '分':
	 res(queryData("SELECT * FROM data WHERE t_id = $z_id"));
	 break;
	case '详情':
	 res(queryData("SELECT * FROM detail WHERE f_id = $z_id"));
	 break;
	 case '收藏':
	 res(queryData("UPDATE data SET collection = 1 WHERE id = $c_id"));
	 break;
	  case '取消收藏':
	 res(queryData("UPDATE data SET collection = 0 WHERE id = $c_id"));
	 break;
	case '收藏查询':
	  res(queryData("SELECT * FROM data WHERE collection = 1"));
}

 ?>