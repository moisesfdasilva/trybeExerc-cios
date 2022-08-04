function encode(fraseEncode) {
  let novaFraseEncode = fraseEncode;
  let aeiou = [null, 'a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < aeiou.length; index += 1) {
    novaFraseEncode = novaFraseEncode.replaceAll(aeiou[index], index);
  }
  return novaFraseEncode;
}

module.exports = encode;
