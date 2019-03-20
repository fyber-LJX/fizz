import React, { useState, useEffect, ChangeEvent } from "react"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import "./index.scss"
import { Select, MenuItem } from "@material-ui/core"
import { testPromise } from "src/fetch/test"
import { CategoryItem } from "src/shared/models/category"

// interface PropsType {}
// interface StateType {
//   name: string
//   content: string
//   category: string
//   categoryList: Array<CategoryItem>
//   tagName: string
// }

const Edit = () => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [categoryList, setList] = useState([] as Array<CategoryItem>)
  const [tagName, setTagName] = useState("")

  const getList = async () => {
    const categoryList = (await testPromise()) as Array<CategoryItem>
    setList(categoryList)
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="writer-edit">
      <div className="writer-header">
        <FormControl className="control">
          <InputLabel htmlFor="component-simple">标题</InputLabel>
          <Input
            id="component-simple"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </FormControl>
        <FormControl className="control">
          <InputLabel htmlFor="age-helper">分类</InputLabel>
          <Select
            value={category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setCategory(e.target.value)
            }
            input={<Input name="age" id="age-helper" />}
          >
            {categoryList.map((item: CategoryItem) => (
              <MenuItem value={item.id} key={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="control">
          <InputLabel htmlFor="component-simple">Tag</InputLabel>
          <Input
            id="component-simple"
            value={tagName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTagName(e.target.value)
            }
          />
        </FormControl>
        <div
          contentEditable
          className="textarea"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          suppressContentEditableWarning={true}
        >
          {content}
        </div>
      </div>
      <div className="writer-content" />
    </div>
  )
}

export default Edit
