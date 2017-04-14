<?php 
error_reporting(1);

$mysqli = new mysqli('192.168.38.104', 'lty', '123456', 'suouna') or die('数据库连接失败');

query("SET NAMES UTF8");

function query($sql) {
  global $mysqli;
  return $mysqli -> query($sql);
}

function queryRow($sql) {
  $handle = query($sql);
  return $handle -> fetch_assoc();
}

function queryData($sql) {
  $handle = query($sql);
  $data = [];
  while ($row = $handle->fetch_assoc()) {
    array_push($data, $row);
  }
  return $data;
}

function res($data) {
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
  exit;
}

function err($code, $msg) {
  echo json_encode(array(
    'code'=>$code,
    'msg'=>$msg
  ), JSON_UNESCAPED_UNICODE);
  exit;
}