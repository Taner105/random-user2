import React from 'react'

const Add = ({addTask, setUserData, addUser, addClickHandler}) => {
    return (
        <div className='add-user'>
            <div className='user-cheptar'>    
                <h3>Firstname</h3>
                <h3>Email</h3>
                <h3>Phone</h3>
                <h3>Age</h3>
            </div>
           
                
                 {   
                    addTask.map((user,index) => {
                    console.log(user);
                    return(
                    <div className='added-user'>
                        <p>{user.name.first}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.dob.age}</p>
                    </div>

                    )
                })
        
                
               
            
            }
                
        </div>
    )
}

export default Add
