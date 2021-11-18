let filterWrapper = document.getElementById('filter-1'),
    filterlinks = filterWrapper.querySelectorAll('.filter-link');
/*
write click event for each a-tag
get class name of this element
hide all cardrs
show cards with specific class name
*/

filterlinks.forEach(function(link){
    link.addEventListener('click',function(){
        //get class name of the element
        let showElement = this,
            filterType = showElement.classList[1];
            console.log(showElement);
        // console.log(filterType);
        // hide all cards
        hideAllCards();
        // show cards with specific class name
        showCards(filterType);
    });
});

function hideAllCards(){
    let allCards = filterWrapper.querySelectorAll('.card');
    allCards.forEach(function(card){
        card.style.display = 'none';
    });
}

function showCards(filterType){
    console.log(filterType);
    if(filterType=="all"){
        cardType = '.card';
    }
    else{
        cardType = '.'+filterType;
    }
    console.log(cardType);
    let cardTypes = filterWrapper.querySelectorAll(cardType);
    cardTypes.forEach(function(card){
        card.style.display = 'block';
    })
}
