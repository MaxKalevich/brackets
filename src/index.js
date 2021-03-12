
module.exports = function check(str, bracketsConfig) {
    const exampleBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        const bracket = bracketsConfig[i].join("");
        exampleBrackets.push(bracket)
    }
    for (let i = 0; i < 100; i++) {
        exampleBrackets.forEach(el => {
            if (str.includes(el)) {
                let strNew = str.replace(el, "")
                str = strNew
            }
        })
    }

    if (str.length === 0) return true
    if (str.length !== 0) return false
}
