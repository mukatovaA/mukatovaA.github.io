function coloring(element){
	element.style.color = "#969799";
}
function coloringBack(element) {
	element.style.color = "black";
}


function opacityChanging(element){
	element.style.opacity = "0.93";
}
function opacityBack(element){
	element.style.opacity = "1";
}


function pages(element) {
	var button = element.innerHTML;

    if(button == "catalogue"){
		document.getElementById("titleName").innerHTML = "Catalogue";
		document.getElementById("title2").innerHTML = "Choose your favorite";
		document.querySelector(".row2").style.display = "none";
		document.querySelector(".row1").style.display = "none";
		document.querySelector(".contactInfo").style.display = "none";
		document.querySelector(".catalog").style.display = "flex";
		document.querySelector(".pageChanging").style.display = "none";
		document.querySelector(".divider").style.display = "none";
		document.querySelector(".howToOrder").style.display = "none";
		document.getElementById("mainPic").src = "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83074477_2467042826957763_2387692129249466991_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=92yD1eWezdQAX_3Qrcu&tp=19&oh=a89028083bd829f1b9c4f4d2f504c781&oe=5FD343FD"; 
		document.getElementById("rightSided").src = "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118730530_341172027074079_5734112326258154819_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=y9DS1UsUUjAAX-y4nFu&tp=19&oh=36434d9969c430be08670067056ed20c&oe=5FD66618";
		document.getElementById("article").innerHTML = "A simple visit to the coffee shop can tell you everything you need to know about how many variants of coffee there are you couldnt count them all even if you tried. There are so many different brews, beans, and types, that you probably wont be able to taste them in one lifetime. ";
	}

	else if(button == "ordering"){
		document.getElementById("titleName").innerHTML = "Online ordering";
		document.querySelector(".row2").style.display = "none";
		document.querySelector(".row1").style.display = "flex";
		document.querySelector(".contactInfo").style.display = "none";
		document.querySelector(".catalog").style.display = "none";
		document.querySelector(".pageChanging").style.display = "none";
		document.querySelector(".divider").style.display = "none";
		document.querySelector(".howToOrder").style.display = "block";
		document.getElementById("title2").innerHTML = "How to order?";
		document.getElementById("mainPic").src = "https://i.pinimg.com/originals/ad/14/40/ad1440593673a6b4cb0a0525da9948e4.jpg"; 
		document.getElementById("rightSided").src = "https://scontent-arn2-2.xx.fbcdn.net/v/t31.0-8/14917270_1822799907967010_5451957912757024410_o.jpg?_nc_cat=108&ccb=2&_nc_sid=9267fe&_nc_ohc=IbxT3oDuGgsAX83xz1h&_nc_ht=scontent-arn2-2.xx&oh=a7922810b10b070e91d881467b9ff6c3&oe=5FC7E820";
		document.getElementById("article").innerHTML = "A simple visit to the coffee shop can tell you everything you need to know about how many variants of coffee there are  you couldnt count them all even if you tried. ";
	}

	else if(button == "contacts"){
		document.getElementById("titleName").innerHTML = "Contacts";
		document.querySelector(".row1").style.display = "none";
		document.querySelector(".row2").style.display = "none";
		document.querySelector(".catalog").style.display = "none";
		document.querySelector(".pageChanging").style.display = "none";
		document.querySelector(".divider").style.display = "none";
		document.querySelector(".howToOrder").style.display = "none"; 
		document.querySelector(".contactInfo").style.display = "block";
 	}
}

function cataloguePages(element){

	var pageNum = element.innerHTML;

	if(pageNum == '①'){
		document.querySelector("page1").style.display = "flex";
		document.querySelector("page2").style.display = "none";
	}

	else if(pageNum == '②'){
		document.querySelector("page1").style.display = "none";
		document.querySelector("page2").style.display = "flex";
	}

}


function popUp(){
	var login = document.getElementById("myButton").innerHTML;

	if(login == "log in"){

		document.querySelector(".popUp").style.display = "flex";
		$(".popUp").animate({opacity : "1"}, "slow");
		document.body.style.overflow = "hidden";
	}

	else
		logout();
}

function login(email){

	document.getElementById("user_email").innerHTML = "✉  " + email  ;
	document.getElementById("emailOf").innerHTML = "✉  " + email;
	document.getElementById("suggestion").innerHTML = "log out to switch your account";
	document.getElementById("myButton").innerHTML = "log out";
	close_popUp();
}

function logout() {
	document.querySelector(".user_prof").style.display = "none";
	document.getElementById("myButton").innerHTML = "log in";
	document.getElementById("suggestion").innerHTML = "log in for your convenience !";
}

function close_popUp(){
	$(".popUp").animate({opacity: "0"}, "slow");

	document.querySelector(".popUp").style.display = "none";
	document.body.style.overflow = "scroll";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
}

function cancel_comment(){
	document.getElementById("comment").innerHTML = "add your comment";
}

function commenting(comment, user_email) {
	document.getElementById("enteredFB").innerHTML = comment;
	document.getElementById("comment").value = "";
	document.querySelector(".finCom").style.display = "flex";
}

function initMap() {
	var options = {
		center : { lat : 43.61102, lng : -116.20788 },
		zoom : 15.5,
	};

	var map = new google.maps.Map(document.getElementById("map"), options);

	var icon = {
		url : "https://image.flaticon.com/icons/png/512/1183/1183093.png",
		scaledSize : new google.maps.Size(35, 35)
	};

	var marker = new google.maps.Marker({
		position : { lat : 43.61153, lng : -116.207879 },
		map : map,
		icon : icon
	});

    var infowindow = new google.maps.InfoWindow({
		content : 'Bake & Shake coffeeshop'
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});



	var icon2 = {
		url : "https://image.flaticon.com/icons/png/512/8/8137.png",
		scaledSize : new google.maps.Size(35, 35)
	};

	var marker2 = new google.maps.Marker({
		position : { lat : 43.61011, lng : -116.21039 },
		map : map,
		icon : icon2
	});

	var infowindow2 = new google.maps.InfoWindow({
		content : 'About 5 minutes from the Boise River'
	});
	marker2.addListener('click', function() {
		infowindow2.open(map, marker2);
	});




	var icon3 = {
		url : "https://icon-library.com/images/museum-icon-vector/museum-icon-vector-7.jpg",
		scaledSize : new google.maps.Size(35, 35)
	};

	var marker3 = new google.maps.Marker({
		position : { lat : 43.60956, lng : -116.20504 },
		map : map,
		icon : icon3
	});

	var infowindow3 = new google.maps.InfoWindow({
		content : 'About 4 minutes from Boise Art Museum'
	});
	marker3.addListener('click', function() {
		infowindow3.open(map, marker3);
	});


	var lines = [];
	lines.push(new google.maps.LatLng(43.61153, -116.207879));//1	
	lines.push(new google.maps.LatLng(43.61138, -116.20756));//2
	lines.push(new google.maps.LatLng(43.61103, -116.20786));//3
	lines.push(new google.maps.LatLng(43.61125, -116.20836));//4
    lines.push(new google.maps.LatLng(43.61134, -116.20875));//5
    lines.push(new google.maps.LatLng(43.61131, -116.20921));//6
    lines.push(new google.maps.LatLng(43.61013, -116.20936));//7
    lines.push(new google.maps.LatLng(43.61042, -116.21009));//8
    lines.push(new google.maps.LatLng(43.61011, -116.21039));
    
    lines.push(new google.maps.LatLng(43.61042, -116.21009));//8
    lines.push(new google.maps.LatLng(43.61013, -116.20936));//7
    lines.push(new google.maps.LatLng(43.61131, -116.20921));//6
    lines.push(new google.maps.LatLng(43.61134, -116.20875));//5
    lines.push(new google.maps.LatLng(43.61125, -116.20836));//4
    lines.push(new google.maps.LatLng(43.61103, -116.20786));//3
    lines.push(new google.maps.LatLng(43.61138, -116.20756));//2
    lines.push(new google.maps.LatLng(43.61153, -116.207879));//1

	lines.push(new google.maps.LatLng(43.61138, -116.20756));//1
	lines.push(new google.maps.LatLng(43.61103, -116.20786));//2
	lines.push(new google.maps.LatLng(43.61044, -116.20667));//3
	lines.push(new google.maps.LatLng(43.61025, -116.20636));//4
	lines.push(new google.maps.LatLng(43.61021, -116.20620));//5
	lines.push(new google.maps.LatLng(43.61027, -116.20580));//6
	lines.push(new google.maps.LatLng(43.61012, -116.20576));//7
	lines.push(new google.maps.LatLng(43.61008, -116.20574));//8
	lines.push(new google.maps.LatLng(43.61008, -116.20569));//9
	lines.push(new google.maps.LatLng(43.61009, -116.20537));//10
	lines.push(new google.maps.LatLng(43.61008, -116.20526));//11
	lines.push(new google.maps.LatLng(43.61005, -116.20512));//12
	lines.push(new google.maps.LatLng(43.60998, -116.20494));//13
	lines.push(new google.maps.LatLng(43.60988, -116.20479));//14
	lines.push(new google.maps.LatLng(43.60956, -116.20504));//15
	lines.push(new google.maps.LatLng(43.60988, -116.20479));//14
	lines.push(new google.maps.LatLng(43.60998, -116.20494));//13
	lines.push(new google.maps.LatLng(43.61005, -116.20512));//12
	lines.push(new google.maps.LatLng(43.61008, -116.20526));//11
	lines.push(new google.maps.LatLng(43.61009, -116.20537));//10
	lines.push(new google.maps.LatLng(43.61008, -116.20569));//9
	lines.push(new google.maps.LatLng(43.61008, -116.20574));//8
	lines.push(new google.maps.LatLng(43.61012, -116.20576));//7
	lines.push(new google.maps.LatLng(43.61027, -116.20580));//6
	lines.push(new google.maps.LatLng(43.61021, -116.20620));//5
	lines.push(new google.maps.LatLng(43.61025, -116.20636));//4
	lines.push(new google.maps.LatLng(43.61044, -116.20667));//3
	lines.push(new google.maps.LatLng(43.61103, -116.20786));//2
	lines.push(new google.maps.LatLng(43.61138, -116.20756));//1
	lines.push(new google.maps.LatLng(43.61153, -116.207879));//1

	var lineOptions = {
		path : lines, 
		strokeColor : "#966986",
		strokeWeight : 2
	};

	var polyline = new google.maps.Polyline(lineOptions);
	polyline.setMap(map);

}

topScroll = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
        topScroll.style.display = "block";
    else 
        topScroll.style.display = "none";
    
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}