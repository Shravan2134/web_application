FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY index.html index.html
COPY script.js script.js
COPY styles.css styles.css

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

