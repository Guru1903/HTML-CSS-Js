let dum = 0;
document.getElementById("Prints").textContent = `Amount : ${dum.toLocaleString(dum,{style:"currency",currency:"INR"})}`;

function clicks(){
    let Principle =document.getElementById("Principle").value;
    let Rate =document.getElementById("Rate").value;
    let Years =document.getElementById("Years").value;
    const Prints=document.getElementById("Prin");

    Principle = Number(Principle);
    Rate = Number(Rate);
    Years = Number(Years);

    let interest, percentage = ((Rate/100)*100)/100;
    console.log(percentage);
    
    if(Principle <= 0 || Rate <= 0 || Years <= 0){
        Prints.textContent = `Enter Correct Number Values`;
    }

    else if(Principle > 0 && Rate > 0 && Years > 0){
        interest = Principle * percentage * Years;
        interest += Principle;
        Prints.textContent = ` ${interest.toLocaleString(interest,{style:"currency",currency:"INR"})}`;
    }

    document.getElementById("Prints").textContent = `Total Amount :`;

}