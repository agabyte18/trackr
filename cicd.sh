#!/bin/bash

cd /root
git clone https://github.com/agabyte18/trackr.git
rm -rf opsgoat && mv trackr opsgoat
cd opsgoat
source /root/.nvm/nvm.sh
npm ci
npx prisma migrate deploy
npx prisma generate
npm run build
systemctl restart opsgoat
#
#
#
