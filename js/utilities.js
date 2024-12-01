function inputFieldValue(id){
    const inputFieldValue=document.getElementById(id).value;
    const inputFieldValueNumber=parseFloat(inputFieldValue);
    return inputFieldValueNumber;
}

function textValue(id){
    const textValue=document.getElementById(id).innerText;
    const textValueNumber=parseFloat(textValue);
    return textValueNumber;
}

function showform(id){
document.getElementById("show-add-money-form").classList.add("hidden");
document.getElementById("show-remove-money-form").classList.add("hidden");
document.getElementById("show-transaction-section").classList.add("hidden");
document.getElementById(id).classList.remove("hidden");
}