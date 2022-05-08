import store from "@/store";
import helper from "@/helpers/common";

export default class DebitCardService {
    static getMyDebitCards () {
        return store.state.debitCards;
    }

    static addDebitCard (cardHolder) {
        let cardNumber = helper.generateCardNumber();
        let cardExpiry = helper.generateRandomExpiryDate();
        let cardCvv = helper.generateCVV();
        return store.commit("ADD_DEBIT_CARD", {
            cardHolder,
            cardNumber,
            cardExpiry,
            cardCvv
        });
    }
}