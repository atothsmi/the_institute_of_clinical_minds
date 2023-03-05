var names = []
var firstNames = true;

function look(form){
    if (form.names.value == 'done'){
        $('#searchAppointment').hide();
        $('#doneGame').show();
    }
    else {
        $('#searchAppointment').hide();
        var names = form.names.value;
        $('#fakeSearch').show();
        $('#inputedNames').append(names);
        $('#checkInputs').show();
    }
    
}

function testInputs(form) {
    if (form.answer.value == "answer"){
        $('#incorrect').hide();
        $('#checkInputs').hide();
        $('#fakeSearch').hide();
        $('#doneInputs').show();
    }
    else {
        $('#incorrect').show();
    }
    
}