#!/bin/bash

# Exit if any command fails
set -e

# Build the project in production mode
echo "🔧 Building Angular project..."
ng build --configuration production

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/latest-portfolio/browser

echo "✅ Deployment complete!"
