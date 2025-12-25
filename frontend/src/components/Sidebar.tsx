
const content = [ {id:1 , name:"CPP"},{id:2 , name:"Java"},{id:3 , name:"Python"},{id:4 , name:"Array"} ,{id:5 , name:"Binary Search"} ,{id:6 , name:"Strings"} ,{id:7 , name:"Two Pointers"} ,{id:8 , name:"Recursion"},{id:9 , name:"Stack"},{id:10 , name:"Queue"},{id:11 , name:"Binary Tree"} ,{id:12 , name:"Binary Search Tree"},{id:12 , name:"Graph"},{id:13 , name:"Dynamic Programming"}
]
  

const Sidebar = () => {
  return (
    <div className='w-1/4 border-t  p-2'>
      <h2>Check list</h2>
      {
        content.map(subject =>(
          <div className="flex gap-2  ">
            <input type="checkbox" />
            <p>{subject.name}</p>

          </div>
        ))
      }
      

    </div>
  )
}

export default Sidebar
