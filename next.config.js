const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
});
const { join } = require('path');
const withOffline = require('next-offline');

const nextConfig = {
    // distDir: '../dist',
    target: 'serverless',
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },

    // buildId, dev, isServer, defaultLoaders, webpack
    webpack: (config, { dev }) => {
        const base = dev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');
        if (base.plugins) {
            config.plugins = config.plugins.concat(base.plugins);
        }
        // if (base.module && base.module.rules) {
        //     config.module.rules = config.module.rules.concat(base.module.rules);
        // }
        //
        //
        // if (config.optimization.splitChunks.cacheGroups && config.optimization.splitChunks.cacheGroups.commons) {
        //     config.optimization.splitChunks.cacheGroups.commons.minChunks = 4;
        // }
        //
        return config;
    },
};

module.exports = withOffline(
    withBundleAnalyzer(
        withSass(
            withCSS(nextConfig),
        ),
    ),
);
