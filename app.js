const clock = document.getElementById('clock');
const dateElement = document.querySelector('#date');


setInterval(function()  {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// function updateDate(){
//     let date = new Date();
//     dateElement.innerHTML = date.toLocaleDateString();
// }
//     updateDate();
//     setInterval(updateDate,24*60*60*1000);

setInterval(function()  {
    let date = new Date();
    dateElement.innerHTML = date.toDateString();
});


