import React from 'react'  




import { Adduser } from './Adduser';

export const UserInfo= () => {  

  

// const addOrEdit = (obj) => {
//   if (currentId === '')
//       firebaseDb.child('user').push(
//           obj,
//           err => {
//               if (err)
//                   console.log(err)
//               else
//                   setCurrentId('')
//           })
//   else
//       firebaseDb.child(`user/${currentId}`).set(
//           obj,
//           err => {
//               if (err)
//                   console.log(err)
//               else
//                   setCurrentId('')
//           })
// }

  return (  
    <div className="row">  
      <Adduser  /> 
      {/* addOrEdit={addOrEdit} */}
    </div>  
  )  
}  
  
