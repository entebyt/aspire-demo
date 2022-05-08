<template>
    <div class="cards-container">
        <Header />
        <div class="inner-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Header: () => import("@/components/Cards/Header/Index.vue")
    }
}
</script>