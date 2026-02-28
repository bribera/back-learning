'use strict';

/**
 * rate-prom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rate-prom.rate-prom');
