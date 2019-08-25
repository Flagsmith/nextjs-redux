import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import '../project/polyfill';

import createStore from '../common/store';
import Header from '../components/Header';

const initialRender = false;

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps;
        if (!ctx.store.getState().ready) {
            const locale = API.getStoredLocale(ctx.req);
            Strings.setLanguage(locale);
            // Retrieve token cookie from req.headers
            const token = API.getStoredToken(ctx.req);
            // Post startup action with token || null
            await ctx.store.dispatch(AppActions.startup({ token, locale }));
        }

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        if (!initialRender) {
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
                    </React.Fragment>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
