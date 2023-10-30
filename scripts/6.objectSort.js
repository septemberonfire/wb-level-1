export default () => {
  const people = [
    {name: 'John Kalligan', age: 25},
    {name: 'Peter Parker', age: 32},
    {name: 'Juliet Massacre', age: 28},
    {name: 'Taylor Barber', age: 21},
  ]

  people.sort( (a, b) => {
    if (a.age !== b.age) {
      return a.age > b.age ? 1 : -1
    } else if (a.age === b.age) {
      return a.name > b.name ? 1 : -1
    }
  })
  return people
}