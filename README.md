# Breathhh-Web

```sh
yarn start # http://localhost:5000
```

```sh
yarn build
yarn serve # http://localhost:5000
```

## Способ авторизоваться локально

1. Залогинется на проде
2. Вставить куку token вручную на localhost

## [pages](https://www.figma.com/file/4h13xBqtDoOSnCtwgZeJti/Yahht?node-id=238%3A262)

- http://localhost:5000/
- http://localhost:5000/login
- http://localhost:5000/onboarding

## docker

```sh
docker build -t breathhh-web .
docker run --init --rm -itp 5000:5000 breathhh-web
# http://localhost:5000
```
