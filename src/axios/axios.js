import axios from 'axios'
import qs from 'qs'

// 类
function Ajax(obj) {

}
Ajax.prototype = axios.create({
  baseURL: 'http://192.168.53.72:9555/', // 基本路径
  withCredentials: true
})

Ajax.prototype.interceptors.request.use(config => {
  if(!config.type) {
    // json格式
    config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  } else if(config.type="url") {
    // 序列化格式
    config.data = qs.stringify(config.data, {arrayFormat: 'repeat'});
    config.headers.post['Content-Type']= 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  return config
})

const _ajax = new Ajax()

export default _ajax