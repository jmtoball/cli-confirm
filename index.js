#!/usr/bin/env node

const stdin = process.openStdin()
const message = process.argv[2]

process.stdout.write(`${message} `)
stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (chunk) {
  console.log(`${chunk}`)
  if (chunk.toLowerCase() === 'y') {
    process.exit(0)
  } else {
    process.exit(1)
  }
})
