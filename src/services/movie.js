import {post} from '../utils/request';
//获取所有的热映信息
export function allHotMovies(){
    return post('/api/v2/proxy',{//请求的地址
url:"https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290"//传递的参数叫url是请求地址
});
}
//根据id获取影片详情
export function movie(id){
    return post('/api/v2/proxy',{
url:"https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId="+id  //id拼接
});
}

