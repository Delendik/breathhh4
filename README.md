# Breathhh-Web

```sh
yarn start # http://localhost:5000
```

```sh
yarn build
npx serve # http://localhost:5000

npx eslint 'src/**/*.{js,jsx,ts,tsx}' --fix
npx prettier 'src/**/*.{js,jsx,ts,tsx,scss,css,json}' --write
npx stylelint "src/**/*.{css,scss}" --fix
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

## swagger

https://api.breathhh.app/api-docs/index.html (логин/пароль можно узнать в слаке)

## payment / paddle

```sql
-- сбросить триал
UPDATE users SET trial_from=null, trial_to=null, subscription_state='subscription_not_active' where id = '__USER_ID_HERE__';

-- сбросить подписку
UPDATE users SET subscription_state='subscription_not_active' where id = '__USER_ID_HERE__';
```

https://developer.paddle.com/getting-started/sandbox#test-cards

`4242 4242 4242 4242` - карта для теста оплаты

https://developer.paddle.com/guides/how-tos/checkout/post-checkout
https://developer.paddle.com/reference/paddle-js/checkout-events
