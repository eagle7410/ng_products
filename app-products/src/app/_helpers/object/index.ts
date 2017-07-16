
const isObject = (data:any) => !(!data || typeof data !== 'object');

const objectKeys = (data: any) =>isObject(data) ? Object.keys(data) : [];

export {
  isObject,
  objectKeys,
}
