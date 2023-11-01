export const promiseImg = (url) => {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };
    image.src = url;
    console.log('Picatchu loading completed ^_^');
  });
};
