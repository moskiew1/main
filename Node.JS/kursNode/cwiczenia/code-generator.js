

const getParams = (args) => {
    const params = {};
    args.splice(2).forEach(x => {
        const parts = x.split('=');
        params[parts[0]] = parts[1].split(',')
    });
    return params;
}

const generateClas = (className, params) => {
    let code = `class ${className} {\n`;
    params.methods.forEach(method => {
        code += `\t${method}(${className.toLowerCase()}) {}\n`
    });
    code += `}`;
    return code;
}

const arg = process.argv.splice(2);
const type = arg[0].split(':')[1];
const name = arg[1];
const params = getParams(arg);

let code;
if (type ==='class') {
    code = generateClas(name,params); 
  }

  console.log(code)