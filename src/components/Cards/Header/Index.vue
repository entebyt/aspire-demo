<template>
    <div class="cards-header px-20px">
        <AccountInfo />
        <Tabs :navigationItems="navigationTabs"/>
    </div>
</template>

<script>
export default {
    components: {
        AccountInfo: () => import("@/components/Cards/Header/AccountInfo.vue"),
        Tabs: () => import("@/components/Common/Tabs.vue")
    },
    data () {
        return {
            navigationTabs: [
                {
                    label: "My debit cards",
                    path: "/cards/my-debit-cards"
                },
                {
                    label: "All company cards",
                    path: "/cards/all-company-cards"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.cards-header {
    position: sticky;
    top: 27px;
    z-index: 1;
}
</style>