module.exports = {
  output: "export",

  basePath: "/decap-blog-template",

  images: {
    unoptimized: true,
  },

  pageExtensions: ["js", "jsx", "ts", "tsx"],

  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.yml$/,
        type: "json",
        use: "yaml-loader",
      },
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      }
    );

    return config;
  },
};