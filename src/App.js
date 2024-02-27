// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import riktamlogo from './assets/riktamlogo.png';
// import addBtn from './assets/add-30.png';
// import messageicon from './assets/message.svg';
// import sendbtn from './assets/send.svg';
// import userIcon from './assets/user-icon.png';
// import gptlogo from './assets/chatgptLogo.svg';

// function App() {
//   const [input, setInput] = useState('');

//   const handleInputChange = (event) => {
    
//     setInput(event.target.value);
//     console.log(input)
//   };

//   const handleSend = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/send-message', { message: input });
//       console.log('Message sent successfully:', response.data);
      
//       setInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };
  

//   return (
//     <div className="App">
//       <div className="sideBar">
//         <div className="upperSide">
//           <div className="upperSideTop">
//             <img src={riktamlogo} alt="Logo" className="logo" />{' '}
//             <span className="brand">Rikpal</span>
//           </div>
//           <button className="midBtn">
//             <img src={addBtn} className="chatlogo" alt="newchat" />{' '}
//             <span className="addBtn">New Chat</span>
//           </button>
//           <div className="upperSideBottom">
//             <button className="query">
//               <img src={messageicon} alt="query" />{' '}
//               <span className="addbtn">what is programming</span>
//             </button>
//             <button className="query">
//               <img src={messageicon} alt="query" />{' '}
//               <span className="addbtn">more about javascript</span>
//             </button>
//           </div>
//         </div>
//         <div className="lowerSide"></div>
//       </div>
//       <div className="main">
        // <div className="chats">
        //   <div className="chat">
        //     <img src={userIcon} className="chatimg" alt="" />{' '}
        //     <p className="text">
        //       Hi how can i help yopu today
        //     </p>
        //   </div>

        //   <div className="chat bot">
        //     <img src={gptlogo} className="chatimg" alt="" />{' '}
        //     <p className="text">
        //       JavaScript and Java are completely different languages, both in
        //       concept and design.JavaScript was invented by Brendan Eich in
        //       1995, and became an ECMA standard in 1997.ECMA-262 is the
        //       official name of the standard. ECMAScript is the official name
        //       of the language.
        //     </p>
        //   </div>
        // </div>
//         <div className="chatFooter">
//           <div className="inp">
//             <input
//               type="text"
//               placeholder="send a message"
//               value={input}
//               onChange={handleInputChange}
//             />
//             <button className="send" onClick={handleSend}>
//               {' '}
//               <img src={sendbtn} alt="send" />
//             </button>
//           </div>
//           <p>Rikpal is here to help you and provide assistance</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// this is next level working 

// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import riktamlogo from './assets/riktamlogo.png';
// import addBtn from './assets/add-30.png';
// import messageicon from './assets/message.svg';
// import sendbtn from './assets/send.svg';
// import userIcon from './assets/user-icon.png';
// import gptlogo from './assets/chatgptLogo.svg';

// function App() {
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [chatMessages, setChatMessages] = useState([
//     {
//       sender: 'user',
//       message:
//         'Hi how can i help you today ?.',
//     },
//   ]);
  
  
  
//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   const addUserMessage = () => {
//     const newMessages = [...chatMessages];
//     newMessages.push({ sender: 'user', message: input });
//     setChatMessages(newMessages);
//   };

//   const addBotMessage = (message) => {
//     const newMessages = [...chatMessages];
  
//     if (message.success && message.message) {
//       newMessages.push({ sender: 'bot', message: message.message });
//     } else {

//       newMessages.push({ sender: 'bot', message });
//     }
//     setChatMessages(newMessages);
//   };
  

//   const handleSend = async () => {
//     addUserMessage();
//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:3001/send-message', {
//         message: input,
//       });
//       console.log('Message sent successfully:', response.data);
      
//       addBotMessage(response.data);
//       setInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

  

//   return (
//     <div className="App">
      // <div className="sideBar">
      //   <div className="upperSide">
      //     <div className="upperSideTop">
      //       <img src={riktamlogo} alt="Logo" className="logo" />{' '}
      //       <span className="brand">Rikpal</span>
      //     </div>
      //     <button className="midBtn">
      //       <img src={addBtn} className="chatlogo" alt="newchat" />{' '}
      //       <span className="addBtn">New Chat</span>
      //     </button>
      //     <div className="upperSideBottom">
      //       <button className="query">
      //         <img src={messageicon} alt="query" />{' '}
      //         <span className="addbtn">what is programming</span>
      //       </button>
      //       <button className="query">
      //         <img src={messageicon} alt="query" />{' '}
      //         <span className="addbtn">more about javascript</span>
      //       </button>
      //     </div>
      //   </div>
      //   <div className="lowerSide"></div>
      // </div>
//       <div className="main">
//             <div className="chats">
//             {chatMessages.map((chat, index) => (
//               <div key={index} className={`chat ${chat.sender}`}>
//                 <img src={chat.sender === 'user' ? userIcon : gptlogo} className="chatimg" alt="" />{' '}
//                 <p className="text">{chat.message}</p>
//               </div>
//             ))}
//             {loading && (
//               <div className="chat bot">
//                 <div className="loader"></div>
//               </div>
//             )}
//         </div>

//         <div className="chatFooter">
//           <div className="inp">
//             <input
//               type="text"
//               placeholder="send a message"
//               value={input}
//               onChange={handleInputChange}
//             />
//             <button className="send" onClick={handleSend}>
//               {' '}
//               <img src={sendbtn} alt="send" />
//             </button>
//           </div>
//           <p>Rikpal is here to help you and provide assistance</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import userIcon from './assets/user-icon.png';
import gptlogo from './assets/chatgptLogo.svg';
import sendbtn from './assets/send.svg';
import riktamlogo from './assets/riktamlogo.png';
import addBtn from './assets/add-30.png';
import messageicon from './assets/message.svg';
import helpimg from'./assets/helpimg.jpeg';
import profile from './assets/user-profile-icon.jpeg'
import loader from './assets/ben-redblock-loading.gif'; 

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false); 
  const [question, setQuestion] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const messagesEndRef = useRef(null); 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]); 

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addUserMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, { sender: 'user', message }]);
  };

  const addBotMessage = (response) => {
    const messageContent = response.success ? response.message : "Error: Unable to fetch response";
    setChatMessages((prevMessages) => [...prevMessages, { sender: 'bot', message: messageContent }]);
    setButtonDisabled(false); 
  };
  
  const handleSend = async () => {
    setInput('');
    setLoading(true);
    setButtonDisabled(true); 
  
    try {
      
      if (input.trim() !== '') {
        addUserMessage(input);
      }
  
      const response = await axios.post('https://cbapi-kappa.vercel.app/send-message', {
        recentMessage: chatMessages.length > 0 ? chatMessages[chatMessages.length - 1].message : null,
        currentMessage: input,
      });
      console.log('Message sent successfully:', response.data);
  
      addBotMessage(response.data);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="App">
      <div className="heading">
        <h1>Rikpal</h1>
        <p className='subtitle'>I am here to help you and provide assistance</p>
      </div>
      <div className="main">
        <div className="chats">
          {chatMessages.map((chat, index) => (
            <div key={index} className={`chat ${chat.sender}`}>
              <img src={chat.sender === 'user' ? profile : helpimg} className="chatimg" alt="" />
              <p className="text">{chat.message}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
          {loading && (
            <div className="chat bot">
              <img src={loader} alt="Loading..." className="chatimg" />
            </div>
          )}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input 
              type="text" 
              placeholder="Send me a message" 
              value={input} 
              onChange={handleInputChange} 
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSend();
                }
              }} 
            />
            <button className="send" onClick={handleSend} disabled={buttonDisabled}>
              <img src={sendbtn} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




