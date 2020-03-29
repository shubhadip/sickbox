export const data = [
  {
    title: 'Amazon Movie Rental',
    desc:
      'Included in the box is a gift card for one movie rental from Amazon.',
    altTag: 'Amazon Movie Rental',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/12_660x275.png'
  },
  {
    title: 'Thermometer',
    desc: "You know the old hand on the forehead trick doesn't cut it",
    altTag: 'Thermometer',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/10_660x275.png'
  },
  {
    title: 'Emergen-C',
    desc:
      "Immune boosting Vitamin C, B Vitamins, and Electrolytes. It's never too late.",
    altTag: 'Emergen-C',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/6_660x275.png'
  },
  {
    title: 'Hot Cocoa',
    desc: 'Because not all drinks needs to be "healthy" when you are sick.',
    altTag: 'Hot Cocoa',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/4_660x275.png'
  },
  {
    title: 'Saltines + Chicken Noodle Soup',
    desc:
      "What's a sick day without some chicken noodle soup and some Saltines in the mix? ",
    altTag: 'Saltines + Chicken Noodle Soup',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/2225/6647/files/chickensoupsaltinecombo_660x275.png?v=1511142309'
  },
  {
    title: 'Ginger Drops',
    desc: 'Feeling queasy? These ginger candies are a safe and tasty fix.',
    altTag: 'Ginger Drops',
    imgUrl: 'https://cdn.shopify.com/s/files/1/2225/6647/files/11_660x275.png'
  }
];

export const productData = data.filter(
  elem => elem.title !== 'Amazon Movie Rental'
);

export const renderTitles = [
  'ginger ale',
  'herbal tea',
  'breath mints',
  'tissues',
  'cough drops'
];

export const ingredientMap1 = [
  'Chicken Noodle Soup',
  'Digital Thermometer',
  'Assorted Herbal Tea',
  'Ginger Ale'
];
export const ingredientMap2 = [
  'Saltines',
  'Breath Mints',
  'Cough Drops',
  'Tissues'
];
export const ingredientMap3 = [
  'Ginger Candy',
  'Hot Chocolate',
  'Emergen-C',
  'Free Movie Rental (Not pictured)'
];
export const ingredients = [
  ...ingredientMap1,
  ...ingredientMap2,
  ...ingredientMap3
];

export const API_TOKEN =
  'MWY5ZTNmNzFmN2M1ZTUyMjkwNjM2NGMzNmNjZTA3N2Q6M2RhMmI3OTgtNTY2MC00ZDRhLWJhZWQtNTZlMDI2MWRlYmZm';
export const JSON_CONTENT_TYPE = 'application/json';
export const GENERAL_ERROR = 'Something went wrong. Please try again later!';
/* tslint:disable */
export const Base64 = {
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  encode(e) {
    let t = '';
    let n, r, i, s, o, u, a;
    let f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = ((n & 3) << 4) | (r >> 4);
      u = ((r & 15) << 2) | (i >> 6);
      a = i & 63;
      if (isNaN(r)) {
        u = a = 64;
      } else if (isNaN(i)) {
        a = 64;
      }
      t =
        t +
        this._keyStr.charAt(s) +
        this._keyStr.charAt(o) +
        this._keyStr.charAt(u) +
        this._keyStr.charAt(a);
    }
    return t;
  },
  decode(e) {
    let t = '';
    let n, r, i;
    let s, o, u, a;
    let f = 0;
    e = e.replace(/[^A-Za-z0-9+/=]/g, '');
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = (s << 2) | (o >> 4);
      r = ((o & 15) << 4) | (u >> 2);
      i = ((u & 3) << 6) | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
        t = t + String.fromCharCode(r);
      }
      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }
    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode(e) {
    e = e.replace(/rn/g, 'n');
    let t = '';
    for (let n = 0; n < e.length; n++) {
      const r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode((r >> 6) | 192);
        t += String.fromCharCode((r & 63) | 128);
      } else {
        t += String.fromCharCode((r >> 12) | 224);
        t += String.fromCharCode(((r >> 6) & 63) | 128);
        t += String.fromCharCode((r & 63) | 128);
      }
    }
    return t;
  },
  _utf8_decode(e) {
    let t = '';
    let n = 0;
    let r = 0;
    // let c1=0;
    let c2 = 0;
    while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
        n += 2;
      } else {
        let c3 = 0;
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode(
          ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        n += 3;
      }
    }
    return t;
  }
};
