export function camelCaseToNormalWords(camelCaseString: string) {
  return camelCaseString.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
}

export function areObjectFieldsEmpty(obj: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === "") {
      return true;
    }
  }
  return false;
}
