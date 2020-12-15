import request from './request'

function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

export {
  getHomeMultiData,
  getHomeGoods
}