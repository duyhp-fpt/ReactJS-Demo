// import './App.css';
import { useEffect, useState } from 'react'

function App() {
  // const [counter, setCounter ] = useState(1)

  // const handleIncrease = () => {
  //   setCounter(counter + 1)
  // }

  // return (
  //   <div className="App">
  //     <h1>
  //       {counter}
  //     </h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard'
// ]

// const [gift, setGift] = useState()

// const randomGift = () => {
//   const index = Math.floor(Math.random() * gifts.length)

//   setGift(gifts[index])
// }
 
//   return (
//     <div className="App">
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// }

// const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(() => {
//   	const storeJobs = JSON.parse(localStorage.getItem('jobs'));
    
//     return storeJobs ?? [];
//   });

//   const handleSubmit = () => {
//     setJobs((prev) => {
//       const newJobs = [...prev, job]
//         localStorage.setItem('jobs',JSON.stringify(newJobs))
//         return newJobs
//     });
//   };

//   const removeJob = (key) => {
//     setJobs((prev) => {
//     	prev.splice(key, 1);
//     	localStorage.setItem('jobs',JSON.stringify([...prev]))
//    	 	return [...prev]
//     })
//   };

//   return (
//     <div className="App">
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job} <button onClick={()=> removeJob(index) }>X</button></li>
//         ))}
//       </ul>
//     </div>
//   );
// }

  const tabs = ['posts', 'comments','albums','photos','todos','users']

  function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [types, setTypes] = useState('posts')
    const [showGotoTop, setShowGoToTop] = useState(false)

    useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/${types}`)
        .then(res => res.json())
        .then(posts => setPosts(posts))
    }, [types])

    useEffect(()=> {
      const handleScroll = () => {
        if (window.scrollY >= 200) {
          setShowGoToTop(true)
        }
        else {
          setShowGoToTop(false)
        }
        // ~
        // setShowGoToTop(window.scrollY >= 200) 
        
      }

      window.addEventListener('scroll', handleScroll)
      // Cleanup Function
      return () =>{
      window.removeEventListener('scroll', handleScroll)
      }

    },[])

    return (
      <div>

        {
          tabs.map(tab => (
            <button 
            key={tab}
            style={types === tab ?{
              color: '#fff',
              backgroundColor: '#333',
            }: {}}
            onClick={()=>setTypes(tab)}
            >
              {tab}
            </button>
          ))
        }

        <input
          value={title}
          onChange={e=> setTitle(e.target.value)}
        />
        <ul>
          {
            posts.map(post => (
              <li key={post.id}>{post.title || post.name}</li>
            ))
          }
        </ul>
        {showGotoTop && (
          <button
          style={
            {
              position: 'fixed',
              right: 20,
              bottom: 20,
            }
          }
          >
            Go to top
          </button>
        )}
      </div>
    )
  }

  const [show, setShow] = useState(false)

return (
      <div className="App">
        <button onClick={()=> setShow(!show)}>Toggle</button>
        {show && <Content />}
      </div>
    );
  }


export default App;
