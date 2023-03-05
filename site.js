


function look(form){
    if (form.names.value == 'done'){
        $('#searchAppointment').hide();
        $('#doneGame').show();
    }
    else {
        var inputs = [form.names.value, form.lname.value, form.lname2.value, form.hist.value]
        var outputs = [$('#inputedNames'), $('#inputedlname'), $('#inputedlname2'), $('#inputedHist')]

        $('#searchAppointment').hide();
        for (let i = 0; i < inputs.length; i++){
            outputs[i].append(inputs[i])
        }
        $('#fakeSearch').show();
        $('#checkInputs').show();
    }
    
}

function testInputs(form) {
    if (form.answer.value == "Yes"){
        $('#incorrect').hide();
        $('#checkInputs').hide();
        $('#fakeSearch').hide();
        $('#doneInputs').show();
    }
    else {
        $('#incorrect').show();
    }
    
}