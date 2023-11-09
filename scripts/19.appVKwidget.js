export default async () => {
  const appID = 51787955
  const token = '2889755d2889755d2889755d3c2b9f4dee228892889755d4dc31a0173a86c1718d03001'
  const requestLink = 'https://api.vk.com/method/status.get?<PARAMS>&v=5.131'

  let response = await fetch(url);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = await response.json();
}
}