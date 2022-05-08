<template>
    <SimpleCarousel
        :ref="carouselRef"
        :class="carouselClass"
        :enable-buttons="false"
        :enable-dots="true"
        :items-per-view="itemsPerView"
        @on-slide-change="slideChangeHandler"
    >
        <slot></slot>
    </SimpleCarousel>
</template>

<script>
import SimpleCarousel from "vue2-simple-carousel";
export default {
    props: {
        carouselRef: String,
        itemsPerView: Number,
        carouselClass: String
    },
    components: {
        SimpleCarousel
    },
    data () {
        return {
            dots: 0,
            currentPage: 0
        }
    },
    methods: {
        slideChangeHandler (slideIndex) {
            this.$emit("setCurrentSlideIndex", slideIndex);
        }   
    }
}
</script>

<style lang="scss">
.carousel__dot {
    width: 8px !important;
    height: 8px !important;
    border: none;
    border-radius: 8px !important;
    background: $green;
    opacity: 0.1;
    &.carousel__dot--active {
        width: 16px !important;
        opacity: 1;
    }
}
</style>