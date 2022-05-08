export default {
    generateCardNumber() {
        return Math.floor(
            Math.random() * 10**16
        )
    },
    getCardNumberString (cardNumber) {
        return String(cardNumber).replace(/(.{4})/g,"$1 ").trim();
    },
    generateRandomExpiryDate () {
        let startDate = new Date();
        let endDate = new Date(2030, 0, 1);
        let cardDateTime = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())); 
        return cardDateTime.getFullYear() + "-" + (cardDateTime.getMonth() + 1) + "-" + cardDateTime.getDate() + " " + cardDateTime.getHours() + ":" + cardDateTime.getMinutes() + ":" + cardDateTime.getSeconds();
    },
    getExpirtyDate (date) {
        let dateObj = new Date(date);
        return dateObj.getMonth() + 1 + '/' + dateObj.getFullYear();
    },
    generateCVV () {
        return Math.floor(Math.random() * 10**3);
    }
};