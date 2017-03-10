<?php
	// header("Access-Control-Allow-Origin: http://a.com"); // 允许a.com发起的跨域请求  
	//如果需要设置允许所有域名发起的跨域请求，可以使用通配符 *  
	header("Access-Control-Allow-Origin: *"); // 允许任意域名发起的跨域请求 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header('Access-Control-Allow-Methods: GET, POST, PUT'); 

	$data = json_decode(file_get_contents('php://input'), true);
	$result = array();

	if($data && $data['username'] && $data['password']){
		if($data['username'] == 'admin' && $data['password'] == '123456'){
			$result['msg'] = '登录成功';
			$result['status'] = true;
		}else{
			$result['msg'] = '用户名或密码不正确';
			$result['status'] = false;
		}
	}else{
		$result['msg'] = '错误请求';
		$result['status'] = false;
	}

	echo json_encode($result);


	