const str = 'Name: "Alvaro", phone: 123456789.'

const regexPattern = /Name:\s"(?<name>[a-zA-Z]+)",\sphone:\s(?<phone>[0-9]+)\./

const matches = str.match(regexPattern)

console.log(matches)

//

const {name, phone} = str.match(regexPattern).groups

console.log(name, phone)