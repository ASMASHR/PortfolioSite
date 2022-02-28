import axios from 'axios'



// Answer message admiin
 export const send_message=(userName,useremail,MessageText)=>(dispatch)=>{
    try {
    axios.post("api/messages/SendMessage",{userName,useremail,MessageText})

} 
catch (error) { console.log(error)
        }}