export default {
  name: "Метро 2033",
  author: "Дмитрий Глуховский",
  year: 2011,
  getName() {
    console.log(this.name);
  },
  setName(str) {
    this.name = str;
  },
  getAuthor() {
    console.log(this.author);
  },
  setAuthor(str) {
    this.author = str;
  },
  getYear() {
    console.log(this.year);
  },
  getYear(num) {
    this.year = num;
  },
};
