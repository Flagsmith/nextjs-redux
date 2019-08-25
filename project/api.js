/* istanbul ignore next */
import Router from 'next/router';
import cookie from 'cookie';
import cookies from 'js-cookie';

import Project from '../common/project';

const API = {
    ajaxHandler(type, e) {
        return { type, error: e.message };
    },
    logout() {
        cookies.remove('token');
        Router.replace('/');
    },
    loggedIn() {
        Router.replace('/markup');
    },
    getStoredToken(req) {
        if (req) {
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            return parsedCookies && parsedCookies.token;
        }
        cookies.get('token');
    },
    getStoredLocale(req) {
        if (req) {
            // Attempt to get locale saved cookie
            const parsedCookies = cookie.parse(req.headers.cookie || '');
            if (parsedCookies.locale) {
                return parsedCookies.locale;
            }
            // Attempt to retrieve local from Accept-Language headers
            if (req.headers && req.headers['accept-language']) {
                const parsedLocale = req.headers['accept-language'].split(',')[0];
                if (parsedLocale) {
                    return parsedLocale;
                }
            }
        }

        return Constants.defaultLocale;
    },
    setStoredLocale(v) {
        return cookies.set('locale', v);
    },
    setStoredToken(v) {
        return cookies.set('token', v);
    },
    trackEvent(data) {
        if (__DEV__) {
            // eslint-disable-next-line
            console.info('track', data);
        }

        if (Project.ga) {
            if (!data) {
                // eslint-disable-next-line
                console.error('GA: Passed null event data');
                return;
            }
            if ((!data || !data.category || !data.event) && __DEV__) {
                // eslint-disable-next-line
                console.error('Invalid event provided', data);
            }
            ga('send', {
                hitType: 'event',
                eventCategory: data.category,
                eventAction: data.event,
                eventLabel: data.label,
            });
        }

        if (Project.mixpanel) {
            if (!data) {
                // eslint-disable-next-line
                console.error("MIXPANEL: Passed null event data")
            }
            if (!data || !data.category || !data.event) {
                // eslint-disable-next-line
                console.error("MIXPANEL: Invalid event provided", data);
            }
            mixpanel.track(data.event, {
                category: data.category,
            });
        }
    },
    trackPage(title) {
        if (Project.ga) {
            ga('send', {
                hitType: 'pageview',
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }

        if (Project.mixpanel) {
            mixpanel.track('Page View', {
                title,
                location: document.location.href,
                page: document.location.pathname,
            });
        }
    },
    alias(id) {
        if (Project.mixpanel) {
            mixpanel.alias(id);
        }
    },
    identify(id) {
        if (Project.mixpanel) {
            mixpanel.identify(id);
        }
    },
    register(email, firstName, lastName) {
        if (Project.mixpanel) {
            mixpanel.register({
                'Email': email,
                'First Name': firstName,
                'Last Name': lastName,
            });
        }
    },
    reset() {
        if (Project.mixpanel) {
            mixpanel.reset();
        }
    },
    log(namespace, ...args) {
        if (Project.logs[namespace]) {
            console.log.apply(this, [namespace, ...args]);
        }
    },
};

global.API = API;
export default API;
