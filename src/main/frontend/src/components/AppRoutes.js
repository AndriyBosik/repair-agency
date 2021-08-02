import React from "react";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import ProfilePage from "./Profile/ProfilePage";
import Footer from "../shared/components/layout/Footer";
import Header from "../shared/components/layout/Header";
import OrdersPage from "./Orders/OrdersPage";
import OrderPage from "./Order/OrderPage";

export default function AppRoutes() {
    return (
        <App>
            <Switch>
                <Route path="/" exact>
                    <LoginPage />
                </Route>

                <Route>
                    <Header />
                    <main className="flex-auto">
                        <Switch>
                            <Route path="/profile">
                                <ProfilePage />
                            </Route>
                            <Route path="/orders/:id">
                                {
                                    ({ match }) => <OrderPage id={match.params.id} />
                                }
                            </Route>
                            <Route path="/orders">
                                <OrdersPage />
                            </Route>
                        </Switch>
                    </main>
                    <Footer />
                </Route>
            </Switch>
        </App>
    );
}