/* eslint-disable no-unused-vars */
const obj1 = {}

const obj2 = {
  ...obj1,
}

const {
  mediaType,
  mediaSubtype,
  ...rest,
} = obj2
