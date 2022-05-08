<template>
    <div class="d-flex align-items-end justify-content-between">
        <div>
            <span>Account balance</span>
            <div class="d-flex align-items-end mt-15px">
                <div class="currency-badge">
                    S$
                </div>
                <p class="amount my-0">3000</p>
            </div>
        </div>
        <aspire-button
            class="new-card-button"
            :themeType="'no-bg'"
            :clickHandler="() => {}"
        >
            <div class="d-flex align-items-center">
                <aspire-image :addBackground="true" :backgroundColor="$colors.skyBlue" :imageUrl="$imagePath.add" :width="'16px'" :height="'16px'" class="mr-5px"></aspire-image>
                <p class="m-0">New card</p>
            </div>
        </aspire-button>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-size: 14px;
    font-weight: 400;
    color: white;
}

.currency-badge {
    padding: 2px 10px;
    border-radius: 4px;
    background: $green;
    color: white;
    font-size: 12px;
}
.amount {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    color: white;
    line-height: 1;
}
</style>