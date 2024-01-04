const hight = prompt('Enter Your Hight in Meters')
const weight = prompt('Enter Your Weight in Kilograms')
if(hight && weight){
    const BMI = weight / (hight**2)
    if(BMI < 18.5){
        alert('Under weight')
    }else if(BMI > 18.5 && weight < 24.9){
        alert('Normal')
    }else if(BMI > 24.9 && weight < 29.9){
        alert('Over weight')
    }else if(BMI > 29.9 ){
        alert('your in danger area')
    }else{
        alert('please enter your weight and hight properly')
    }
}
alert('You have not entered anything. please reload the page and try again')