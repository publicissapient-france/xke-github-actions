FROM nginx:<CHOOSE_VERSION>

COPY ./dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
