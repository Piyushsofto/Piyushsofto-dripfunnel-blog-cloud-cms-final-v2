/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/Piyushsofto-dripfunnel-blog-cloud-cms-final-v2",

  trailingSlash: true,

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

module.exports = nextConfig;