var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "getUserInfo";
if(url.indexOf(cons) != -1)
{
 obj={
	"currency": "USD",
	"subscription_id": "590000439824529",
	"purchased": "2019-10-21T05:44:56.000Z",
	"expires_ms": 2972241496000,
	"expires": "2119-10-28T05:44:56.000Z",
	"store_key": "apple",
	"app_version": "20.4.2",
	"dated_receipt_id": "1571636696000_590000439824529",
	"receipt_id": "590000439824529",
	"product_id": "com.pumkin.fun.subscription_one_year",
	"app_id": "com.pumkin.fun",
	"is_free_trial": true,
	"test": false,
	"app_shortcode": "FE",
	"price": 0,
	"purchased_ms": 1571636696000,
	"type": "initial",
	"Items": [{
		"latest_expired_receipt_info": {
			"original_transaction_id": "590000439824529",
			"transaction_id": "590000439824529",
			"product_id": "com.pumkin.fun.subscription_one_year",
			"expires_date_formatted": "2119-10-28T05:44:56.000Z",
			"purchaseToken": "590000439824529",
			"expirationTime": 2972241496000
		}
	}]
} 
}
$done({body: JSON.stringify(obj)});

// Descriptions
