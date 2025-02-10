let userName = " Titas"
console.log(userName.lastIndexOf("s"));

let result = userName.startsWith(" ");
if(result){
    console.log("Your username cant start with ' '");
}
else console.log(userName);

let replaceUserName=userName.replaceAll("T", "s");
console.log(replaceUserName);