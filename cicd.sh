#!/bin/bash

cd /root/opsgoat
git pull https://github.com/agabyte18/trackr.git
source /root/.nvm/nvm.sh
npm ci
npx prisma migrate deploy
npx prisma generate
npm run build
systemctl restart opsgoat

