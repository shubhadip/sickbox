FROM node:alpine

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 8082
CMD ["npm","run","webpack:client"]

# docker build -t shubhadip/sickbox -f dev.dockerfile  .
# docker run -it -p 8082:8082  -v /app/node_modules -v ${PWD}:/app -t shubhadip/sickbox:latest