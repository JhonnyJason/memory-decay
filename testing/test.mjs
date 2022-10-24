import * as decay from "../output/index.js"



async function run() {

    const shorttermMemory = {}
    decay.makeForgetableMemory(shorttermMemory)
    const shortertermMemory = decay.makeForgetableMemory({}, 2000)
    

    //manual shortertermMemory - 2s
    shortertermMemory.data = "0x777fefe2345feba"
    shortertermMemory.letForget("data")
    console.log("set shortertermMemory2 data: "+shortertermMemory.data)
    await waitMS(3000)
    console.log("shortertermMemory2 data after 3s: "+shortertermMemory.data)

    //manual specific shorttermMemory 1s
    shorttermMemory.data = "0xfefefeba2345777"
    shorttermMemory.letForget("data", 1000)
    console.log("set shorttermMemory1 data: "+shorttermMemory.data)
    await waitMS(2000)
    console.log("shorttermMemory1 data after 2s: "+shorttermMemory.data)

    //all default shortermMemory - 30s
    shorttermMemory.data = "0x2345777fefefeba"
    shorttermMemory.letForget("data")
    console.log("set shorttermMemory30 data: "+shorttermMemory.data)
    await waitMS(32000)
    console.log("shorttermMemory30 data after 32s: "+shorttermMemory.data)
    
}






async function waitMS(ms) {
    await  new Promise((resolve) => setTimeout(resolve, ms))
}

run()
