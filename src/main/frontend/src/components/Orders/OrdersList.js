import React from "react";
import OrderItem from "./OrderItem";

export default function OrdersList({orders}) {
    return (
        <ul className="collection medium orders">
            {
                orders.map(order => <OrderItem key={order.id} order={order} />)
            }
        </ul>
    );
}