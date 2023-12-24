import Image from "next/image"
import bg from '../../assets/images/netflixteaser.png'
import { Button } from "../ui/button"
import {AiFillGithub} from 'react-icons/ai'
import {signIn} from 'next-auth/react'

const Login = () => {
  return (
    <div className={"w-full h-screen"}>
      <div className={"absolute inset-0"}>
        <Image 
        src={bg} 
        alt="bg"
        fill
        className={"opacity-60"}
        />
      </div>
      <div className={"relative z-10 w-[500px] rounded-md bg-black/50 h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4"}>
        <div className={"flex h-full items-center justify-center flex-col"}>
          <Button 
            className="mt-4 flex items-center gap-2 w-full h-[56px] bg-red-600 text-white hover:bg-red-500"
            onClick={() => signIn('github')}
          >
            <AiFillGithub className={"w-7 h-7"}/>
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login