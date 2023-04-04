export type UsersPhotosType = {
    small?: null | string
    large?: null | string
}


export type UsersNestingType = {
    name: string
    id: number
    uniqueUrlName: null | string
    status: null | string,
    followed: boolean
    photos: UsersPhotosType
}

export type UsersType = {
    items: UsersNestingType
}