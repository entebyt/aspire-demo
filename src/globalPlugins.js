import imagePath from "@/constant/imagePath.js";
import colors from "@/constant/colors.js";

const GlobalPlugins = {
    install (Vue) {
        Vue.prototype.$imagePath = imagePath;
        Vue.prototype.$colors = colors;
    }
};

export default GlobalPlugins;