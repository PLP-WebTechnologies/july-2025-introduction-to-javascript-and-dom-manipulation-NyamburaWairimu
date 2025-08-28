// ==============================
// 🚀 Part 1: Basics (Variables + Conditionals)
// ==============================

let patientName = "John Doe";
let patientAge = 65;
let isCritical = true;

// Admission logic
if (isCritical) {
  document.getElementById("admission-status").innerText =
    "Patient " + patientName + " (Age: " + patientAge + ") is admitted to ICU.";
} else {
  document.getElementById("admission-status").innerText =
    "Patient " + patientName + " (Age: " + patientAge + ") is admitted to General Ward.";
}

// ==============================
// ❤️ Part 2: Functions
// ==============================

// Function to calculate patient bill
function calculateBill() {
  let consultation = 500;
  let medication = 1200;
  let room = 3000;
  let total = consultation + medication + room;

  document.getElementById("bill").innerText =
    "Total Bill for patient: Ksh " + total;
}

// Function to toggle emergency alert
function toggleEmergency() {
  let alertBox = document.getElementById("emergency-alert");
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
  } else {
    alertBox.style.display = "none";
  }
}

// ==============================
// 🔁 Part 3: Loops
// ==============================

let patients = ["Alice", "Bob", "Charlie", "Diana"];

// For loop: Display patients
function listPatients() {
  let list = document.getElementById("patient-list");
  list.innerHTML = "";
  for (let i = 0; i < patients.length; i++) {
    let li = document.createElement("li");
    li.textContent = patients[i];
    list.appendChild(li);
  }
}

// While loop: Medication countdown
function medicationCountdown() {
  let list = document.getElementById("medication-list");
  list.innerHTML = "";
  let hours = 5;
  while (hours > 0) {
    let li = document.createElement("li");
    li.textContent = "Medication in " + hours + " hour(s)";
    list.appendChild(li);
    hours--;
  }
}

// ==============================
// 🌐 Part 4: DOM Manipulation
// ==============================

// 1. Update doctor on duty
document.getElementById("updateDoctorBtn").addEventListener("click", function () {
  document.getElementById("doctor-duty").innerText =
    "Doctor on Duty: Dr. Johnson";
});

// 2. Add new patient dynamically
document.getElementById("addPatientBtn").addEventListener("click", function () {
  let queue = document.getElementById("patientQueue");
  let newPatient = document.createElement("li");
  newPatient.textContent = "Patient " + (queue.children.length + 1);
  queue.appendChild(newPatient);
});

// 3. Change theme colors
document.getElementById("themeBtn").addEventListener("click", function () {
  let colors = ["#f1c40f", "#3498db", "#9b59b6", "#e67e22", "#1abc9c"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
