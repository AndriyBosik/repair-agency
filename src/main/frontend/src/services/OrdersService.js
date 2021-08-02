import { fakeOrders } from "../config/fake-orders";

const orders = [];

export function getAllOrders() {
    if (orders.length == 0) {
        orders.push(...fakeOrders);
    }
    return orders;
}

export function getReadyOrders() {
    return getOrdersByType("done");
}

export function getInProgressOrders() {
    return getOrdersByType("compare_arrows");
}

export function getCancelledOrders() {
    return getOrdersByType("cancel");
}

export function getOrderById(id) {
    const order = getAllOrders().find(item => item.id*1 === id*1);
    return (typeof order === "undefined") ? null : order;
}

function getOrdersByType(orderType) {
    return getAllOrders().filter(order => order.type === orderType);
}