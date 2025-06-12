#!/bin/bash

# Exit if any command fails
set -e

# Build the project in production mode
echo "🔧 Building Angular project..."
ng build --configuration production --base-href=/v2/ --output-path=dist/v2/browser

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/v2/browser --repo=https://github.com/soninarayan/v2.git

echo "✅ Deployment complete!"
