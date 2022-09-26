# 基础镜像
FROM nginx:latest
# 创建目录run
RUN mkdir -p /opt/run/dist

# 复制打包完成后的/dist目录到/opt/dist目录下
COPY ./dist/  /opt/run/dist/
# 复制nginx conf文件
COPY ./nginx.conf /etc/nginx/conf.d/

# 添加目录可访问权限
RUN chmod -R 777 /opt/run/dist/

# 启动容器时执行
ENTRYPOINT nginx -g 'daemon off;'
EXPOSE 8080
