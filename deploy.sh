#!/bin/sh
# deploy.sh
# Easy getcallr.com deployment script to github.

# Push to the 'site' branch.
git push origin site

# Build the site.
grunt build

# Deploy the site to github.
grunt buildcontrol:github
