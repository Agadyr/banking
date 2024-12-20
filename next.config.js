import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  /* config options here */
};

export default withSentryConfig(nextConfig, {
  org: "black-fox-9y",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
