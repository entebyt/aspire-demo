<template>
    <div class="transaction-list">
        <TransactionItem
            v-for="(transaction, index) in transactionList"
            :key="index"
            :transaction="transaction"
        />
    </div>
</template>

<script>
export default {
    components: {
        TransactionItem: () => import("@/components/Cards/TransactionList/TransactionItem.vue")
    },
    props: {
        transactionList: Array
    }
}
</script>