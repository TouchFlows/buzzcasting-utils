const randomId = (length: number = 6): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

const checkId = (id: string, existing = []) => {
  let match = existing.find(function (item) {
    return item === id;
  });
  return match ? false : true;
};

export const uniq = (length?: number, existing = []) => {
  const limit: number = 100; // max tries to create unique id
  let attempts: number = 0; // how many attempts
  let id: string = "";
  while (id == "" && attempts < limit) {
    id = randomId(length); // create id
    if (!checkId(id, existing)) {
      // check unique
      id = ""; // reset id
      attempts++; // record failed attempt
    }
  }
  return id; // the id or false if did not get unique after max attempts
};
