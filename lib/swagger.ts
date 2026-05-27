const swaggerSpec = {

  openapi: "3.0.0",

  info: {

    title:
      "CollegeHub API",

    version:
      "1.0.0",

    description:
      "College Recommendation Platform APIs",

  },

  servers: [

    {
      url:
        "http://localhost:3000/api",
    },

  ],

  paths: {

    "/score": {

      post: {

        summary:
          "Rank colleges using weighted scoring",

        tags: [
          "Score"
        ],

      },

    },

    "/predictor/{id}": {

      get: {

        summary:
          "Predict college probability",

        tags: [
          "Predictor"
        ],

      },

    },

  },

};

export {
  swaggerSpec
};