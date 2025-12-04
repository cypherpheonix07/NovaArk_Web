# Convenience Makefile for local Docker tasks
.PHONY: up down ps logs-app logs-api build

up:
	docker compose up --build -d

down:
	docker compose down

ps:
	docker compose ps

logs-app:
	docker compose logs -f app

logs-api:
	docker compose logs -f api

build:
	npm run build
