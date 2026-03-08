# ===== Stage 1: Build Angular =====
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --configuration=production


# ===== Stage 2: Nginx Server =====
FROM nginx:alpine

# Xóa file mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build vào nginx
COPY --from=build /app/dist/*/browser /usr/share/nginx/html/

# Config nginx chạy port 8080 và hỗ trợ Angular routing
RUN echo 'server { \
    listen 8080; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Enable logs cho Cloud Run
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]