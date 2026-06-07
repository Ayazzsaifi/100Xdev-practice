
//fetch request
async function main(){
    const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json=await response.json();
    console.log(json);
}
main();

//Fetch request with Method and header&Body

async function fethMethod() {
    const response=await fetch("https://jsonplaceholder.typicode.com/todos/1",{
        method:"GET",
            body:{
                username:"Hero 738",
                password:"243324"
            },
            Headers:{
                Authorization:"HERO 123",

            }
        
    })
    
}