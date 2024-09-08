function onclic(){
    const date = new Date();
    let hours = date.getHours();
    med = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minute = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const prints = document.getElementById("Prints");

    prints.textContent = `${hours.toString().padStart(2,0)}:${minute}:${seconds} ${med}`
}

onclic();
setInterval(onclic,1000)