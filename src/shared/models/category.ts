interface Category {
    categoryList: Array<CategoryItem>
}

interface CategoryItem {
    categoryId: number
    title: string
    pv: number
    background: string
    name: string
    blogNum: number
}

export { Category, CategoryItem }
