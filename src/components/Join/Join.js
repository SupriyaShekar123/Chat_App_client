import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className='joinCointainer'>
      <form>
        <label className='joinlabel '>Name</label>
        <input
          className='name'
          type='text'
          placeholder='Name'
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className='joinlabel '>Room</label>
        <input
          className='name'
          type='text'
          placeholder='Room'
          required
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />

        <Link
          onClick={(e) =>
            !name || !room
              ? e.preventDefault(alert("Please Fill in the required fields"))
              : null
          }
          to={`/chat?name=${name}&room=${room}`}>
          <button type='submit' className='joinsubmit'>
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}

//   return (
//     <div className='joinOuterContainer'>
//       <div className='joinInnerContainer'>
//         <h1 className='heading'>Join</h1>
//         <div>
//           <input
//             placeholder='Name'
//             className='joinInput'
//             type='text'
//             onChange={(event) => setName(event.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             placeholder='Room'
//             className='joinInput mt-20'
//             type='text'
//             onChange={(event) => setRoom(event.target.value)}
//           />
//         </div>
//         <Link
//           onClick={(e) =>
//             !name || !room
//               ? e.preventDefault(alert("Please Fill in the required fields"))
//               : null
//           }
//           to={`/chat?name=${name}&room=${room}`}>
//           <button className={"button mt-20"} type='submit'>
//             Sign In
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
