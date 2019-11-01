var obj = JSON.parse($response.body);

obj["subscriptions"] = [
{
	"sticker_free": ["9", "10", "11", "12", "13", "14", "15", "22", "25", "28", "30", "31"],
	"sticker_paid": ["com.earlystart.xmas.unlock", "com.earlystart.aquarium.unlock", "com.earlystart.atthepark.unlock", "com.earlystart.city1.unlock", "com.earlystart.city2.unlock", "com.earlystart.farmanimal.unlock", "com.earlystart.jungle.unlock", "com.earlystart.jurassic.unlock", "com.earlystart.monsterland.unlock", "com.earlystart.robot.unlock", "com.earlystart.food.unlock", "com.earlystart.zoo.unlock", "com.earlystart.lab.unlock", "com.earlystart.arctic.unlock", "com.earlystart.circus.unlock", "com.earlystart.insects.unlock"],
	"xml_id": "23196049",
	"url": "",
	"current_version": 0,
	"products": [{
		"product_id": "com.earlystart.alllanguage"
	}],
	"device_in_licence": [],
	"time_expire": "0",
	"list_message": [{
		"title": "MONKEY STORIES VINH D\u1ef0 \u0110\u1ea0T TOP 1 CH\u01af\u01a0NG TR\u00ccNH GI\u00c1O D\u1ee4C \u0110\u01af\u1ee2C T\u1ea2I V\u1ec0 NHI\u1ec0U NH\u1ea4T T\u1ea0I VI\u1ec6T NAM",
		"message": "Sau r\u1ea5t nhi\u1ec1u n\u1ed7 l\u1ef1c t\u1eeb \u0111\u1ed9i ng\u0169 ph\u00e1t tri\u1ec3n s\u1ea3n ph\u1ea9m v\u00e0 s\u1ef1 gi\u00fap s\u1ee9c h\u1ebft m\u00ecnh c\u1ee7a c\u00e1c b\u1ed1 m\u1eb9, ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc Monkey Stories \u0111\u00e3 ch\u00ednh th\u1ee9c \u0111\u1ea1t TOP 1 ch\u01b0\u01a1ng tr\u00ecnh gi\u00e1o d\u1ee5c \u0111\u01b0\u1ee3c t\u1ea3i v\u1ec1 nhi\u1ec1u nh\u1ea5t t\u1ea1i Vi\u1ec7t Nam.\r\nNh\u00e2n s\u1ef1 ki\u1ec7n \u0111\u1eb7c bi\u1ec7t n\u00e0y, Monkey Junior mu\u1ed1n m\u1eddi b\u1ed1 m\u1eb9 c\u00f9ng l\u1eafng nghe nh\u1eefng chia s\u1ebb c\u1ee7a c\u00e1c b\u1ed1 m\u1eb9 \u0111ang cho con s\u1eed d\u1ee5ng ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc Monkey Stories t\u1ea1i \u0111\u00e2y.",
		"url": "http:\/\/bit.ly\/Video-Trian",
		"created": "1528947895",
		"id": "1",
		"popup": 0,
		"type": 1
	}],
	"is_vn": "1",
	"all_type": 1,
	"is_licence": true,
	"show_pay": false,
	"dictPacketTienTe": {
		"com.earlystart.ltr.1month_sale": "\u0111109,000",
		"com.earlystart.ltr.1year_sale": "\u0111499,000",
		"com.earlystart.ltr.2year_sale": "\u0111699,000",
		"com.earlystart.ltr.4year_sale": "\u01111,199,000",
		"com.earlystart.ltr.6month_sale": "\u0111409,000"
	},
	"dictPrice": {
		"com.earlystart.ltr.1month_sale": 109000,
		"com.earlystart.ltr.1year_sale": 499000,
		"com.earlystart.ltr.2year_sale": 699000,
		"com.earlystart.ltr.4year_sale": 1199000,
		"com.earlystart.ltr.6month_sale": 409000
	},
	"is_show_ads_app": false
}
  ];
$done({body: JSON.stringify(obj)});
