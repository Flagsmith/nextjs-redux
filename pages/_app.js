import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import '../project/polyfill';

import createStore from '../common/store';
import Header from '../components/Header';

let initialRender = false;

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps;
        const locale = API.getStoredLocale(ctx.req); // Retrieve the locale from cookie or headers
        const token = API.getStoredToken(ctx.req); // Retrieve token cookie from req.headers
        await ctx.store.dispatch(AppActions.startup({ token, locale })); // Post startup action with token and locale
        if (Component.getInitialProps) { // Wait for pages to complete any async getInitialProps
            pageProps = await Component.getInitialProps({ ctx });
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        if (!initialRender) { // Ensure we set the locale before rendering anything
            initialRender = true;
            const locale = store.getState().locale;
            if (locale) {
                Strings.setLanguage(locale);
            }
        }

        return (
            <Container>
                <Provider store={store}>
                    <React.Fragment>
                        <Head>
                            <meta charSet="utf-8"/>
                            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                            <meta name="description" content="The project description"/>
                            <meta name="theme-color" content="#317EFB"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                            <link rel="apple-touch-icon" href="/static/images/icons-192.png"/>
                            <link rel="icon" sizes="192x192" href="/static/images/icons-192.png"/>
                            <link rel="manifest" href="/static/manifest.json"/>
                            <link rel="manifest" href="/static/site.webmanifest"/>
                            <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                            <title>TheProject</title>
                        </Head>
                        <Header/>
                        <Component {...pageProps} />
                        <div id="confirm"/>
                        <div id="alert"/>
                        {
                            E2E && (
                                <React.Fragment>
                                    <div className="e2e" id="e2e-request" />
                                    <div className="e2e" id="e2e-error" />
                                </React.Fragment>
                            )
                        }
                    </React.Fragment>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
