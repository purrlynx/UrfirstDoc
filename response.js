var sex = true
function gender(){
  sex = !sex
  if(sex){
document.getElementById("gender").innerHTML="female"
  }else{
  document.getElementById("gender").innerHTML="male"
  }
}

function weight(){
  var weight = parseFloat(prompt("Type your weight"))
  while(isNaN(weight)){
		weight = parseFloat(prompt("Type your weight in number please"))
  }
  document.getElementById("weight").innerHTML=weight
}

function height(){
  var height = parseFloat(prompt("Type your height"))
	while(isNaN(height)){
    height = parseFloat(prompt("Type your height in number please"))
  }
  document.getElementById("height").innerHTML=height
}


function calculateBMI(){

	var h = parseFloat(document.getElementById("height").innerHTML)
	var w = parseFloat(document.getElementById("weight").innerHTML)

	
	if (isNaN(w) || isNaN(h)){
		document.getElementById("bmi").innerHTML= "Please provide height and weight value!"
	}
	else {
		
		let bmi = (w/((h * h)/ 10000)).toFixed(2)
		document.getElementById("bmi").innerHTML=bmi
		
		if (bmi < 18.6) {
			document.getElementById("result").innerHTML="Underweight"
		}
		else if (bmi >= 18.6 && bmi < 24.9) {
			document.getElementById("result").innerHTML="Normal weight"
		}
		else if (bmi >=24.9){
			document.getElementById("result").innerHTML="Overweight"
		}
		else {
			document.getElementById("result").innerHTML="Invalid BMI"
		}
	}
}
