import React, { useEffect } from "react";
import { getAllOrders, getCancelledOrders, getInProgressOrders, getReadyOrders } from "../../services/OrdersService";
import OrdersList from "./OrdersList";

import M from "materialize-css";

export default function OrdersPage() {
    useEffect(() => {
        M.Tabs.init(document.querySelector("ul.tabs"));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <h3 className="center-align">Your orders</h3>
                <blockquote>
                    Here you can see your orders. You have a few tabs which can help you to see order that you want
                </blockquote>
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a href="#all">All</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#ready">Ready</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#in-progress">In progress</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#cancelled">Cancelled</a>
                        </li>
                    </ul>
                </div>
                <div id="all" className="col s12">
                    <div className="py10">
                        <OrdersList orders={getAllOrders()} />
                    </div>
                </div>
                <div id="ready" className="col s12">
                    <div className="py10">
                        <OrdersList orders={getReadyOrders()} />
                    </div>
                </div>
                <div id="in-progress" className="col s12">
                    <div className="py10">
                        <OrdersList orders={getInProgressOrders()} />
                    </div>
                </div>
                <div id="cancelled" className="col s12">
                    <div className="py10">
                        <OrdersList orders={getCancelledOrders()} />
                    </div>
                </div>
            </div>
        </div>
    );
}