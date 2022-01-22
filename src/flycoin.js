const fetchP = import('node-fetch').then((mod) => mod.default);
const fetch = (...args) => fetchP.then((fn) => fn(...args));

// Класс Апи
class FlyCoin {
  // Конструктоп класса (получаем access token)
  constructor(access_token) {
    // Если не указан токен, даем пизды
    if (!access_token) throw new Error(`[ FlyCoin ] Вы не указали авторизационный токен!`);
    this.access_token = access_token;
  }

  // Метод "getUserInfo" - узнаем информацию о пользователе
  async GetInfo() {
    let req = await fetch(
      'https://jsonuser.xyz:5000/api/v2/getUserInfo' +
        '?access_token=' +
        this.access_token
    );
    req = await req.json();
    return req;
  }

  // Метод "GetTransferHistory" - получаем информацию о переводах
  async GetHistory() {
    let req = await fetch(
      'https://jsonuser.xyz:5000/api/v2/getTransferHistory' +
        '?access_token=' +
        this.access_token
    );
    req = await req.json();
    return req;
  }

  // Метод "sendCoins" - перевод
  async CreateTransfer(peer_id, amount) {
    let req = await fetch(
      'https://jsonuser.xyz:5000/api/v2/sendCoins' +
        '?access_token=' +
        this.access_token +
        '&user_id=' +
        peer_id +
        '&amount=' +
        amount
    );
    req = await req.json();
    return req;
  }

  // Метод "setUserInfo" - изменяем информацию о пользователе
  async SetUserInfo(merchant_name, merchant_photo) {
    let req = await fetch(
      'https://jsonuser.xyz:5000/api/v2/setUserInfo' +
        '?access_token=' +
        this.access_token +
        '&shop_name=' +
        merchant_name +
        '&shop_photo=' +
        merchant_photo
    );
    req = await req.json();
    return req;
  }
}

// Экспортируем всё, что находится выше
module.exports = FlyCoin;