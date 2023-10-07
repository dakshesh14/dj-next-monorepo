FROM nginx:1.23

WORKDIR /etc/nginx

# Module for hiding headers
RUN apt-get update && apt-get install -y nginx-extras

# Copy config files
COPY nginx.conf .
COPY headers.conf .


# Copy sites files
COPY sites-enabled/ ./

# Create new files as www-data, not root
RUN usermod -u 1000 www-data

CMD nginx
