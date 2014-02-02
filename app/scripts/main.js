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

// Would You Rather Question One
 $("#set1option1").click(function () {
 
	$('input:radio[name=optionsRadios1]:nth(0)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[0].checked = true;
    });

 $("#set1option2").click(function () {
 
	$('input:radio[name=optionsRadios1]:nth(1)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[1].checked = true;
    });

 $("#set1option3").click(function () {
 
	$('input:radio[name=optionsRadios1]:nth(2)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[2].checked = true;
    });

// Would You Rather Question Two
 $("#set2option1").click(function () {
 
	$('input:radio[name=optionsRadios2]:nth(0)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[0].checked = true;
    });

 $("#set2option2").click(function () {
 
	$('input:radio[name=optionsRadios2]:nth(1)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[1].checked = true;
    });

 $("#set2option3").click(function () {
 
	$('input:radio[name=optionsRadios2]:nth(2)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[2].checked = true;
    });

// Would You Rather Question Three
 $("#set3option1").click(function () {
 
	$('input:radio[name=optionsRadios3]:nth(0)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[0].checked = true;
    });

 $("#set3option2").click(function () {
 
	$('input:radio[name=optionsRadios3]:nth(1)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[1].checked = true;
    });

 $("#set3option3").click(function () {
 
	$('input:radio[name=optionsRadios3]:nth(2)').attr('checked',true);
	//$('input:radio[name=optionsRadios1]')[2].checked = true;
    });


// calling info for generating the new Fighter on submit
$('.submit').click(function(){
	console.log("Booya");
	var firstname = $('input[name=firstName]').val();
	var lastname = $('input[name=lastName]').val();
	var fightinWords = $('input[name=fightinWords]').val();
	var ratherfirst = $('input:radio[name=optionsRadios1]:checked').val();
	var rathersecond = $('input:radio[name=optionsRadios2]:checked').val();
	var ratherthird = $('input:radio[name=optionsRadios3]:checked').val();

	var wrestlerprofile = new Wrestler (firstname,lastname, fightinWords, ratherfirst, rathersecond, ratherthird);

	// fighterData2.push(wrestlerprofile);

	event.preventDefault();

	var profiletmpl = _.template ($('#profiletmpl').text());

	$('.right-column').append(profiletmpl(wrestlerprofile))
});

// Second Testing Code
function Wrestler (firstname, lastname, fightinWords, ratherfirst, rathersecond, ratherthird) {
this.firstname = firstname;
this.lastname = lastname;
this.fightinWords = fightinWords;
this.nickname = _.sample(fighterNickNames2);
this.avatar = _.sample(fighterAvatars2);
this.ratherfirst = ratherfirst;
this.rathersecond = rathersecond;
this.ratherthird = ratherthird;
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



