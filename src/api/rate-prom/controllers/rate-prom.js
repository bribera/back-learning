'use strict';

/**
 * rate-prom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::rate-prom.rate-prom');
