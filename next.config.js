const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const nextConfig = {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    // distDir: '../dist',
    target: 'serverless',

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

module.exports = withBundleAnalyzer(
    withSass(
        withCSS(nextConfig),
    ),
);
