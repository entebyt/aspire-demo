<template>
    <div class="svg-image" :style="setImageStyle()" @click="clickHandler">
        <img
            :src="imageUrl"
            :alt="imageAlt"
            v-if="!addBackground"
            class="w-100 h-100"
        />
    </div>
</template>

<script>
export default {
    props: {
        addBackground: Boolean,
        backgroundColor: String,
        imageUrl: String,
        height: String,
        width: String,
        imageAlt: String,
        clickHandler: {type: Function, default: () => {}}
    },
    methods: {
        setImageStyle() {
            if (this.addBackground) {
                return {
                    background: this.backgroundColor,
                    "-webkit-mask-image": `url(${this.imageUrl})`,
                    "mask-image": `url(${this.imageUrl})`,
                    height: this.height,
                    width: this.width,
                    "min-width": this.width,
                };
            } else {
                return {
                    height: this.height,
                    width: this.width,
                };
            }
        },
    },
};
</script>
