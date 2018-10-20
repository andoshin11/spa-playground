import { uppercase } from './utils'

type Hello = "hello" | "sup"

const greeting = (word: Hello) => console.log(`greeting: ${uppercase(word)}.`)

greeting('hello')
greeting("sup")
