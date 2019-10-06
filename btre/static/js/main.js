const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function() {
    $("#message").fadeOut('slow');
}, 3000);

// $("input[name='phone']").keyup(function() {
//     $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
// });

document.getElementById("phone").addEventListener("keyup", function() {
this.value = this.value.replace(/^(\d{3})(\d{3})(\d)+$/, "($1) $2-$3");
});


