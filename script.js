
function Choose() {
    var newChar = new Character(document.getElementById("name").value, document.getElementById("Place of origin").value, document.getElementById("Faith").value, document.getElementById("Rank").value);
    console.log(newChar);
    return newChar;
}
function wealth() {
    return (Math.floor((Math.random() * 100) + 10));
}
$(document).ready(function(){
    $("#field").hide();
    $("#continue").click(function() {
        $("#create").hide();
        $("#field").show();
    });
});
$(document).ready(function() {
    $("#crossroad").hide();
    $("#continue2").click(function () {
        $("#field").hide();
        $("#crossroad").show();
    });
});
$(document).ready(function(){
    $("#letter").hide();
    $("#note").click(function() {
        $("#field").hide();
        $("#letter").show();
    });
});
$(document).ready(function(){
    $("#field").hide();
    $("#goBack").click(function() {
        $("#letter").hide();
        $("#field").show();
    });
});
$(document).ready(function(){
    $("#Aš").hide();
    $("#continue3").click(function() {
        $("#crossroad").hide();
        $("#Aš").show();
    });
});
$(document).ready(function(){
    $("#exploration").hide();
    $("#explore").click(function () {
        $("#field").hide();
        $("#exploration").show();
    });
});