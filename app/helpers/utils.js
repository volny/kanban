let ID = 0
export function generateID () {
  ID = ID + 1
  return `ID${ID}`
}
