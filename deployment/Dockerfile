# Use version 18 of node as the base
FROM node:18-alpine as build

# Create directory to hold app
WORKDIR /app

# Only copy package json to ensure we use cache when decedencies don't change
COPY ./gno-inc/package*.json ./
RUN yarn

# Copy over rest of the source and build
COPY ./gno-inc ./
RUN yarn build

FROM node:18-alpine
COPY --from=build /app /app
WORKDIR /app

EXPOSE 3006
# Run the server
CMD ["yarn", "start"]