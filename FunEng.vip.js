var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "getUserInfo";
if(url.indexOf(cons) != -1)
{
 obj={"data": {
		"transactionPackages": [{
			"sku": "com.vocabinnews.sub.30days",
			"amountOfDays": 90,
			"lifeTime": true,
			"flashSale": true
		}, {
			"sku": "com.vocabinnews.sub.365days",
			"amountOfDays": 365,
			"lifeTime": true,
			"flashSale": true
		}, {
			"sku": "com.vocabinnews.sub.180days",
			"amountOfDays": 9999991250,
			"lifeTime": true,
			"flashSale": true
		}, {
			"sku": "com.vocabinnews.sub.lifetime",
			"amountOfDays": 99991250,
			"lifeTime": true,
			"flashSale": true
		}]
	},
	"session": null
}   
}
$done({body: JSON.stringify(obj)});

// Descriptions
