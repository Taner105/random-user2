import React from 'react'
import "./App.css"
import cw from "./assets/cw.svg"
import Button from './components/Button';
import { useState } from 'react';
import axios from 'axios';
import image1 from "./assets/woman.svg"
import image2 from "./assets/mail.svg"
import image3 from "./assets/growing-up-woman.svg"
import image4 from "./assets/map.svg"
import image5 from "./assets/phone.svg"
import image6 from "./assets/padlock.svg"

const App = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeLink, setActiveLink] = useState(0);


    const onClickHandler = () => {
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            console.log(response.data.results);
            setUserData(response.data.results)
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
        
    }

    const image = [image1,image2,image3,image4,image5,image6];

    const PhraseGenerator = ({user}) => {
    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `My email address is ${user.email}`,
      `I was born on ${user.dob.date.slice(0,10)}`,
      `My countries ${user.location.country}`,
      `My phone number is ${user.phone}`,
      `My gender is ${user.gender}`,
    ]
    return <h1>{phrases[activeLink]}</h1>
  }
    const activeLinkHandler = (index) => {
        console.log(index);
        setActiveLink(index)
    }
    return (
        <div className='container'>
            <img style={{width:80, height:80, marginLeft:612, marginTop:50}} src={cw} alt="" />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div className='user-data'>
                    {
                        userData.map((user, index) => {
                            return(
                                <div className='users' key={index}>
                                     <img src={user.picture.large} alt="#" />
                                    <PhraseGenerator user={user} />
                                
                                    <div className='app_img'>
                                        {
                                            image.map((img, index) => {
                                               return(
                                               <img src={img} alt="#" onMouseEnter={() => activeLinkHandler(index)}
                                               
                                               />
                                               
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            
                            )
                        })
                    }

                </div>
            )}
            <Button onClickHandler={onClickHandler}/>
            
        </div>
    )
}

export default App
