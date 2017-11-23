#!/usr/bin/env node

const stdin = process.openStdin()
const message = process.argv[2]

process.stdout.write(`${message} `)
stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (chunk) {
  console.log(`${chunk}`)
  if (['y', 'n', 'c'].indexOf(chunk.toLowerCase())) {
    process.exit(1)
  } else {
    process.exit(0)
  }
})
