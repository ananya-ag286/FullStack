function register(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("register here")
            resolve();
        },10000)
    })
}
//function register(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("register here")
//             reject("Failed to register");
//         },10000)
//     })
// }
//similar for all
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("login here")
            resolve();
        },5000)
    })
}
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Fetch data from DB")
            resolve();
        },3000)
    })
}
function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("display Data")
            resolve();
        },6000)
    })
}
// register()
//     .then(login)
//     .then(getData)
//     .then(displayData)
//     .catch((err)=>{
//         console.log("Error",err);
//     })
async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("Error",err);
    }
}
test();
console.log("Call another application");