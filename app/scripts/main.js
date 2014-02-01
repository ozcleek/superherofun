// Testing Code

var figherData2 = []

function Wrestler (firstname, lastname, fightinWords) {

	if (firstname) {this.wrestlerfname}
}









function Wrestler (firstname, lastname, fightnw, wyr1, wyr2, wyr3) {
if (firstname) {this.wrestlerfname = firstname}
if (lastname)  {this.wrestlerlname = lastname}
}

$('.submit').click(function() {

	var firstName = $('firstName').val();
	var lastName = $('lastName').val();
	var fightinWords = $('fightinWords').val();
	var wouldYouRather1 = $('wouldYouRather1').val();
	var wouldYouRather2 = $('wouldYouRather2').val();
	var wouldYouRather3 = $('wouldYouRather3').val();

	var wrestlerProf = new Wrestler(firstname, lastName, fightinWords, wouldYouRather1, wouldYouRather2, wouldYouRather3);
} 


// -------- extra --------


Wrestler.prototype = {
wrestlerfname: '' || 'Wrestler',
wrestlerlname: '' || 'Dude',

}

$('.submit').click(function(){
console.log('New Wrestler Added To The Cage!');

var firstname = $('#firstNameInput').val();
var lastname = $('#secondNameInput').val();

var wrestlerprofile = new Wrestler (firstname,lastname);

fighterData.push(wrestlerprofile);

});



// Validation on text boxes

 $('form').validate({
        rules: {
            firstname: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            lastname: {
                minlength: 3,
                maxlength: 15,
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
