// FighterData2 Array

// var fighterData2 = [ ]

// Fighter Avatars
var fighterAvatars =	"images/Mask5c.jpg";


// First Testing Code
// function Wrestler (firstname, lastname, fightinWords) {
// if (firstname) {this.wrestlerfname = firstname}
// if (lastname)  {this.wrestlerlname = lastname}
// if (fightinWords) {this.wrestlerwords = fightinWords}
// };


// prototype for new Fighters
// Wrestler.prototype = {
// 	wrestlerfname: '' || 'Wrestler',
// 	wrestlerlname: '' || 'Dude',
// 	wrestlerwords: '' || "I hate making quotes."
// };

// calling info for generating the new Fighter on submit
$('.submit').click(function(){
	console.log("Booya");
	var firstname = $('input[name=firstName]').val();
	var lastname = $('input[name=lastName]').val();
	var fightinWords = $('input[name=fightinWords]').val();

	var wrestlerprofile = new Wrestler (firstname,lastname, fightinWords);

	// fighterData2.push(wrestlerprofile);

	event.preventDefault();

	var profiletmpl = _.template ($('#profiletmpl').text());

	$('.right-column').append(profiletmpl(wrestlerprofile))
});

// Second Testing Code
function Wrestler (firstname, lastname, fightinWords) {
this.firstname = firstname;
this.lastname = lastname;
this.fightinWords = fightinWords;
this.nickname = _.sample(fighterNickNames2);
this.avatar = _.sample(fighterAvatars2);
};

// (Begin)Experimenting to get input info to appear
	// var coolerStuff	= function(obj){
	// 	$(".right-column").append('<div class = "panel-heading">'+obj.wrestlerfname+ ' ' +obj.wrestlerlname+'</div>')
	// 	$(".right-column").append('<blockquote><p>'+obj.wrestlerwords+'</p></blockquote>')
	// }

// 	function coolStuff(){
// 	_.each(fighterData2, function(obj){
// 			$(".right-column").prepend('<div class = "panel-heading">'+obj.wrestlerfname+'</div>')
// 			// console.log(obj.title)
// 		})
// }

// coolerStuff(wrestlerprofile);

// (End)Experimenting to get input info to appear



