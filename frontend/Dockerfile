FROM node:14-alpine3.10 as react_builder

WORKDIR /app

COPY ./react/package*.json /app/

RUN npm install

COPY ./react/ /app/

RUN npm run build


FROM node:14-alpine3.10 as server_builder

WORKDIR /app

COPY ./webserver/package*.json /app/

RUN npm install -g nodemon
RUN npm install

COPY ./webserver/ /app/

COPY --from=react_builder /app/build/ ./build/

CMD ["nodemon", "server.js"]
