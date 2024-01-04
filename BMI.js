const hight = prompt('Enter Your Hight in Meters')
const weight = prompt('Enter Your Weight in Kilograms')

if(hight && weight){
    const BMI = Number(weight) / Number(hight ** 2);
    if(BMI < 18.5){
        alert(' you are Underweight')
    }else if(BMI > 18.5 && BMI < 24.9){
        alert('Normal')
    }else if(BMI > 24.9 && BMI < 29.9){
        alert(' You are Overweight')
    }else if(BMI > 29.9 ){
        alert('you are in danger area')
    }else{
        alert('please enter your weight and hight properly')
    }
}else{
    alert('You have not entered anything. please reload the page and try again')
}
