export const getOrderAttrs = (order) => {
    switch (order.type) {
        case "cancel":
            return {
                container: "red lighten-5",
                icon: "red-text"
            };
        case "compare_arrows":
            return {
                container: "blue lighten-5",
                icon: "blue-text lighten-2"
            };
        default:
            return {
                container: "",
                icon: ""
            };
    }
}