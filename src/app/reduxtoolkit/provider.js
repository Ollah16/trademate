'use client'

import { userStore } from "./appStore"

const { Provider } = require("react-redux")

export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={userStore}>
            {children}
        </Provider>
    )
}