<template>
    <ul class="navigation-tabs">
        <router-link
            tag="li"
            v-for="(item, index) in navigationItems" :key="index"
            :to="item.path"
            class="navigation-item"
        >
            {{item.label}}
        </router-link>
    </ul>
</template>

<script>
export default {
    props: {
        navigationItems: Array
    }
}
</script>

<style lang="scss">
.navigation-tabs {
    list-style: none;
    padding: 0;
    .navigation-item {
        display: inline;
        font-size: 13px;
        color: white;
        opacity: 0.5;
        margin-right: 10px;
        cursor: pointer;
        &.active {
            opacity: 1;
            border-bottom: 2px solid $sky-blue;
        }
    }
}
</style>