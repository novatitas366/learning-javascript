let day = 8;

switch(day){
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednsday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log(`invalid day`)
        break;
}

let testScore = 70;
let letterGrade;

switch(true){
    case testScore >=90:
        letterGrade = "A"
        break;
    case testScore >= 80:
        letterGrade = "B"
        break;
    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade);