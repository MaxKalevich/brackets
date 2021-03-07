
module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let a = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (str[i] === bracketsConfig[j][i]) {
                stack.push(str[i])
            }
            else {
                a++
            }
        }
    }
    if (a !== 0) return false
    if (a === 0) return true
}
