const axios = require("axios");

async function main() {
    const response=await axios.post("https://httpdump.app/dumps/59ff1353-eb60-417f-94c7-101592f51c3e",{
         name:"hero 13",
        pass:234234
    },{
        headers:{
            Authorization:"hfiew",
        }
    });
    console.log(response.data);
}

main();