FROM node:10-alpine AS builder

ENV HOME='/usr/src/app'

WORKDIR $HOME
COPY ./ $HOME

# Instala 'git' para pode fazer clone de dependências privadas
RUN    apk add --no-cache git \
    && npm install \
    && npm rebuild --quiet \
    && npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
