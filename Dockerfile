FROM nginx:1.17-alpine

COPY ./dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
