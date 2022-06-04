
module.exports = function (source, sourceMap, meta) { 
  // 获取 webpack 配置中传来的 option 参数
  const options = this.getOptions();
  console.log('----options----', options);
  this.callback(null, addSign(source, options.sign));
}

function addSign(content, sign) {
  return  `/** ${sign} */\n${content}`
}