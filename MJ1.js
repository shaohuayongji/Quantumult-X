var obj = JSON.parse($response.body);

obj["subscriptions"] = [
  {
	"status": 1,
	"message": "success",
	"data": []
}
  ];
$done({body: JSON.stringify(obj)});
