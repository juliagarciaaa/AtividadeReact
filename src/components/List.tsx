import { ReactNode } from "react"
interface IList{
     children ReactNode
}

export function list({children}: Ilist){
  return{
    <li>(children)</li>
  }
}