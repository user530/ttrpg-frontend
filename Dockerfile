FROM node:22-alpine

# Prepare dependencies
WORKDIR /app
COPY package.json .
RUN npm install

# Copy source code
COPY . .
RUN npm run build

# Expose port and run the app
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
