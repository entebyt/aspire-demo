<template>
    <div class="section-card">
        <SectionHeader
            @setOpenState="setOpenSection"
            :headerImagePath="headerImagePath"
            :headerLabel="headerLabel"
            :sectionOpen="openSection"
        />
        <slide-up-down :active="openSection" :duration="200">
            <SectionBody>
                <slot></slot>
            </SectionBody>
        </slide-up-down>
    </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down';
export default {
    props: {
        headerImagePath: String,
        headerLabel: String
    },
    data () {
        return {
            openSection: false
        }
    },
    methods: {
        setOpenSection () {
            this.openSection = !this.openSection;
        }
    },
    components: {
        SlideUpDown,
        SectionHeader: () => import("@/components/Common/SectionCard/SectionHeader.vue"),
        SectionBody: () => import("@/components/Common/SectionCard/SectionBody.vue")
    }
}
</script>

<style lang="scss" scoped>
.section-card {
    border: 1px solid $light-grey;
    border-radius: 8px;
}
</style>