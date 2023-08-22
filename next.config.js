// next.config.js
module.exports = {
    distDir: 'build', // Custom build directory
  
    // Frame security
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
      ];
    },
  };
  