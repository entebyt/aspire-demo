// The scope of this file is for global components
// All the components that are globally accessible will be added here.

import AspireImage from "@/components/Common/BasicImage.vue";
import AspireButton from "@/components/Common/BasicButton.vue";
// Adding global components and giving them names
// We can use these names to access these components
// @example aspire-image(common name) for AspireImage (component)

const GlobalComponents = {
    install(Vue) {
        Vue.component("aspire-image", AspireImage);
        Vue.component("aspire-button", AspireButton);
    },
};

export default GlobalComponents;
