# Use official Node image to build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy source code and build the app
COPY . ./
RUN npm run build

# ---------- Production stage ----------

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy build files to Nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]