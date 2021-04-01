import { AppInitialProps } from "next/app";
import { NextPageContext } from "next";

export interface AppWithStore extends AppInitialProps {
    store: any;
}

export interface ReduxNextPageContext extends NextPageContext {
    store: any;
}
