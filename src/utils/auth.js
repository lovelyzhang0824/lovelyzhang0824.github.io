// 代码封装
//1.登录
export const login =(user)=>
localStorage.setItem("token",JSON.stringify(user));

//上边是箭头函数
// export function login2(user){
//     localStorage.setItem("token",JSON.stringify());
// }

//2.是否登录
export const isLogined =()=>{
    if(localStorage.getItem("token")){
        return true;
    }else{
        return false;
    }
};

//3.退出登录
export const logOut=()=>localStorage.removeItem("token");