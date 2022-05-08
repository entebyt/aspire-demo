<template>
    <button class="card-option text-center" @click="option.clickHandler">
        <aspire-image :addBackground="false" :imageUrl="option.imagePath" :width="'30px'" :height="'30px'" class="m-auto mb-10px"></aspire-image>
        <label>{{option.label}}</label>
    </button>
</template>

<script>
export default {
    props: {
        option: Object
    }
}
</script>

<style lang="scss" scoped>
.card-option {
    background: none;
    border: none;
    cursor: pointer;
    label {
        font-size: 12px;
        margin-top: 5px;
    }
}
</style>