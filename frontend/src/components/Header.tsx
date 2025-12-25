
import type { User } from '../pages/Umpcomingex'
import ThemeToggle from './ThemeToggle'

const Header = ({ user }:{ user:User }) => {
  return (
    <div className='flex m-auto bg-zinc-800 h-12 w-3xl items-center justify-around'>
      <h1>upcoming ex </h1>
      <div className='flex items-center justify-around w-1/8'>
        <ThemeToggle/>
        <User user={user}/>
      </div>
    </div>
  )
}

function User({ user }: {user : User}){
  return (
    <div className='flex border w-8 h-8 text-sm items-center justify-center font-light  rounded-full '>
       {user.name[0] || "N"} 
    </div>
  )
}


export default Header
