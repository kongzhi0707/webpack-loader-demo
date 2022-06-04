
function bLoader(content, sourceMap, meta) { 
  console.log("---开始执行bLoader Normal Loader---");
  return content + "bLoader->";
}

bLoader.pitch = function (remainingRequest, precedingRequest, data) { 
  console.log('---开始执行bLoader Pitching Loader---');
  return "bLoader Pitching Loader->";
}
module.exports = bLoader;