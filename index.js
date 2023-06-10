$("#clearButton").on("click", () => {
    $("#textField").val("");
});

function setValue(value) {
    switch (value){
        case 1: $("#textField").val($("#textField").val()+"1"); break;
        case 2: $("#textField").val($("#textField").val()+"2"); break;
        case 3: $("#textField").val($("#textField").val()+"3"); break;
        case 4: $("#textField").val($("#textField").val()+"4"); break;
        case 5: $("#textField").val($("#textField").val()+"5"); break;
        case 6: $("#textField").val($("#textField").val()+"6"); break;
        case 7: $("#textField").val($("#textField").val()+"7"); break;
        case 8: $("#textField").val($("#textField").val()+"8"); break;
        case 9: $("#textField").val($("#textField").val()+"9"); break;
        case 0: $("#textField").val($("#textField").val()+"0"); break;
        case "+": $("#textField").val($("#textField").val()+"+"); break;
        case "-": $("#textField").val($("#textField").val()+"-"); break;
        case "*": $("#textField").val($("#textField").val()+"*"); break;
        case "/": $("#textField").val($("#textField").val()+"/"); break;
        case ".": $("#textField").val($("#textField").val()+"."); break;
        case "=": calcAndShowResult($("#textField").val()); break;

    }

}
function calcAndShowResult(expression){
    var result  = eval(expression);
    $("#textField").val('');
    $("#textField").val(result);

}