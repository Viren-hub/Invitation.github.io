let data = localStorage.getItem("Birthday") ? JSON.parse(localStorage.getItem("Birthday")) : []

function editBirthDay() {

    let newData = {
        "BdayName": document.getElementById("name").value,
        "date": document.getElementById("date").value,
        "venue": document.getElementById("place").value,
        "Mobile": document.getElementById("mob").value

    }


    data.push(newData);
    localStorage.setItem("Birthday", JSON.stringify(data));
    document.getElementById("Name1").innerHTML = newData.BdayName;
    document.getElementById("onDate").innerHTML = newData.date;
    document.getElementById("city").innerHTML = newData.venue;
    document.getElementById("mobile").innerHTML = newData.Mobile;


}