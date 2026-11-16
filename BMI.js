function calculateBMI() {

    // Get the user's input
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    // Check if the inputs are empty or invalid
    if (weight <= 0 || height <= 0) {
        alert("Please enter a valid weight and height.");
        return;
    }

    // Convert height from cm to metres
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display the BMI
    document.getElementById("bmi").innerHTML = bmi.toFixed(1);

    let category = "";
    let message = "";

    // Check the BMI category
    if (bmi < 18.5) {
        category = "Underweight";
        message = "Your weight is below the normal range.";

    } else if (bmi < 25) {
        category = "Normal Weight";
        message = "Your BMI is within the normal range. Keep maintaining healthy habits.";

    } else if (bmi < 30) {
        category = "Overweight";
        message = "Your weight is above the normal range.";

    } else {
        category = "Obese";
        message = "Your BMI is in the obese range. Consider seeking professional health advice.";
    }

    // Show the result
    document.getElementById("category").innerHTML = category;
    document.getElementById("message").innerHTML = message;
}

// Reset the calculator
function resetCalculator() {

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    document.getElementById("bmi").innerHTML = "--";
    document.getElementById("category").innerHTML = "Waiting for result...";
    document.getElementById("message").innerHTML =
        "Your BMI result will appear here.";
}