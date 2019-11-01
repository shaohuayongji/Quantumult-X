
var obj = JSON.parse($response.body);

obj["subscriptions"] = [
{
	"status": "success",
	"message": "",
	"code": 200,
	"data": {
		"app_id": 2,
		"app_name": "Monkey Junior",
		"app_ver": 24,
		"is_licence": true,
		"country_code": "vi-VN",
		"group_server": [8, 11, 4],
		"lang": [{
			"code": "vi-VN",
			"name": {
				"vi-VN": "Ti\u1ebfng Vi\u1ec7t",
				"en-US": "Ti\u1ebfng Anh"
			}
		}, {
			"code": "en-US",
			"name": {
				"vi-VN": "Vietnamese",
				"en-US": "English"
			}
		}],
		"use_url": "http:\/\/behocchu.com",
		"authen_device": false,
		"pay_use_url": "http:\/\/pay.monkeystories.net",
		"coupon_code": "STORIES"
	}
}
  ];
$done({body: JSON.st
