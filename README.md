# fullstack-boilerplate

## Local development

```
docker build -t ace-plt .
docker compose up
```

## Deployment

### Fly.io

```
fly deploy
```

db

```
fly postgres
```
proxy remote postgres locally

```
flyctl proxy 5432 -a ace-db
```

run github actions locally

```
act -W .github/workflows/main.yml --container-daemon-socket -
```
