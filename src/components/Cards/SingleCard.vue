<template>
    <div class="single-card-container" :class="{'disabled': freezed}">
        <div class="d-flex aling-items-center align-self-end show-card-number ml-auto">
            <aspire-image :addBackground="true" :backgroundColor="$colors.green" :imageUrl="$imagePath.eye" :width="'16px'" :height="'16px'" class="mr-5px"></aspire-image>
            <p class="m-0">Show Card Number</p>
        </div>
        <div class="single-card">
            <div class="d-flex justify-content-end">
                <aspire-image :addBackground="true" :backgroundColor="'white'" :imageUrl="$imagePath.logoFull" :width="'74px'" :height="'21px'"></aspire-image>
            </div>
            <div class="card-holder-name mb-15px">
                {{cardHolderName}}
            </div>
            <div class="card-number mb-15px">
                {{helper.getCardNumberString(cardNumber)}}
            </div>
            <div class="card-info d-flex aling-items-center">
                <div class="card-expiry mr-20px">
                    Thru: {{helper.getExpirtyDate(cardExpiry)}}
                </div>
                <div class="card-cvv">
                    CVV: <span>***</span>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <aspire-image :addBackground="false" :backgroundColor="'white'" :imageUrl="$imagePath.visa" :width="'60px'" :height="'auto'"></aspire-image>
            </div>
        </div>
    </div>
</template>

<script>
import helper from "@/helpers/common";
export default {
    props: {
        bgColor: String,
        cardHolderName: String,
        cardNumber: Number,
        cardExpiry: String,
        cardCvv: String,
        freezed: Boolean
    },
    data () {
        return {
            helper: null
        }
    },
    created () {
        this.helper = helper;
    }
}
</script>

<style lang="scss">
.single-card-container {
    padding: 0 10px;
    &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
.single-card {
    background-color: $green;
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 2px 6px 0 #00000014;
    color: white;
    margin-top: -10px;
    padding: 20px;
    font-weight: bold;
    .card-holder-name {
        font-size: 1.6rem;
    }
    .card-number {
        font-size: 1.3rem;
        word-spacing: 10px;
        letter-spacing: 1px;
    }
    .card-expiry, .card-cvv {
        font-size: 1.1rem;
    }

    .card-cvv span {
        font-size: 15px;
    }
}

.show-card-number {
    color: $green;
    font-size: 12px;
    font-weight: medium;
    border-radius: 6px 6px 0 0;
    background: white;
    width: max-content;
    padding: 5px 10px 15px;
    margin-top: 5px;
}
</style>