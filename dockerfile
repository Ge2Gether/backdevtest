FROM node:12

ENV dir_base '/var/www/code'

RUN apt-get update -y

RUN mkdir -p $dir_base
ADD code/ "$dir_base/"
# ADD .env "$dir_base/"

WORKDIR $dir_base
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
