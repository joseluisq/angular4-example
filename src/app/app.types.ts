export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface Album {
  userId: number
  id: number
  title: string
}

export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
