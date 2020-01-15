import axios from 'axios'
const instance =axios.create({//创建一个实例
timeout:5000,//设置一个网络请求超时时间
baseURL:'http://api.cat-shop.penkuoer.com'//web服务器的根地址
})


//导出几个方法   config表示配置信息
export function get(url,config){
    return instance.get(url,config)
}
export function post(url,data,config){
    return instance.post(url,data,config)
}
