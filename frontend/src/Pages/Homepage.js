import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { ChatState } from '../Context/ChatProvider';
const Homepage = () => {

//const history=useHistory();
const navigate=useNavigate();

useEffect(()=>{
  const user=JSON.parse(localStorage.getItem("userInfo"));
// const user=ChatState(); 
// console.log("homepage->",user)
  if(user){
   // history.push("/chats");
   navigate('/chats');
  }
},[navigate]);


    return (
       
            <Container maxW='xl' centerContent>
                <Box
                    d="flex"
                    justifyContent="center"
                    p={3}
                    bg="white"
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                >
                    <Text
                    fontSize='4xl'
                    fontFamily="Work sans"
                    >Talk-A-Tive</Text>
                </Box>
                <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">

                <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
                </Box>
            </Container>
        
    );
}

export default Homepage;