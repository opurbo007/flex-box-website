$(document).ready(function(){
$('#menu-btn').click(changeNew);
function changeNew(){
    $('#links').toggle(1000);
    $('#menu-btn').toggleClass('turn')
}
})