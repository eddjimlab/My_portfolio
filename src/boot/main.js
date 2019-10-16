import db from '../db/db'
export default function getItems () {
  let img = ''
  let itemBackground = ''
  db.myItems.forEach(item => {
    img = item.img
    itemBackground = item.background
    console.log(img)
    console.log(itemBackground)
  })
}