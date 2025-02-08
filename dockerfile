# Use a stable Node.js image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage caching
COPY package*.json /app/

# Set the environment variable
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

# Install dependencies (production or development)
RUN if [ "$NODE_ENV" = "production" ]; then \
      npm install --only=production; \
    else \
      npm install; \
    fi

# Copy the remaining project files
COPY . .

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
