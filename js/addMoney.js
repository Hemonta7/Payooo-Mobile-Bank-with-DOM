document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    const amount = inputFieldValue("addMoneyAmouont");
    const pin = inputFieldValue("addMoneyPin");
    if(isNaN(amount)){
        alert("please provide number");
        return;
    }
    if(pin==1234){
        const display = textValue("display");
        const total=display+amount;
        document.getElementById("display").innerText=total;
        // history
        const p=document.createElement("p");
        p.classList.add("bg-slate-400");
        p.innerText=`added${amount}Tk. New Balance${total}`;
        document.getElementById("transaction-container").appendChild(p);
    }else{
        alert("try again later");
    }

})