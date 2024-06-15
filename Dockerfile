FROM nginx:alpine
COPY ./build/src/ /usr/share/nginx/html
