import React from "react";

// Default value for context when a provider doesn't exist
const UserContext = React.createContext("Username");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;