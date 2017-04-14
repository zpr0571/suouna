 <?php
  require '../../php/common.php';
  header('Content-Type:application/json');
  switch ($_POST['a']) {
    case 'enroll':
    // 注册操作
    if(!$_POST['uname'] || !$_POST['password'] || !$_POST['iphone']){
      // err(1,'参数不全');
       echo(json_encode(['success'=>false,'msg'=>'请完善信息!']));
      exit;
    }
    $row = queryRow("SELECT id FROM users WHERE uname='".$_POST[uname]."'");
    if($row['id']){
       echo(json_encode(['success'=>false,'msg'=>'该用户名已存在!']));
      // err(2,'用户名已存在！');
      exit;
    }
    $name=$_POST['uname'];
    $password=$_POST['password'];
    $iphone=$_POST['iphone'];
    $sql = "INSERT INTO users (
      uname,password,iphone) VALUES ('$name','$password','$iphone')";
    query($sql) or die(err(1,'数据插入失败'));
    echo(json_encode(['success'=>true,'msg'=>'注册成功！']));
    break;

    case 'login' :
    if (!$_POST['uname'] || !$_POST['password']){
      err(1,'参数不全');
      exit;
    }

    $row = queryRow("SELECT id FROM users WHERE uname='{$_POST[uname]}'");
    if(!$row['id']){
      // err(1,'用户名不存在！');
      echo(json_encode(['success'=>false,'msg'=>'该用户不存在!']));
      exit;
    }
    $row = queryRow("SELECT * FROM users WHERE uname='{$_POST['uname']}' AND password='{$_POST['password']}' LIMIT 1");
    if (!$row['id']){
      // err(2,'密码不正确');
      echo(json_encode(['success'=>false,'msg'=>'用户名或密码不存在!']));
      exit;
    }
    res($row);
    break;
  }
 ?>