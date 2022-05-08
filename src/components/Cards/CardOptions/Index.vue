<template>
    <div class="card-options d-flex align-items-start justify-content-between">
        <SingleOption
            v-for="(option, index) in options" 
            :key="index"
            :option="option"
        >
        </SingleOption>
    </div>
</template>

<script>
export default {
    props: {
        currentCard: Object
    },
    computed: {
        options () {
            return [
                {
                    imagePath: this.$imagePath.freezeCard,
                    label: this.currentCard.freezed ? "Unfreeze card" : "Freeze card",
                    clickHandler: this.freezeCard
                },
                {
                    imagePath: this.$imagePath.setSpendLimit,
                    label: "Set spend limit",
                    clickHandler: () => {}
                },
                {
                    imagePath: this.$imagePath.gPay,
                    label: "Add to GPay",
                    clickHandler: () => {}
                },
                {
                    imagePath: this.$imagePath.replaceCard,
                    label: "Replace card",
                    clickHandler: () => {}
                },
                {
                    imagePath: this.$imagePath.cancelCard,
                    label: "Cancel card",
                    clickHandler: () => {}
                }
            ];
        }
    },
    methods: {
        freezeCard () {
            if (this.currentCard.freezed) {
                this.$set(this.currentCard, "freezed", false);
            } else {
                this.$set(this.currentCard, "freezed", true);
            }
        }
    },
    components: {
        SingleOption: () => import("@/components/Cards/CardOptions/SingleOption.vue")
    }
}
</script>

<style lang="scss">
.card-options {
    background: $very-light-blue;
    border-radius: 24px 24px 0 0;
    padding: 20px 10px;
}
</style>