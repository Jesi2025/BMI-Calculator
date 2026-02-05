function calculateBMI(){
    let weightInput = prompt("Enter your weight in kg:");
    let heightInput = prompt("Enter your height in cm:");

    let weight = parseFloat(weightInput);
    let heightCm = parseFloat(heightInput);

    
    let height = heightCm / 100;

    let bmi = weight / (height * height);


    let resultMessage = `Your BMI is: ${bmi.toFixed(2)}<br>`;


if(bmi < 18.5){
    resultMessage += "You are underweight";

}
else if(bmi >=18.5 && bmi <=24.9){
    resultMessage += "You are Healthy";

}
else if(bmi >=25 && bmi <=29.9){
    resultMessage += "Your are  over weight";
    
}
else{
    resultMessage += "You are obese";
}


document.getElementById("result").innerHTML = resultMessage;
}

samplee