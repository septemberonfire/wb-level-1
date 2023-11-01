export async function asyncFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("You are looking awesome today!"), 1000)
  });

  const result = await promise;
  console.log(result);
}