
export default function InputWithoutBordersWhenDisabled({value, onChange, disabled,className}) {
  return (
    <input value={value} disabled={disabled} onChange={onChange} className={`${disabled?"border-none":"border"} ${className} h-full w-full p-2 focus-visible:outline-none rounded`}/>
  )
}
