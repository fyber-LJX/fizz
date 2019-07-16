interface PropsType {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
}

const Input = (props: PropsType) => {
  const { value, onChange, className, placeholder } = props

  return (
    <input
      value={value}
      type="text"
      placeholder={placeholder}
      className={className}
      onChange={e => onChange(e.target.value)}
    />
  )
}
