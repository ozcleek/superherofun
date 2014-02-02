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

	
	fighterData2.push(wrestlerprofile);

	event.preventDefault();
});




// Validation on text boxes

  $('form').validate({
        rules: {
            firstname: {
                minlength: 3,
                maxlength: 20,
                required: true
            },
            lastname: {
                minlength: 3,
                maxlength: 20,
                required: true
            },
            fightwords: {
                minlength: 3,
                maxlength: 20,
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
         
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
