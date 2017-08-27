function postAttendance(e) {
    e.preventDefault();
    var guests = document.getElementById("guests").value;
    var vegetarians = document.getElementById("vegetarians").value;
    var song = document.getElementById("song").value;
    var attendanceForm = document.getElementById("attendance-form");

    axios.post('/attendance', {
        id: document.getElementById("guestId").value,
        guests: document.getElementById("guests").value,
        vegetarians: document.getElementById("vegetarians").value,
        song: document.getElementById("song").value
    }).then(function () {
        attendanceForm.innerHTML = "<div>Atsakymas sėkmingai išsaugotas. Ačiū!</div>";
    }).catch(function (error) {
        attendanceForm.innerHTML = "<div>Įvyko klaida. Mėginkite dar kartą arba kreipkitės į mus tiesiogiai.</div>";
    });
}