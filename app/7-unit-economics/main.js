let unitEconomicsForm = document.getElementById('unit-economics-form'),
    sellingPriceInput = document.getElementById('selling-price'),
    cogsInput = document.getElementById('cogs'),
    grossMarginInput = document.getElementById('gross-margin'),
    salesmarketingInput = document.getElementById('sales-marketing'),
    operationcostInput = document.getElementById('operation-cost'),
    netmarginInput = document.getElementById('net-margin'),
    sellingPriceValue,cogsValue,grossMarginValue,salesmarketingValue,operationcostValue,netmarginValue;

function calculate(e){
    e.preventDefault();
    //calculate gross margin

    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;

    //calculate net margin

    salesmarketingValue = salesmarketingInput.value;
    operationcostValue = operationcostInput.value;
    netmarginValue = grossMarginValue - salesmarketingValue - operationcostValue;
    netmarginInput.value = netmarginValue;
}

unitEconomicsForm.addEventListener('submit', calculate);



