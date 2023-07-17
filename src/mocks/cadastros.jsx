const cadastros = [
    {
        "title": "Inspiron 15 3000",
        "description": "11ª geração Core i5 8GB RAM SSD 1TB",
        "price": 2698.00,
        "type": "laptop",
        "sales": 11,
        "image": "https://m.media-amazon.com/images/I/61916dNVFYL._AC_UL320_.jpg"
      },
      {
        "title": "Apple iPhone 13",
        "description": "64GB Lilás",
        "price": 4500.00,
        "type": "cellphone",
        "sales": 21,
        "image": "https://m.media-amazon.com/images/I/41Zbbl4P+LL._AC_SL1000_.jpg"
      },
      {
        "title": "Samsung Galaxy Tab S6 Lite",
        "description": "64GB 4GB RAM Tela de 10.4",
        "price": 2066.00,
        "type": "tablet",
        "sales": 53,
        "image": "https://m.media-amazon.com/images/I/41IOWwTvpCL._AC_SL1000_.jpg"
      },
      {
        "title": "Caixa de som JBL Boombox 3",
        "description": "Preta BLuetooth 5.0",
        "price": 2400.00,
        "type": "speaker",
        "sales": 10,
        "image": "https://m.media-amazon.com/images/I/51zefFcMEiL._AC_SL1000_.jpg"
      },
      {
        "title": "iPad 10ª geração",
        "description": "64GB Prateado",
        "price": 4299.00,
        "type": "tablet",
        "sales": 8,
        "image": "https://m.media-amazon.com/images/I/41pCFSDVeBL._AC_SL1000_.jpg"
      },
      {
        "title": "Thinkpad X1 Carbon",
        "description": "11ª geração Core i7 16GB Ram SSD 250GB",
        "price": 7199.00,
        "type": "laptop",
        "sales": 5,
        "image": "https://m.media-amazon.com/images/I/51WoeXh3JcL._AC_UF894,1000_QL80_.jpg"
      },
      {
        "title": "Apple iPhone 14",
        "description": "128GB Roxo",
        "price": 5199.99,
        "type": "cellphone",
        "sales": 29,
        "image": "https://m.media-amazon.com/images/I/41Z8j2+aznL._AC_SL1000_.jpg"
      },
      {
        "title": "Caixa de som JBL Go 3",
        "description": "Preta BLuetooth 5.0",
        "price": 299.00,
        "type": "speaker",
        "sales": 100,
        "image": "https://m.media-amazon.com/images/I/71ufHRvvHaL._AC_SX679_.jpg"
      },
      {
        "title": "Xiaomi Redmi Pad",
        "description": "4GB RAM Prateado",
        "price": 1500.00,
        "type": "tablet",
        "sales": 2,
        "image": "https://m.media-amazon.com/images/I/31Bs1XBrnOL._AC_SY606_.jpg"
      },
      {
        "title": "Sennheiser HD 650",
        "description": "Fone de ouvido dinâmico Open back",
        "price": 3500.00,
        "type": "earphone",
        "sales": 1,
        "image": "https://m.media-amazon.com/images/I/819EPaGSO0L._AC_SL1500_.jpg"
      },
      {
        "title": "Motorola Moto E13",
        "description": "32GB 4GB RAM Grafite",
        "price": 649.99,
        "type": "cellphone",
        "sales": 19,
        "image": "https://m.media-amazon.com/images/I/512QeoN3xML._AC_SL1200_.jpg"
      },
      {
        "title": "KZ ZSN PRO X",
        "description": "Fone de ouvido intra auricular Dual Driver",
        "price": 210.00,
        "type": "earphone",
        "sales": 45,
        "image": "https://m.media-amazon.com/images/I/61S0qBH3MLL._AC_SL1500_.jpg"
      },
      {
        "title": "Caixa de som Edifier",
        "description": "Monitor de som Bluetooth 5.0",
        "price": 1349.00,
        "type": "speaker",
        "sales": 1,
        "image": "https://m.media-amazon.com/images/I/61IaS9risyL._AC_SL1280_.jpg"
      },
      {
        "title": "HyperX Cloud II",
        "description": "Fone de ouvido gamer",
        "price": 429.00,
        "type": "earphone",
        "sales": 3,
        "image": "https://m.media-amazon.com/images/I/71MJ3OaVqBL._AC_SL1500_.jpg"
      },
      {
        "title": "Acer Nitro 5",
        "description": "11ª geração Core i5 8GB Ram GTX 1650",
        "price": 4700.00,
        "type": "laptop",
        "sales": 4,
        "image": "https://m.media-amazon.com/images/I/61wxOWQ74kL._AC_SL1000_.jpg"
      },
      {
        "title": "Samsung Book",
        "description": "11ª geração Core i7 8GB Ram SSD 250GB",
        "price": 2430.00,
        "type": "laptop",
        "sales": 8,
        "image": "https://m.media-amazon.com/images/I/51vLIXjlTvL._AC_SL1000_.jpg"
      },
      {
        "title": "Tablet Positivo Twist Tab+",
        "description": "2GB RAM 64GB Android 11",
        "price": 349.00,
        "type": "tablet",
        "sales": 32,
        "image": "https://m.media-amazon.com/images/I/41Plf8jXQlL._AC_SL1000_.jpg"
      },
      {
        "title": "Xiaomi Redmi Note 12",
        "description": "128GB 6GB RAM Preto",
        "price": 1349.00,
        "type": "cellphone",
        "sales": 15,
        "image": "https://m.media-amazon.com/images/I/51fAmmSJcUL._AC_SL1000_.jpg"
      },
      {
        "title": "Galaxy Buds 2 Pro",
        "description": "Fone de ouvido TWS Grafite",
        "price": 855.00,
        "type": "earphone",
        "sales": 19,
        "image": "https://m.media-amazon.com/images/I/61njUOVYzML._AC_SL1500_.jpg"
      },
      {
        "title": "Apple Macbook Air 2020",
        "description": "Processador M1 8GB RAM 256GB",
        "price": 7999.00,
        "type": "laptop",
        "sales": 3,
        "image": "https://m.media-amazon.com/images/I/41-RhQeujUL._AC_SL1000_.jpg"
      }
]

export default cadastros