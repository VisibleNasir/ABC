
import cpp from "../assets/cpp.jpg"

const content = [ {id:1 , name:"CPP", src:cpp},{id:2 , name:"Java"},{id:3 , name:"Python"},{id:4 , name:"Array"} ,{id:5 , name:"Binary Search"} ,{id:6 , name:"Strings"} ,{id:7 , name:"Two Pointers"} ,{id:8 , name:"Recursion"},{id:9 , name:"Stack"},{id:10 , name:"Queue"},{id:11 , name:"Binary Tree"} ,{id:12 , name:"Binary Search Tree"},{id:12 , name:"Graph"},{id:13 , name:"Dynamic Programming"}]
  

const Content = () => {
  return (
    <div className=' w-full grid border-t grid-cols-1  md:grid-cols-3 xl:grid-cols-5 gap-4 p-4'>
      {content.map(subject=>(
        <div key={subject.id} className='bg-zinc-700 rounded-2xl  '>
          <img src={subject.src|| cpp} alt="" className='rounded-t-2xl '/>
          <div className="p-2 ml-2">{subject.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Content
