const body = document.body;
const code = document.querySelector("#colorCode");

const getColor = ()=>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    code.textContent = randomCode;

    body.style.backgroundColor = randomCode;

    //ye jo bhi code aa aga usse clipboard mai copy kr dega or fir hum direct paste kr skte hai 
    // navigator.clipboard.writeText(randomCode);
}
//event call mtlb btn pe click krne pe color change ho
const btn = document.querySelector("button");
btn.addEventListener("click",getColor);

//initial call mtlb ki jese hi page refrresh hoga vo hame color change kr ke dedega ek bar 
getColor();