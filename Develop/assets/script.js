// gets the current day
var todaysDate = moment().format("dddd, MMMM D");
// displays the current day
    document.getElementById('currentDay').textContent = todaysDate;
console.log(todaysDate);
//check hour
var checkHour = function() {
    //gets hour
    var currentHour = moment().format('H');
    //puts timeblocks in array
    var timeBlockEl = $('textarea');
    console.log(timeBlockEl);
    //clears color classes
    $(timeBlockEl).removeClass('past present future');
    //for loop to get the time of each block
    for(var i = 0; i < timeBlockEl.length; i++){
        var id = timeBlockEl[i].id;
        var time = parseInt(id)
        var selectedBlock = timeBlockEl[i];
        //debugger
        //checks which color is needed
        if(time == currentHour) {
            $(selectedBlock).addClass('present');
        } else if (time > currentHour) {
            $(selectedBlock).addClass('future');
        } else if (time < currentHour) {
            $(selectedBlock).addClass('past');
        }
    } 
};
//save button
$('.saveBtn').click(function() {
    //get value
    var text = $(this).siblings('textarea').val()//.trim();
    var time = $(this).siblings('textarea').data('hour');
    //set values
    localStorage.setItem(time, text);
});
//gets data from localstorage
$('textarea').each(function() {
    $(this).val(localStorage.getItem($(this).data('hour')));
});
//clear day button
$("#clearDay").on("click", function() {
    localStorage.clear();
    location.reload();
});
checkHour();
//checks time ever 60 seconds to make sure colors are uptodate
setInterval(checkHour,(1000*60));