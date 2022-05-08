<template>
    <div class="transaction-item d-flex align-items-start justify-content-between">
        <div class="d-flex aling-items-start">
            <div class="transaction-image position-relative" :style="{'background-color': transaction.lightColor}">
                <aspire-image :addBackground="true" :backgroundColor="transaction.color" :imageUrl="transaction.imagePath" :width="'16px'" :height="'16px'"></aspire-image>
            </div>
            <div class="transaction-data">
                <div class="transaction-title">
                    {{transaction.transactionTitle}}
                </div>
                <div class="transaction-date">
                    {{transaction.transactionDate}}
                </div>
                <div class="transaction-action d-flex align-items-center">
                    <div class="action-image position-relative">
                        <aspire-image :addBackground="true" :backgroundColor="'white'" :imageUrl="$imagePath.businessAndFinance" :width="'10px'" :height="'7.5px'"></aspire-image>
                    </div>
                    <p>{{transaction.actionText}}</p>
                </div>
            </div>
        </div>
        <div class="transaction-amount d-flex align-items-center" :style="[transaction.transactionType === 'debit' ? {'color': 'black'} : {'color': $colors.green}]">
            <p class="mr-10px">{{transaction.transactionType === 'debit' ? '-' : '+'}}S$ {{transaction.transactionAmount}}</p>
            <aspire-image :addBackground="false" :imageUrl="$imagePath.nextCaret" :width="'6.5px'" :height="'12px'"></aspire-image>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        transaction: Object
    }
}
</script>

<style lang="scss" scoped>
.transaction-item {
    border-top: 1px solid #F5F5F5;
    padding: 20px 0 10px;
    .transaction-image {
        width: 45px;
        height: 45px;
        text-align: center;
        border-radius: 50%;
        margin-right: 20px;
        .svg-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .transaction-title {
        color: #222222;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 6px;
        font-weight: bold;
    }
    .transaction-date {
        color: #AAAAAA;
        font-size: 13px;
        margin-bottom: 6px;
    }
    .transaction-action {
        color: $violet;
        font-weight: bold;
        font-size: 12px;
        .action-image {
            width: 24px;
            height: 20px;
            background: $violet;
            text-align: center;
            margin-right: 10px;
            border-radius: 50%;
            .svg-image {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    .transaction-amount {
        font-size: 14px;
        font-weight: bold;
    }
}
</style>