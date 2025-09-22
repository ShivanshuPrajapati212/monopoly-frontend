import { useNavigate } from "react-router"

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center'>
      <div><img src="/logo.png" alt="logo" className='h-120 w-120'/></div>
      <div className='text-2xl'>
        <button onClick={()=> navigate("/game")} type="button" class="text-white bg-red-700 hover:bg-red-800 cursor-pointer font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2">Play Monopoly!!!</button>
      </div> 
    </div>
  )
}

export default HomePage
