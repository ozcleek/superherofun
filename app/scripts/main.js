// FighterData2 Array

var fighterData2 = [ ]

// Testing Code
function Wrestler (firstname, lastname, fightinWords) {
if (firstname) {this.wrestlerfname = firstname}
if (lastname)  {this.wrestlerlname = lastname}
if (fightinWords) {this.wrestlerwords = fightinWords}
};


// prototype for new Fighters
Wrestler.prototype = {
	wrestlerfname: '' || 'Wrestler',
	wrestlerlname: '' || 'Dude',
	wrestlerwords: '' || "I hate making quotes."
};

// calling info for generating the new Fighter on submit
$('.submit').click(function(){
	console.log("Booya");
	var firstname = $('#firstNameInput').val();
	var lastname = $('#lastNameInput').val();
	var fightinWords = $('#fightinWords').val();

	var wrestlerprofile = new Wrestler (firstname,lastname, fightinWords);


	event.preventDefault();

    var profiletmpl = _.template ($('#profiletmpl').text());

    $('.right-column').append(profiletmpl({data:wrestlerprofile}));
});




