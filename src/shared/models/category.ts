interface Category {
    categoryList: Array<CategoryItem>
}

interface CategoryItem {
    id: number
    title: string
    pv: number
    background: string
    name: string
    blogNum: number
}

export { Category, CategoryItem }
