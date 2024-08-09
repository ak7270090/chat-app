import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import { ChatState } from '../Context/ChatProvider';
const Chatpage = () => {

   //const history=useHistory();
  const navigate=useNavigate();
  const {user}=ChatState();
  const [fetchAgain,setFetchAgain]=useState(false);

 
   


//    const [chats,setChats]=useState([]);
// const fetchChats =async()=>{
//     // {data} only for destructured bcos data shows may things like header response
//     const {data} =await axios.get("/api/chat");
//     console.log(data);
//     setChats(data);
// };
// useEffect(()=>{
// fetchChats();
// },[]);






return ( 

      //   <div>{chats?.map(chat => (<div key={chat._id}> {chat.chatName}</div>)
      //   )}</div>

<div style={{width:"100%"}}>
   {user && <SideDrawer></SideDrawer>}
   <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" >

{user && <MyChats fetchAgain={fetchAgain}  />}
{user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}> </ChatBox>}

   </Box>
</div>

     );
}
 
export default Chatpage;