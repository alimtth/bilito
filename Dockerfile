# base image
FROM node:21.4.0

# Set working directory
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm set-script prepare '' && npm install
RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

EXPOSE 3000
ENV NODE_OPTIONS="--max-old-space-size=7168 --max-http-header-size=24576"
RUN set -ex echo 'Asia/Tehran' > /etc/timezone; ln -fs /usr/share/zoneinfo/Asia/Tehran /etc/localtime


CMD ["npm", "start"]


