var height, weight;

function calculate() {
    height = document.getElementById("ht").value;
    weight = document.getElementById("wt").value;
    height /= 100;
    bmi = weight / height**2



    if (bmi <= 18.4) {
        document.getElementById("res").innerHTML = bmi + `<h3>${"Underweight BMI"}</h3>`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("res").innerHTML =  bmi + `<h3>${"Normal BMI"}`;
    }

    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("res").innerHTML=  bmi  +  `<h3>${"Overweight BMI"}`;

    }
    else if (bmi >= 30) {
        document.getElementById("res").innerHTML =  bmi  + `<h3>${"Obese BMI"}`;
    }

    if (height === 0) {
        document.getElementById("res").innerHTML = "Enter some values";

    }
    else if (weight === 0) {
        document.getElementById("res").innerHTML = "Enter some values";
    }


}