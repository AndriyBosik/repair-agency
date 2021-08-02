import React, { useEffect } from "react";
import { getOrderById } from "../../services/OrdersService";

import "./OrderPage.css";

export default function OrderPage({id}) {
    const order = getOrderById(id);
    order.imageUrl = (typeof order.imageUrl === "undefined") ? "" : order.imageUrl;

    const imageStyles = {
        backgroundImage: `url('${ order.imageUrl ? order.imageUrl : "/images/logo.png" }')`
    };

    return (
        <div className="container py20">
            <div className="row">
                <div className="order">
                    <div className="col s3">
                        <div className="image z-depth-2 stretch-background" style={imageStyles}></div>
                    </div>
                    <div className="col s9">
                        <div className="order-title m0">
                            {order.title}
                        </div>
                        <div className="s-hflex">
                            <span className="new badge no-margin weight-medium" data-badge-caption="">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}