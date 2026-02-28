'use strict';

/**
 * rate-prom router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rate-prom.rate-prom');
