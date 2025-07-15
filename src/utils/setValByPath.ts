export const setValByPath = (obj: any, path: string, value: unknown) => {
  const keys = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");

  // e.g. obj1[0][subobj] => [onj1, 0, subobj]
  // e.g. obj1[subobj] => [onj1, subobj]
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = isNaN(keys[i]) ? keys[i] : Number(keys[i]);

    // If next key is number → array, else object
    const nextKey = isNaN(keys[i + 1]) ? keys[i + 1] : Number(keys[i + 1]);
    if (current[key] === undefined) {
      current[key] = typeof nextKey === "number" ? [] : {};
    }

    current = current[key];
  }
//   element at last index 
//   ! === it means value is not null ts syntax
  const lastKey = isNaN(keys.at(-1)!) ? keys.at(-1)! : Number(keys.at(-1));
  current[lastKey] = value;
};
