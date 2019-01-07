import config from '../config.js';

export function get(url, data) {
  return http(url, 'GET', data);
}

export function post(url, data) {
  return http(url, 'POST', data);
}

export function posts(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      //url: 'http://localhost:8080' + url,
      url: 'http://129.204.114.107' + url,
      method: 'POST',
      data,
      success: function(res) {
        if (res.data.code != -1) {
          resolve(res.data);
        } else {
          reject(res.data.msg);
        }
      }
    });
  });
}

function http(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.service.myhost + url,
      method,
      data,
      success: function(res) {
        if (res.data.code == 0) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      }
    });
  });
}
