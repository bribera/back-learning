module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors', {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000'], // URL de votre Next.js
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
