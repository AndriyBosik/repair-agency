import React from "react";
import { getOrderAttrs } from "./order-helper";

export default function OrderItem({
    order,
    ...props
}) {
    const orderAttrs = getOrderAttrs(order);

    const isDefault = order.imageUrl == null || order.imageUrl === "";
    const styles = {};
    if (!isDefault) {
        styles.backgroundImage = `url("${order.imageUrl}")`;
    }

    return (
        <li className={`collection-item avatar clickable ${orderAttrs.container}`}>
            <div className={`circle order-item-logo z-depth-1 ${isDefault ? "default" : ""}`} style={styles}></div>
            <p className="flow-text">
                <strong className="title">{order.title}</strong>
            </p>
            <p className="truncate">
                {order.description}
            </p>
            <a href="#" className="secondary-content"><i className={`material-icons ${orderAttrs.icon}`}>{order.type}</i></a>
        </li>
    );
}