window.onload = function(){
    console.log("Razaan Healthcare System Ready");
};


// Appointment
function bookAppointment(){

    let patient = document.getElementById("patientName");

    if(patient && patient.value.trim() !== ""){
        alert("Appointment booked successfully for " + patient.value);
    }else{
        alert("Please enter patient name");
    }

}


// Update medical chart
function updateChart(){
    alert("Medical chart updated successfully");
}


// Login
function login(){

    let username = document.getElementById("username");

    if(username && username.value !== ""){
        alert("Welcome " + username.value);
    }else{
        alert("Enter username first");
    }

}
