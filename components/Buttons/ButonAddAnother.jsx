import Image from "next/image"

const ButonAddAnother = ({onClick}) => {
  return <button onClick={onClick} className="border h-12 text-[#7660b9]">
    <Image src="/images/add.svg" width={10} height={10} alt="add" />
    <span className="pl-3">Agregar otro</span>
  </button>
}

export default ButonAddAnother