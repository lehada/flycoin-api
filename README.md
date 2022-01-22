# FlyCoin API

---

### Информация
##### Обращаться к API можно не более 5-ти раз в 1-ну секунду!
##### Ссылка на перевод - https://vk.com/app7777893#pay=655037535 (вместо "655037535" - ваш цифровой VK ID)

### Установка

```js
$ npm i flycoin-api
```

### Использование

```js
const FlyCoin = require('flycoin-api');
const api = new FlyCoin('ваш access token');
```

## Примеры

**Получение информации**

```js
(async () => {
  const result = await api.GetInfo();
  console.log(result);
})();
```

---

**Получение информации о переводах**

```js
(async () => {
  const result = await api.GetHistory();
  console.log(result);
})();
```

---

**Создание перевода**

```js
(async () => {
  const result = await api.CreateTransfer(peer_id, amount);
  console.log(result);
})();
```

peer_id - VK ID пользователя, которому совершаем перевод

amount - сумма перевода

---

**Изменение информации о пользователе**

```js
(async () => {
  const result = await api.SetUserInfo(merchant_name, merchant_photo);
  console.log(result);
})();
```

merchant_name - Название магазина

merchant_photo - Ссылка на аватарку магазина

---

#### Официальная группа приложения - https://vk.com/flycoinapp
#### Главный администратор приложения - https://vk.com/0a0a0a0a0a.json
#### Ссылка на приложение - https://vk.com/app7777893
#### Разработчик библиотеки - https://vk.com/ymenaidtopa.json
#### Страница на npmjs - https://npmjs.com/package/flycoin-api
#### Страница на GitHub - https://github.com/lehada/flycoin-api
