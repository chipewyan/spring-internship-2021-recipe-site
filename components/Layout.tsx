import React, { FC } from "react";

import { Header } from "./Header";
import SearchForm from "./SearchForm"

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            <hr />
            <SearchForm />
            <hr />
            {children}
        </div>
    )
}

export default Layout;