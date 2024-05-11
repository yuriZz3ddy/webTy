let addnn = document.getElementById("perfilAdd");
let imageAdd;




fetch("https://japi.rest/discord/v1/user/933891035216613446", {
	method: "GET"
})
.then(response => response.json())
.then(data => {
	var a = data.data
	var username = a.global_name
	var name = a.username
	var ids = a.id
	var avatar = a.avatar
	var size = ".png?size=1024";
	var addUrl = "https://cdn.discordapp.com/avatars/";
	
	var avatar_url = addUrl + ids + "/" + avatar + size
	console.log(avatar_url)
	main(username, name)
	imageAdd = document.getElementById("imgAdd")
	imageAdd.src = avatar_url;
	imageAdd.style.borderRadius = "230px";
})
.catch(err => {
	console.error(err)
});

function main(username, name) {
		addnn = document.getElementById("perfilAdd");
		addnn.innerHTML = "";
		var addEdit = `
		<div class ="addT">
		<img id ="imgAdd" width ="230" height ="230">
<div class ="user">
<p class ="user_log">${username}</p>
<h1>@${name}</h1>
</div>
<div class ="itemsAll"</div>
</div>
		`
	addnn.innerHTML = addEdit;
	}
	
	
	
	
	
	
	
	
	
	/*
	
	<div>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><img style="display: block; margin-left: auto; margin-right: auto;" id="iconAdd-${num}" alt="" width="120" height="120" />icon</td>
<td style="width: 25%;">
<h3>${titleAdd}</h3>
<h4>${textAdd}</h4>
</td>
</tr>
</tbody>
</table>
</div>
	
	
	*/