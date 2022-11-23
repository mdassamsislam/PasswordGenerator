// //Password Generator using JS
class Password {
    constructor() {
        console.log("Welcome to password generator");
        this.pass = ""
    }
    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let nums = "0123456789"
        let specialChars = "`~!@#$%^&*():;'|/"
        if (Password < 4) {
            console.log("Your password should be at least 4 characters long");
        }
        else {
            let i = 0
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += nums[Math.floor(Math.random() * nums.length)]
                this.pass += specialChars[Math.floor(Math.random() * specialChars.length)]
                i += 3;
                }
                    this.pass = this.pass.substr(0, len)
                    return this.pass
                  }
                }
              }
              
let p = new Password()
console.log(p.generatePassword(7)); 
