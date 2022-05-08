<template>
    <div class="debit-card-container">
        <Carousel
            class="hide-on-large"
            :carouselRef="'carousel'"
            :carouselClass="'debit-card-carousel'"
            :itemsPerView="1"
            @setCurrentSlideIndex="setCurrentSlideIndex"
        >
            <SingleCard 
                v-for="(card, index) in debitCards"
                :key="index"
                :bgColor="card.color"
                :cardHolderName="card.cardHolder"
                :cardNumber="card.cardNumber"
                :cardExpiry="card.cardExpiry"
                :cardCvv="card.cardCvv"
                :freezed="card.freezed || false"
                class="debit-card"
            />
        </Carousel>
        <div class="detail-container">
            <div class="row m-0">
                <div class="col-sm-12 col-lg-6 card-section p-0">
                    <Carousel
                        class="hide-on-small"
                        :carouselRef="'carousel'"
                        :carouselClass="'debit-card-carousel'"
                        :itemsPerView="1"
                        @setCurrentSlideIndex="setCurrentSlideIndex"
                    >
                        <SingleCard 
                            v-for="(card, index) in debitCards"
                            :key="index"
                            :bgColor="card.color"
                            :cardHolderName="card.cardHolder"
                            :cardNumber="card.cardNumber"
                            :cardExpiry="card.cardExpiry"
                            :cardCvv="card.cardCvv"
                            :freezed="card.freezed || false"
                            class="debit-card"
                        />
                    </Carousel>
                    <CardOptions :currentCard="currentCard"/>
                </div>

                <div class="col-sm-12 col-lg-6 all-details-section">
                    <SectionCard
                        :headerImagePath="$imagePath.cardDetails"
                        :headerLabel="'Card details'"
                    >
                        Card Details
                    </SectionCard>
                    <SectionCard
                        :headerImagePath="$imagePath.recentTransactions"
                        :headerLabel="'Recent transactions'"
                        class="mt-20px"
                    >
                        <TransactionList :transactionList="transactions"/>
                    </SectionCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DebitCardService from "@/services/DebitCardService";
export default {
    data () {
        return {
            debitCards: [],
            transactions: [
                {
                    color: this.$colors.skyBlue,
                    lightColor: this.$colors.veryLightBlue,
                    imagePath: this.$imagePath.fileStorage,
                    transactionTitle: "Hamleys",
                    transactionDate: "20 May 2020",
                    transactionAmount: "150",
                    transactionType: "credit",
                    actionText: "Refund on debit card"
                },
                {
                    color: this.$colors.green,
                    lightColor: this.$colors.whitishGreen,
                    imagePath: this.$imagePath.flights,
                    transactionTitle: "Hamleys",
                    transactionDate: "20 May 2020",
                    transactionAmount: "150",
                    transactionType: "debit",
                    actionText: "Charged to debit card"
                },
                {
                    color: this.$colors.pink,
                    lightColor: this.$colors.whitishPink,
                    imagePath: this.$imagePath.megaphone,
                    transactionTitle: "Hamleys",
                    transactionDate: "20 May 2020",
                    transactionAmount: "150",
                    transactionType: "debit",
                    actionText: "Charged to debit card"
                },
                {
                    color: this.$colors.skyBlue,
                    lightColor: this.$colors.veryLightBlue,
                    imagePath: this.$imagePath.fileStorage,
                    transactionTitle: "Hamleys",
                    transactionDate: "20 May 2020",
                    transactionAmount: "150",
                    transactionType: "debit",
                    actionText: "Charged to debit card"
                }
            ],
            currentSlideIndex: 0,
            currentCard: null
        }
    },
    created () {
        this.debitCards = DebitCardService.getMyDebitCards();
        this.currentCard = this.debitCards[0];
    },
    methods: {
        setCurrentSlideIndex(index) {
            this.currentSlideIndex = index;
            this.currentCard = this.debitCards[index];
        }
    },
    components: {
        SingleCard: () => import("@/components/Cards/SingleCard.vue"),
        Carousel: () => import("@/components/Common/Carousel.vue"),
        SectionCard: () => import("@/components/Common/SectionCard/Index.vue"),
        CardOptions: () => import("@/components/Cards/CardOptions/Index.vue"),
        TransactionList: () => import("@/components/Cards/TransactionList/Index.vue")
    }
}
</script>

<style lang="scss">
.debit-card-carousel {
    position: sticky;
    top: 150px;
    max-width: 450px;
    margin: auto;
    padding: 0 20px;
}
.debit-card {
    left: 10px;
}
.detail-container {
    position: relative;
    height: 100%;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -3px 6px 0 #00000029;
    background: white;
    z-index: 2;
    margin-top: 60px;
}

.all-details-section {
    padding: 20px;
}
</style>