import React, { useState, useEffect, ChangeEvent } from "react"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import "./index.scss"
import { Select, MenuItem, Button } from "@material-ui/core"
import { testPromise } from "src/fetch/test"
import { CategoryItem } from "src/shared/models/category"
import { from, interval, of } from "rxjs"
import { switchMap, filter, catchError, throttleTime } from "rxjs/operators"

interface PropsType {
  save: (options: Article) => void
  setStatus: (value: number) => void
}
export type Article = {
  name: string
  content: string
  category: string
  tagName: string
}

const Edit = (props: PropsType) => {
  const { save, setStatus } = props
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [categoryList, setList] = useState([] as Array<CategoryItem>)
  const [tagName, setTagName] = useState("")

  const getList = async () => {
    const categoryList = (await testPromise()) as Array<CategoryItem>
    setList(categoryList)
  }
  const getArticle = () => {
    const $content: HTMLDivElement | null = document.querySelector(".textarea")
    return {
      name,
      content: $content ? $content.innerText : "",
      category,
      tagName
    }
  }

  const saveBack = () => {
    const source$ = interval(2000)
    source$
      .pipe(
        switchMap(() =>
          from(of(getArticle())).pipe(
            filter((value: Article) => {
              return value.content !== ""
            }),
            catchError((error: Error) => of(error))
          )
        ),
        throttleTime(5000)
      )
      .subscribe((value: Article) => {
        save(value), null, null
      })
  }

  useEffect(() => {
    getList()
    saveBack()
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
        <Button
          variant="contained"
          className="fizz-back-primary"
          onClick={() => setStatus(2)}
          style={{ color: "#fff" }}
        >
          预览
        </Button>
        <div
          contentEditable
          className="textarea"
          suppressContentEditableWarning={true}
        />
      </div>
      <div className="writer-content" />
    </div>
  )
}

export default Edit
