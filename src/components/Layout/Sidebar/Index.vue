<template>
    <div class="sidebar">
        <div class="logo-section">
            <aspire-image :addBackground="false" :imageUrl="$imagePath.logoFull" :width="'40%'" :height="'35px'"></aspire-image>
            <p>
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </p>
        </div>
        <div class="sidebar-list d-flex h-100">
            <sidebar-list-item
                v-for="(item, index) in sidebarItems"
                :key="index"
                :item="item"
            ></sidebar-list-item>
            <!-- <router-link
                :to="item.route"
                v-for="(item, index) in sidebarItems"
                :key="index"
                v-slot="{ isActive, navigate }"
                custom
            >
                <sidebar-list-item
                    :itemInfo="item"
                    :active="isActive"
                    :navigate="navigate"
                ></sidebar-list-item>
            </router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarItems: [
                {
                    iconUrl: this.$imagePath.home,
                    route: "/home",
                    text: "Home",
                    dimension: {
                        width: "22px",
                        height: "22px",
                    },
                },
                {
                    iconUrl: this.$imagePath.card,
                    route: "/cards",
                    text: "Cards",
                    dimension: {
                        width: "22px",
                        height: "22px",
                    },
                },
                {
                    iconUrl: this.$imagePath.payments,
                    route: "/payments",
                    text: "Payments",
                    dimension: {
                        width: "22px",
                        height: "22px",
                    },
                },
                {
                    iconUrl: this.$imagePath.credit,
                    route: "/Credit",
                    text: "Credit",
                    dimension: {
                        width: "22px",
                        height: "22px",
                    },
                },
                {
                    iconUrl: this.$imagePath.account,
                    route: "/settings",
                    text: "Settings",
                    dimension: {
                        width: "22px",
                        height: "22px",
                    },
                }
            ],
        };
    },
    components: {
        SidebarListItem: () =>
            import("@/components/Layout/Sidebar/SidebarListItem"),
    }
};
</script>