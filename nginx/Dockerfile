FROM nginx
COPY conf /etc/nginx
VOLUME /var/log/nginx/log

EXPOSE 80
EXPOSE 443
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
