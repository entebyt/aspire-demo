import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

var routes = [
    {
        path: "*",
        redirect: "/",
    },
    {
        path: "/",
        component: () => import("@/components/Layout/MainContainer.vue"),
        children: [
            {
                path: "home",
                component: () =>
                    import("@/Views/Home.vue"),
            },
            {
                path: "cards",
                component: () =>
                    import("@/Views/Cards/Cards.vue"),
                  children: [
                    {
                      path: "my-debit-cards",
                      component: () => import("@/Views/Cards/MyDebitCard.vue")
                    },
                    {
                      path: "all-company-cards",
                      component: () => import("@/Views/Cards/AllCompanyCard.vue")
                    },
                    {
                      path: "",
                      redirect: "my-debit-cards"
                    }
                  ]
            },
            {
                path: "payments",
                component: () =>
                    import("@/Views/Payments.vue"),
            },
            {
              path: "settings",
              component: () =>
                  import("@/Views/Settings.vue"),
            },
            {
              path: "credit",
              component: () =>
                  import("@/Views/Credit.vue"),
            },
            {
              path: "",
              redirect: "/home"
            }
        ]
    },
];

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    mode: "history",
});

export default router;
