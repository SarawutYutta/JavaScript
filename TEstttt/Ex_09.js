IP1 = "1.2.3.4"
IP2 = "1.2.3"
IP3 = "1.2.3.4.5"
IP4 = "123.45.67.89"
IP5 = "123.456.78.90"
IP6 = "123.045.067.089"

function JaValidIP(IP) {
    if (IP == IP1) {
        IP = IP1
        console.log(true)
    }else{
        console.log(false)
    }
}

JaValidIP(IP1)
JaValidIP(IP2)
JaValidIP(IP3)
JaValidIP(IP4)
JaValidIP(IP5)
JaValidIP(IP6)

//ตรวจสอบความถูกต้องของ IP 