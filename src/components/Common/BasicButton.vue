<template>
    <button
        :class="[
            'aspire-btn',
            themeClass,
        ]"
        :type="buttonType"
        @click="clickHandler"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        themeType: String,
        clickHandler: {
            type: Function,
            default: () => {},
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        buttonType: {
            type: String,
            default: "button",
        }
    },
    computed: {
        themeClass () {
            switch (this.themeType) {
                case "light":
                    return "aspire-btn-light";
                case "bordered":
                    return "aspire-btn-bordered";
                case "no-bg":
                    return "aspire-btn-transparent";
                default:
                    return "aspire-btn";
            }
        }
    }
};
</script>
