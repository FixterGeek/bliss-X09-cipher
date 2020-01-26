let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(' ')
const cipher = {
  code(string = "abc", offset = 33, back) {
    let resu = []
    offset = Number(offset)
    for (let i of string) {
      if (i.charCodeAt(0) === 32) {
        resu.push(" ")
        continue
      }
      i = i.toUpperCase()
      let n = back ? (i.charCodeAt(0) + 65 - offset) % 26 + 65 : (i.charCodeAt(0) - 65 + offset) % 26 + 65
      resu.push(String.fromCharCode(n))
    }
    return resu.join('')
  },
  decode(string = "hij", offset = 33) {
    return this.code(string, offset, true)
  }
}

export default cipher;
