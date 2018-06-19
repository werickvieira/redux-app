start:
	@echo Iniciando a aplicação
	yarn run start || npm start

install:
	@echo Instalando dependências
	yarn install || npm install

init:
	@echo Instalando dependências
	yarn istall && yarn run start || npm install && npm start

test:
	yarn run test || npm test

build:
	yarn run build || npm run build

.PHONY: start install init test build 

