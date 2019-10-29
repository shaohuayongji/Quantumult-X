var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "getUserInfo";
if(url.indexOf(cons) != -1)
{
 obj["data"]["transactionPackages"]["sku"]=["com.vocabinnews.sub.lifetime"],
 obj["data"]["transactionPackages"]["amountOfDays"]=99991250,
 obj["data"]["transactionPackages"]["lifeTime"]=true,	 
 obj["data"]["transactionPackages"]["flashSale"]=true,
}
$done({body: JSON.stringify(obj)});

// Descriptions
