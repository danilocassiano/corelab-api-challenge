FROM node:latest

# Create app directory
WORKDIR /app

# Copie o package.json e o yarn.lock
COPY package.json yarn.lock ./
COPY prisma ./prisma/

# Instale as dependências usando Yarn
RUN yarn install

COPY . .

# Construa o projeto
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]