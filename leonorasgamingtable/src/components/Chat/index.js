/* eslint-disable no-lone-blocks */
import React, { useEffect, useState, useRef } from "react";
// import API from "../../utils/API";
import Style from "./chat.css"
// import Moment from "react-moment";
import reactDOM from "react-dom";
import moment from "moment";
import io from "socket.io-client";
// import { set } from "mongoose";
import classNames from "classnames";
import openSocket from 'socket.io-client';



function Chat(){

 

//   const socket = io("http://localhost:3001", {autoConnect:false,
//   transports: ["websocket", "polling"]
// });
const socket = openSocket ("wss:////revisionexquisite.herokuapp.com/",{autoConnect:false,

     transports:["websocket","polling"]
});

//referenced mchatwindow
const chatwindowRef = useRef();
//turn interior stuffs on 
  const [interior, setInterior]= useState("off")
//turn curtains on and off
  const [curtain, setCurtain] = useState ("off")
 //username
  const [userName, setUserName] = useState("");
//set if it's teh client's turn to play
  const [turn, setTurn] = useState("on")
//variable used to test and set username
  const [tempUsername, setTempUsername] = useState ("");
//is username is of the surrealists, then they cannot use it 
//this is the sentence used to pass on and play the game
  const [sentence, SetSentence] = useState("")
//this is used to display the first sentence  
  const [currentdisplay, setCurrentDisplay]=useState("Write your first sentence please")
//the list of users
  const [users, setUsers] = useState([
    ]);
//if the user wants to communicate
    const [message, setMessage] = useState("");
//all the messages goto the message window
    const [messages, setMessages] = useState([]);
// this is the repository of all of the written sentences during the game
  const [allsentences, setAllsentences]=useState([])
//this controls the final poem modal
  const [poemModal, setPoemModal]=useState("off")
//this controls the modal for the rules
 const [rules, setRules]=useState("off")
 //chatwindow
 const [chat, setChat]=useState("off")

// this happens automatically and changes when the 
//username changes
const [roomSelect, setRoomSelect]= useState("");

const[dolls, setDolls]=useState("")
//rotate head animation
const[rotateHead,setRotateHead]=useState("off")
//fall animation
const [maskFall, setMaskFall]=useState("off");
const [maskFly, setMaskFly]=useState("off");
// display the name of the current player
const [currentPlayer, setCurrentPlayer]=useState("")
//   var chatWindow = reactDOM.
const [initialInstruction, setInitialInstruction]=useState("Welcome dear visitor, what would you like to be called?")

// },[])
useEffect(()=>{
  if(curtain==="off")
  {
    setDolls("on");
  } 
},[])
useEffect(()=>{
  if(tempUsername.length>0){
    setInitialInstruction("please also Select a spirit guide")
  }
  if(tempUsername.length===0){
    setInitialInstruction("Welcome dear visitor,what would you like to be called?")
  }

},[tempUsername])

  useEffect(() => {


    if(userName.length>0){
    socket.connect();
    socket.on("connect", function () {
      // console.log("clientsideworks")
      socket.emit("username", {userName:userName,
      room:roomSelect
      }
      );
    });}
    //set all the users in the chatroom 
    socket.on("users", (users) => {
      setUsers( users);
    });
    //when receiving messages
    socket.on("message", (message) => {
      // console.log(message);
      // var id = message.id
      // console.log(users[id])
      //push the message into the messages array
      setMessages((messages) => [...messages, message]);
      // console.log(chatwindowRef.current.scrollTop);
      chatwindowRef.current.scrollTop = chatwindowRef.current.scrollHeight;
      // console.log(chatwindowRef.current.scrollHeight);
      // console.log(chatwindowRef.current.scrollTop)

      
    });
    // as other players connect to the server, the player's name is pushed into the list of players
    socket.on("connected", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("start",info=>{
      setAllsentences((allsentences) => [...allsentences, ...info.sentences])
        setCurrentPlayer(info.currentPlayer)
        opencurtain();
      if (info.currentPlayer===userName){
        setTurn("on")

      }
      else{setTurn("off")
      setCurrentDisplay("")}
      })
    
      socket.on("rejected",()=>{
        setInitialInstruction("user name already Taken, sorry")
        setTimeout(() => {
          setInitialInstruction("Welcome dear visitor,what would you like to be called?")
          
        },1000);
      })

    socket.on("sentenceBroadcast", (sentence)=>{
      console.log("newsentence")
      console.log(sentence.text);
      console.log(sentence.player)
      setCurrentDisplay(sentence.tail);
      setCurrentPlayer(sentence.player);
      setAllsentences((allsentences) => [...allsentences, sentence.text
      ])
      if (sentence.player===userName){
        setTurn("on")
      }
      else{setTurn("off")}
    });
    
    //on another player's disconnect, the cient gets the emit, and rids the player
    //from the list
    socket.on("disconnected", id => {
      setUsers((users) => {
        return users.filter((user) => user.id!==id);
      });
    });
  }
  , [userName]);

//on the exterior, sets the username for this session
 const handleNameInputChange = function(e){
   e.preventDefault();
   e.stopPropagation();
   setTempUsername(e.target.value);
   
 }
//opens the curtian and begins the game
 const opencurtain = () =>{
   //the player cannot choose any of the surrelists' names
  if(tempUsername==="Leonora"||tempUsername==="Max"||tempUsername==="Marcel"||tempUsername==="Andre"||tempUsername==="Rene"||tempUsername==="Pablo"||tempUsername==="Benjamin" ) {
  //if so, the thing warns you and then turns off right after
   setInitialInstruction("sorry "+tempUsername+" is already playing")
  
  }
  else if (!roomSelect){
    setInitialInstruction("please click on a spirit guide to choose her/him")
  }
  //if the thing has any thing init, the curtain is turned on
  else if(tempUsername.length>0&&roomSelect.length>0){
    setDolls("off");
    setCurtain("on")
    setMaskFall("on")
    setTimeout(() => {
      setMaskFall("off")
        }, 2000);

  //turns on and connects to socket.io after two seconds
    setTimeout(() => {
      setInterior("on")
      }, 2000);
    }
  }

  //opens the curtian and begins the game
 const submitName = () =>{
  //the player cannot choose any of the surrelists' names
 if(tempUsername==="Leonora"||tempUsername==="Max"||tempUsername==="Marcel"||tempUsername==="Andre"||tempUsername==="Rene"||tempUsername==="Pablo"||tempUsername==="Benjamin" ) {
 //if so, the thing warns you and then turns off right after
  setInitialInstruction("sorry "+tempUsername+" is already playing")
 
 }
 else if (!roomSelect){
   setInitialInstruction("please click on a spirit guide to choose her/him")
 }
 else if(tempUsername.length>0&&roomSelect.length>0){
  setUserName(tempUsername)


 }

 }

  //emits the messageout
  const handleMessageOut = (event) => {
    event.preventDefault();
    event.stopPropagation();
    var newMessage = {
      message: message,
      username: userName,
      room:roomSelect
    };
    // console.log("messageout")
    // console.log(newMessage)
    socket.open();
    socket.emit("send", newMessage);
    //then set the message variable to blank
    setMessage("");
  };

  //the ghost of surrelists past will speak to you
  const handleMessagetoGhostOut = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    setMaskFly("on")

    socket.open();
    setTimeout(() => {
      setMaskFly("off")
      }, 1000);

    var newMessage = {
      message: message,
      username: userName,
      room:roomSelect
      };
      // console.log("ghostmessagesent")
      // console.log(newMessage)
      socket.emit("sendToGhost", newMessage);
      //then set the message variable to blank
      setMessage("");
    };

  

  //takes the value from the sentence input and sets it as a variable ready to emit
  const TypeSentence = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    SetSentence(e.target.value);
  }

  //emits the sentence
  const submitSentence = ()=>{
    setRotateHead("on")
    let tail = setCurrentDisplay(sentence)

    socket.open();

    socket.emit("sentence",{
      sentence:sentence,
      room:roomSelect,
      tail:tail}
       )
    setTimeout(() => {
      setRotateHead("off")
      
    }, 2000);
  }
  //opens the modal for the entire poem
  // const openPoem = () =>{
  //   setPoemModal("on")
  // }
  // const closePoem = () =>{
  //   setPoemModal("off")
  // }
  //opens the modal for the rules modal
  const openRules = ()=>{
    setRules("on")
  }
  const closeRules=()=>{
    setRules("off")
  }

  const openChat =()=>{
    setChat("on")
  }
  const closeChat =()=>{
    setChat("off")
  }

// sets the appearance of the dolls as they are 
//wither selected or not

  const andreb = classNames("invisible",
  {
    "andreb":dolls==="on",
    "andrebSelected":roomSelect==="1"
  });
  const rene = classNames("invisible",
  {
    "rene": dolls ==="on",
    "reneSelected": roomSelect==="2"
  })
  const pablo = classNames("invisible",
{
    "pablo":dolls==="on",
    "pabloSelected":roomSelect==="3"
  });
  const benjamin = classNames("invisible",
  {
    "benjamin":dolls==="on",
    "benjaminSelected":roomSelect==="4"
  });
  const leonora = classNames("invisible",
  {
    "leonora":dolls==="on",
    "leonoraSelected":roomSelect==="5"
  });
  const max = classNames("invisible",
  {
    "max":dolls==="on",
    "maxSelected":roomSelect==="6"
  });
  const andre = classNames("invisible",
  {
    "andre":dolls==="on",
    "andreSelected":roomSelect==="7"
  });
  const marcel=classNames("invisible",
  {"marcel":dolls==="on",
    "marcelSelected":roomSelect==="8"}

  )

// className settings for the host head in the gaming room 
const hostGhost = classNames(
  {"ghostHeadAndreB":roomSelect==="1",
  "andreBFall":roomSelect==="1"&&maskFall==="on",

  "ghostHeadRene":roomSelect==="2",
  "reneFall":roomSelect==="2"&&maskFall==="on",

  "ghostHeadPablo":roomSelect==="3",
  "pabloFall":roomSelect==="3"&&maskFall==="on",

  "ghostHeadBenjamin":roomSelect==="4",
  "benjaminFall":roomSelect==="4"&&maskFall==="on",

  "ghostHeadLeonora":roomSelect==="5",
  "leonoraFall":roomSelect==="5"&&maskFall==="on",

  "ghostHeadMax":roomSelect==="6",
  "maxFall":roomSelect==="6"&&maskFall==="on",

  "ghostHeadAndre":roomSelect==="7",
  "andreFall":roomSelect==="7"&&maskFall==="on",

  "ghostHeadMarcel":roomSelect==="8",
  "marcelFall":roomSelect==="8"&&maskFall==="on"},

  {"rotateHead":rotateHead==="on"},
  {"flyAway":maskFly==="on"}

)

// the room numbers
const rooms=["1","2","3","4","5","6","7","8"];
//the name tag setting that displays the name tag on mouse over
const [nameTag, setNameTag]=useState({
  1:"off",
  2:"off",
  3:"off",
  4:"off",
  5:"off",
  6:"off",
  7:"off",
  8:"off",
})
//the name tag setting that displays when the doll is clicked on 
const [nameTagTwo, setNameTagTwo]=useState({
  1:"off",
  2:"off",
  3:"off",
  4:"off",
  5:"off",
  6:"off",
  7:"off",
  8:"off",
})
const [previousDoll,setPreviousDoll]=useState("")

//selects the guid as well as he room
const submitRoom = (event)=>{
  event.stopPropagation();
  event.preventDefault();
  console.log(event.target.id)
  var room =event.target.id;
  setRoomSelect(room)
  setNameTagTwo({[room]:"on"})
  console.log(nameTagTwo);
  if(previousDoll.length>0){
    setNameTag({...nameTag,[previousDoll]:"off"})
    console.log("nametag ")
    console.log(nameTag)
  }
  setPreviousDoll(room)
  console.log("previousedoll")
 console.log(previousDoll)
 }

 // the name tag is displayed after user moves the curser over the figure
const displayNameTag=(event)=>{
  event.stopPropagation();
  event.preventDefault();
  var nameId = event.target.id;
  setNameTag({...nameTag,[nameId]:"on"})
}
//the name tag of the guides is hidden after user moves curser away
const hideNameTag=(event)=>{
  event.stopPropagation();
  event.preventDefault();
  var nameId = event.target.id;
  if(nameTagTwo[nameId]!=="on"){
  setNameTag({...nameTag,[nameId]:"off"})
}
}

const nextPlayer = (event)=>{
  event.preventDefault();
  event.stopPropagation();
  socket.open();
  socket.emit("nextPlayer",roomSelect)
    
}
socket.on("nextPlayer",sentCurrentPlayer=>{
  console.log(sentCurrentPlayer)
  console.log(currentPlayer)
  setCurrentPlayer(sentCurrentPlayer);
  console.log("player and current player")
  console.log(currentPlayer)
  console.log(userName)
  if(sentCurrentPlayer===userName){
    setTurn("on")
    console.log("turnedon")
  }
  else{
    setTurn("off")
    console.log("turnedoff")
  }

})

//displays the current player at the top of the main display 
// const currentPlayerDisplay = classNames({
//   "invisible":interior!=="on"
// })

//creates the 5 or less last words of the sentence typed
const createEndDisplay =(sentence)=>{
  // console.log(segment)
  // console.log('setend')
   var sentenceArray = sentence.split(" ")
  //  console.log(segmentArray)
   if(sentenceArray.length>5){
   sentenceArray=sentenceArray.slice(sentenceArray.length - 5, sentenceArray.Length)
  //  console.log(segmentArray)
  }
  

   var segmentString = sentenceArray.join(" ");
   return segmentString
  }

 
return (
//everything
<div className="allContainer">
<div className={"rules "+(rules ==="on"? "":"invisible")}>
      <div className={"rulesContent "+(rules ==="on"? "visible":"invisible")}>
        <div className="closeRules" onClick={closeRules}>X</div>
        <p>How to play: </p>
        <p>When this game is played in person, each author writes a sentence 
        <br>(or a few sentences) on a piece of paper, then folds the paper so</br>
        <br> that all or some part of what they wrote is obscurred. The next author</br>
        <br>then contributes to the story using only the part of the sentence that is visible below the fold.</br>
        </p>

    </div>
  </div>
  <div className={dolls==="on"?"dollsBackDrop":"invisible"}></div>
      {/* name input section */}
      <div className={"nameInputDiv "+(curtain==="on"? " invisible":"")}>
        <div className="nameQuestion">
          {initialInstruction}
          </div>
          {/* input it self */}
          <input className="nameinput" type="text" onChange={handleNameInputChange}></input>
          <input type="submit" onClick = {submitName}></input>
          {/* the warning div */}

    </div>
<div id ={rooms[0]} className={andreb} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[1]==="on"?"":"invisible")}>Andre B</p></div>
  <div id ={rooms[1]} className={rene} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[2]==="on"?"":"invisible")}>Rene</p></div>
  <div id ={rooms[2]} className={pablo} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[3]==="on"?"":"invisible")}>Pablo</p></div>
  <div id ={rooms[3]} className={benjamin} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[4]==="on"?"":"invisible")}>Benjamin</p></div>
  <div id ={rooms[4]} className={leonora} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[5]==="on"?"":"invisible")}>Leonora</p></div>
  <div id={rooms[5]} className={max} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[6]==="on"?"":"invisible")}>max</p></div>
  <div id ={rooms[6]} className={andre} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[7]==="on"?"":"invisible")}>Andre M</p></div>
  <div id ={rooms[7]} className={marcel} onClick={submitRoom} onMouseOver={displayNameTag} onMouseLeave={hideNameTag}><p className={"nameTag "+(nameTag[8]==="on"?"":"invisible")}>Marcel</p></div>


{/* the curtain and the name block */}
  <div className="exterior">
    <div className={"leftCurtain "+( curtain==="on"? "leftcurtainOn":"")}></div>
    <div className={"rightCurtain "+ (curtain==="on"? "rightCurtainOn":"")}></div>

  </div>

  {/* this is the room */}
  <div className="interior ">

<div className={curtain==="on"?hostGhost:"invisible"}></div> 
 




 
      <div className={"title "+(interior==="on"?"titleAnimate": "invisible")}>
      <div className={interior==="on"?"titleText":"invisible"}>welcome {userName}</div>
      <div className={interior==="on"?"titleText":"invisible"}><h1>let's play OPPOSITES!</h1></div>
      <div className={interior==="on"?"titleText":"invisible"}>current player : {currentPlayer}</div>
        {/* the game sentence display would go here */}
      </div>
    <div className={"table "+ (interior==="on"? "tableAnimate" : "invisible")}>
    <div className={interior==="on"?"titleText":"invisible"}>
    <div className="display ">{currentdisplay}</div>
    <div className = {turn==="on"? "invisible":""}>please wait your turn</div>
    {/* <div className = {turn==="on"? "":"invisible"}>please enter the opposite sentence</div> */}


      {/* this is the input div for the sentence, will only be visible when turn is on */}
      <input  className = {"sentenceInput "+(turn==="on"?"": "invisible")} onChange={TypeSentence} type="text" placeholder="write your sentence please"></input>
      <button className={"submitbutton "+(turn==="on"?"": "invisible")} onClick={submitSentence}>broadcast Sentence</button>
      {/* this is the button to skip to the next player */}
      <button className="turnButtom gameButton" onClick={nextPlayer}>next player</button>
      <button className="gameButton"><a href={"data:text/plain;charset=utf-8, "+ allsentences .join("\n")} download="poem.txt">download story</a></button>
      <button className="openRulesButton gameButton" onClick={openRules}>see Rules</button>

      </div>
    </div>

</div>
    {/* this is the window for chatting with either players or ghosts of the surrealists  */}
    <div className={"sidenavchat "+(interior==="on"?"visible ":"invisible ")+(chat==="on"?"largeChat":"")}> 
      <div   className={"chatWindow "+(chat==="on"?"visible":"invisible")}>
          {!messages.length ? (
                <h1 className="chat-title">Speak</h1>
                 ) : (
                 <div  ref= {chatwindowRef} className={"messageBox "+(chat==="on"?"onChatbox":"")}> 
                  {messages.map(({ user, date, text }, index) => (
                    <div
                      key={index}
                    
                      className={user === userName ? "toLeft" : "toRight"}
                    >
                      {user}: {text}{" "}
                    </div>
                  ))}
                </div>
              )}
            </div>
       <div>
         {/* the window to type in message */}
            <input className={"chatBox "+(chat==="on"?"visible":"invisible")}
              type="text"
              placeholder="message"
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
            />
            <button className={"chatbtn "+(chat==="on"?"":"invisible")} onClick={handleMessageOut}>speak</button>
            <button className={"chatbtn "+(chat==="on"?"":"invisible")} onClick={handleMessageOut} onClick={handleMessagetoGhostOut}>speak with ghost</button>
            <button className={"chatbtn "+(chat==="on"?"":"invisible")} onClick={closeChat}>close chat</button>
            <button className={"chatbtn "+(chat==="on"?"invisible":"")} onClick={openChat}>open chat</button>

            
             <div className="roster ">
               {/* the roster with ghost  */}
              <h3>players in the room</h3>
                <ul id="users">
                
                {users.map(({ name, id }) => (
                  <li key={id} className={(chat==="on"?"centeredLi":"")}>{name}</li>
                ))}
              </ul>
          </div> 
        </div>
  </div>
</div>  
);
}

export default Chat;
 