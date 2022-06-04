
module.exports = function (source, sourceMap, meta) { 
  return handleConsole(source);
}

function handleConsole(source) { 
  return source.replace(/console.log\(['|"](.*?)['|"]\)/, '');
}