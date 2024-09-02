const cel = document.getElementById("celtofah");
const fah = document.getElementById("fahtocel");

function Submit(){
    let values = document.getElementById("value").value;
    values = Number(values);
    document.getElementById("print").textContent = `${typeof values}`;

        if(cel.checked){
            values = (values * 9/5) + 32;
            document.getElementById("print").textContent = `${values} °F`;
        }
        
        else if(fah.checked){
            values = (values - 32) * 5/9 ;
            // values = Math.ceil();
            document.getElementById("print").textContent = `${values} °C`;
        }
        
        else{
            document.getElementById("print").textContent = `Select a Unit`;
            
        }
}





