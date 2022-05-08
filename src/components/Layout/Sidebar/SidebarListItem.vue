<template>
    <router-link
        tag="div"
        :to="item.route"
        class="sidebar-list-item d-flex align-items-center text-decoration-none cursor-pointer"
    >
        <aspire-image :addBackground="true" :backgroundColor="''" :imageUrl="item.iconUrl" :width="item.dimension.width" :height="item.dimension.height"></aspire-image>
        <p>{{item.text}}</p>
    </router-link>
    <!-- <div class="sidebar-list-item d-flex align-items-center text-decoration-none text-white cursor-pointer position-relative" :class="{'active': active}" @click="navigate">
        <aspire-image :addBackground="true" :backgroundColor="active ? $colors.green : ''" :imageUrl="itemInfo.iconUrl" :width="itemInfo.dimension.width" :height="itemInfo.dimension.height"></aspire-image>
        <p>{{itemInfo.text}}</p>
    </div> -->
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: function () {
                return {
                    iconUrl: "",
                    text: "",
                    dimension: {
                        width: "20px",
                        height: "20px"
                    }
                };
            }
        }
    }
};
</script>