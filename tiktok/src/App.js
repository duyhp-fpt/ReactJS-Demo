import './App.css';
// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createContext, useContext, useReducer, useRef, useState } from "react";
// import Content from "./Content.js";

// useReducer
// Example 1
// init state
// const initState = 0;
// // Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'
// // Reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Invalid action')
//   }
// }

// Example 2

//1. Init state
// const initState = {
//   job: "",
//   jobs: []
// };
// //2. Actions
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload
//   };
// };

// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload
//   };
// };

// const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload
//   };
// };
// //3. Reducer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case SET_JOB:
//       return {
//         ...state,
//         job: action.payload
//       };
//     case ADD_JOB:
//       return {
//         ...state,
//         jobs: [...state.jobs, action.payload]
//       };
//     case DELETE_JOB:
//       const newJob = [...state.jobs];
//       newJob.splice(action.payload, 1);

//       return {
//         ...state,
//         jobs: newJob
//       };

//     default:
//       new Error("sai");
//   }
// };

// Context
export const ThemeContext = createContext()

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

  // Two-way binding
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

  // useEffect
  //   const tabs = ['posts', 'comments','albums','photos','todos','users']

  //   function Content() {
  //     const [title, setTitle] = useState('')
  //     const [posts, setPosts] = useState([])
  //     const [types, setTypes] = useState('posts')
  //     const [showGotoTop, setShowGoToTop] = useState(false)

  //     useEffect(()=> {
  //       fetch(`https://jsonplaceholder.typicode.com/${types}`)
  //         .then(res => res.json())
  //         .then(posts => setPosts(posts))
  //     }, [types])

  //     useEffect(()=> {
  //       const handleScroll = () => {
  //         if (window.scrollY >= 200) {
  //           setShowGoToTop(true)
  //         }
  //         else {
  //           setShowGoToTop(false)
  //         }
  //         // ~
  //         // setShowGoToTop(window.scrollY >= 200)

  //       }

  //       window.addEventListener('scroll', handleScroll)
  //       // Cleanup Function
  //       return () =>{
  //       window.removeEventListener('scroll', handleScroll)
  //       }

  //     },[])

  //     return (
  //       <div>

  //         {
  //           tabs.map(tab => (
  //             <button
  //             key={tab}
  //             style={types === tab ?{
  //               color: '#fff',
  //               backgroundColor: '#333',
  //             }: {}}
  //             onClick={()=>setTypes(tab)}
  //             >
  //               {tab}
  //             </button>
  //           ))
  //         }

  //         <input
  //           value={title}
  //           onChange={e=> setTitle(e.target.value)}
  //         />
  //         <ul>
  //           {
  //             posts.map(post => (
  //               <li key={post.id}>{post.title || post.name}</li>
  //             ))
  //           }
  //         </ul>
  //         {showGotoTop && (
  //           <button
  //           style={
  //             {
  //               position: 'fixed',
  //               right: 20,
  //               bottom: 20,
  //             }
  //           }
  //           >
  //             Go to top
  //           </button>
  //         )}
  //       </div>
  //     )
  //   }

  //   const [show, setShow] = useState(false)

  // return (
  //       <div className="App">
  //         <button onClick={()=> setShow(!show)}>Toggle</button>
  //         {show && <Content />}
  //       </div>
  //     );
  //   }

  // useRef

  // const [time, setTime] = useState(60)

  // const timerId = useRef()
  // const prevTime = useRef()

  // useEffect(()=> {
  //     prevTime.current = time
  // },[time])

  // const handleStart = () => {
  //   timerId.current = setInterval(()=>{
  //     setTime(prevTime => prevTime - 1)
  //   }, 1000)
  // console.log(timerId);

  // }

  // const handleStop = () => {
  //   clearInterval(timerId.current)
  // }

  // console.log(time, prevTime.current);

  // return (
  //         <div className="App">
  //           <h1>{time}</h1>
  //           <button onClick={handleStart}>Start</button>
  //           <button onClick={handleStop}>Stop</button>
  //         </div>
  //       );
  //     }

  // memo
  // useCallback
  // const [count, setCount] = useState(0)

  // const handleIncrease = useCallback(()=> {
  //   setCount(prevCount => prevCount + 1 )
  // },[])

  // return (
  //           <div className="App">
  //             <Content
  //               onIncrease = {handleIncrease}
  //             />
  //             <h1>{count}</h1>
  //           </div>
  //         );
  //       }

  // useMemo

  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [products, setProducts] = useState([])

  // const nameRef = useRef()

  // const handleSubmit = () => {
  //   setProducts([...products, {
  //     name,
  //     price: +price
  //     // +price => chuyển price sang dạng số
  //   }])
  //   setName('')
  //   setPrice('')

  //   // focus input
  //   nameRef.current.focus()
  // }

  //   const total = useMemo(()=>{
  //     const result = products.reduce((result, product)=>{
  //       return result + product.price
  //     }, 0)
  //     return result
  //   },[products])

  // return (
  //             <div className="App">
  //               <input
  //               ref={nameRef}
  //                 value={name}
  //                 placeholder='Enter name ...'
  //                 onChange={e=> setName(e.target.value)}
  //               />
  //               <br />
  //               <input
  //                 value={price}
  //                 placeholder='Enter price ...'
  //                 onChange={e=> setPrice(e.target.value)}
  //               />
  //               <br />
  //               <button
  //                 onClick={handleSubmit}
  //               >Add
  //               </button>
  //               <br />

  //               Total: {total}

  //               <ul>
  //                 {products.map((product, index)=>{
  //                 return <li key={index}>{product.name} - {product.price}</li>
  //                 })}
  //               </ul>
  //             </div>
  //           );
  //         }

  // useReducer

  // /**
  //  * useState
  //  * 1. Init state: 0
  //  * 2. Actions: Up (state + 1) / Down (state - 1)

  //  * useReducer
  //  * 1. Init state: 0
  //  * 2. Actions: Up (state + 1) / Down (state - 1)
  //  * 3. Reducer
  //  * 4. Dispatch
  //  */
  // Example 1
  //   const [count, dispatch] = useReducer(reducer, initState)

  //   return (
  //   <div className="App" style={{padding: 20}}>
  //     <h1>{count}</h1>
  //     <button
  //     onClick={() => dispatch(UP_ACTION)}
  //     >
  //       Up
  //     </button>
  //     <button
  //     onClick={() => dispatch(DOWN_ACTION)}
  //     >
  //       Down
  //     </button>
  //   </div>
  //   )
  // }

  // Example 2

//   const [state, dispatch] = useReducer(reducer, initState);
//   const { job, jobs } = state;

//   const inputRef = useRef();
//   const handleSubmit = () => {
//     dispatch(addJob(job));
//     dispatch(setJob(""));
//     inputRef.current.focus();
//   };

//   return (
//     <div className="App" style={{ padding: "0 20px" }}>
//       <h3>Todo</h3>
//       <input
//         ref={inputRef}
//         value={job}
//         placeholder="Enter todo..."
//         onChange={(e) => {
//           dispatch(setJob(e.target.value));
//         }}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <span style={{cursor: "pointer"}} onClick={() => dispatch(deleteJob(index))}> &times;</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// Context
// /**
//  * 1. Create context
//  * 2. Provider
//  * 3. Consumer
//  */


const [theme, setTheme] = useState('dark')

function Paragraph(){
  const theme = useContext(ThemeContext)

  return (
    <p className={theme}>
      Context provides ..................................................................
    </p>
  )
}

function Content(){
  return (
    <div>
      <Paragraph />
    </div>
  )
}

const toggleTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark')
}

return (
      <ThemeContext.Provider value={theme}>
        <div className="App" style={{ padding: "0 20px" }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content theme={theme}/>
      </div>
      </ThemeContext.Provider>
    );
  }


export default App;
