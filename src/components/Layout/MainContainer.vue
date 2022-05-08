<template>
    <div class="main-container">
        <div class="main-section">
            <div class="main-content mt-auto position-relative">
                <div class="d-flex justify-content-end">
                    <aspire-image :addBackground="false" :imageUrl="$imagePath.logo" :width="'25px'" :height="'25px'" class="aspire-logo hide-on-large"></aspire-image>
                </div>
                <router-view></router-view>
            </div>
            <sidebar class="my-auto"></sidebar>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Sidebar: () => import ("@/components/Layout/Sidebar/Index")
    }
};
</script>

<style lang="scss">
.aspire-logo {
    position: fixed;
    right: 20px;
    top: 30px;
}
</style>