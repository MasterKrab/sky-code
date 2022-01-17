const parseToObject = (data: string): Object =>
  new Function(`return ${data}`)();

export default parseToObject;
