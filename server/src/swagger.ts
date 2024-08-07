const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'EyakMoyak',
      version: '1.0.0',
      description: 'My Express API with Swagger'
    },
    servers: [
      {
        url: 'https://34.47.126.125:3000/',
        description: 'Development server'
      }
    ]
  },
  apis: ['./src/routes/*.ts']
};

const specs = swaggerJsdoc(options);

export default specs;
