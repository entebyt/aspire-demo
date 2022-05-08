<template>
    <div class="section-header d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <aspire-image :addBackground="false" :imageUrl="headerImagePath" :width="'24pt'" :height="'24pt'" class="mr-10px"></aspire-image>
            <p class="headerLabel">{{headerLabel}}</p>
        </div>
        <aspire-image :addBackground="false" :imageUrl="sectionOpen ? $imagePath.upArrow : $imagePath.downArrow" :width="'20pt'" :height="'20pt'" :clickHandler="openCloseSection" class="cursor-pointer"></aspire-image>
    </div>
</template>

<script>
export default {
    props: {
        headerImagePath: String,
        headerLabel: String,
        sectionOpen: Boolean
    },
    methods: {
        openCloseSection () {
            this.$emit("setOpenState")
        }
    }
}
</script>

<style lang="scss" scoped>
.section-header {
    background: #F5F9FF;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 8px 0 #0000000A;
}
.headerLabel {
    font-size: 12pt;
    color: $dark-violet;
}
</style>