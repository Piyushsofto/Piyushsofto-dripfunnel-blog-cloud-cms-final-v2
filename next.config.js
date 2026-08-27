/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // MUST exactly match your GitHub repository name
  // Example:
  // https://piyushsoft.github.io/dripfunnel-blog-cloud-cms-final-v2/
  basePath: "/dripfunnel-blog-cloud-cms-final-v2",

  // Useful for GitHub Pages static hosting
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
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};

module.exports = nextConfig;