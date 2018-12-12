
var cardList=[];

function getCardList() {

       return cardList
}
function addCard(card) {
    cardList.push(card)
}
function deleteCard(index) {
    cardList.splice(index,1);
}

export default { getCardList, addCard,deleteCard };