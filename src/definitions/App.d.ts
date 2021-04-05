import { AppInitialProps } from "next/app";
import { NextPageContext } from "next";

export interface ExtendAppInitialProps extends AppInitialProps {
    originalUrl: string
}

export interface ReduxNextPageContext extends NextPageContext {
    store: any;
}

