var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "getUserInfo";
if(url.indexOf(cons) != -1)
{
	obj["subscription_id"]= "590000439824529",
	obj["purchased"]= "2019-10-21T05:44:56.000Z",
	obj["expires_ms"]= 2972241496000,
	obj["expires"]= "2119-10-28T05:44:56.000Z",
	obj["store_key"]= "apple",
	obj["dated_receipt_id"]= "1571636696000_590000439824529",
	obj["receipt_id"]= "590000439824529",
	obj["product_id"]= "com.pumkin.fun.subscription_one_year",
	obj["app_id"]= "com.pumkin.fun",
	obj["is_free_trial"]= true,
	obj["test"]= false,
	obj["app_shortcode"]= "FE",
	obj["purchased_ms"]= 1571636696000,
	obj["type"]= "initial",
	obj["Items"]["latest_expired_receipt_info"]["original_transaction_id"]="590000439824529",
	obj["Items"]["latest_expired_receipt_info"]["transaction_id"]="590000439824529",
	obj["Items"]["latest_expired_receipt_info"]["product_id"]="com.pumkin.fun.subscription_one_year",
	obj["Items"]["latest_expired_receipt_info"]["expires_date_formatted"]="2119-10-28T05:44:56.000Z",
	obj["Items"]["latest_expired_receipt_info"]["purchaseToken"]="590000439824529",
	obj["Items"]["latest_expired_receipt_info"]["expirationTime"]=2972241496000,
}
$done({body: JSON.stringify(obj)});

// Descriptions
