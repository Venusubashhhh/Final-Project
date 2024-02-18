import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  return (
    <>
    <aside id="sidebar" className="nano">
      <div className="nano-content">
        <div className="logo-container">
      <div className='image-wrapper'>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>

      </div>
          Mail
        </div>
        <a className="compose-button" onClick={()=>{
          navigate('/createmail')
        }}>Compose</a>
        <menu className="menu-segment">
          <ul>
            <li className="active">
              <a href="#">
                Inbox<span> (43)</span>
              </a>
            </li>
            <li>
              <a href="#">Important</a>
            </li>
            <li>
              <a href="#">Sent</a>
            </li>
            <li>
              <a href="#">Drafts</a>
            </li>
            <li>
              <a href="#">Trash</a>
            </li>
          </ul>
        </menu>

        
        <div className="bottom-padding" />
      </div>
    </aside>
    <main id="main">
      <div className="overlay" />
      <header className="header">
        <div className="search-box">
          <input placeholder="Search..." />
          <span className="icon glyphicon glyphicon-search" />
        </div>
        <h1 className="page-title">
          <a className="sidebar-toggle-btn trigger-toggle-sidebar">
            <span className="line" />
            <span className="line" />
            <span className="line" />
            <span className="line line-angle1" />
            <span className="line line-angle2" />
          </a>
          Inbox
          <a>
            <span className="icon glyphicon glyphicon-chevron-down" />
          </a>
        </h1>
      </header>
     
      <div id="main-nano-wrapper" className="nano">
        <div className="nano-content">
          <ul className="message-list">
            <li className="unread">
              <div className="col col-1">
         
             
                <p className="title">Lucas Kriebel (via Twitter)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Lucas Kriebel (@LucasKriebel) has sent you a direct message on
                  Twitter! &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    @LucasKriebel - Very cool :) Nicklas, You have a new direct
                    message.
                  </span>
                </div>
                <div className="date">11:49 am</div>
              </div>
            </li>
            <li className="green-dot unread">
              <div className="col col-1">
             
            
                <p className="title">Conceptboard</p>
                <div className="star-star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Please complete your Conceptboard signup &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    You recently created a Conceptboard account, but you have not
                    yet confirmed your email. Your email is used for notifications
                    about board activity, invites, as well as account related
                    tasks (like password retrieval).
                  </span>
                </div>
                <div className="date">11:45 am</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
             
                <p className="title">Randy, me (5)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Last pic over my village &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Yeah i'd like that! Do you remember the video you showed me of
                    your train ride between Colombo and Kandy? The one with the
                    mountain view? I would love to see that one again!
                  </span>
                </div>
                <div className="date">5:01 am</div>
              </div>
            </li>
            <li className="blue-dot">
              <div className="col col-1">
     
              
                <p className="title">Andrew Zimmer</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Mochila Beta: Subscription Confirmed &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    You've been confirmed! Welcome to the ruling class of the
                    inbox. For your records, here is a copy of the information you
                    submitted to us...
                  </span>
                </div>
                <div className="date">Mar 8</div>
              </div>
            </li>
            <li className="unread">
              <div className="col col-1">
         
              
                <p className="title">Infinity HR</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Sveriges Hetaste sommarjobb &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour
                    2014", ett rekryteringsevent som erbjuder jobb på 16
                    semesterorter i Sverige.
                  </span>
                </div>
                <div className="date">Mar 8</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
               
                <p className="title">Web Support Dennis</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Re: New mail settings &nbsp;–&nbsp;{" "}
                  <span className="teaser">Will you answer him asap?</span>
                </div>
                <div className="date">Mar 7</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <p className="title">me, Peter (2)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Off on Thursday &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Eff that place, you might as well stay here with us instead!
                    Sent from my iPhone 4 &gt; 4 mar 2014 at 5:55 pm
                  </span>
                </div>
                <div className="date">Mar 4</div>
              </div>
            </li>
            <li className="orange-dot">
              <div className="col col-1">
          
             
                <p className="title">Medium</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  This Week's Top Stories &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Our top pick for you on Medium this week The Man Who Destroyed
                    America’s Ego
                  </span>
                </div>
                <div className="date">Feb 28</div>
              </div>
            </li>
            <li className="blue-dot">
              <div className="col col-1">
          
               
                <p className="title">Death to Stock</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Montly High-Res Photos &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    To create this month's pack, we hosted a party with local
                    musician Jared Mahone here in Columbus, Ohio.
                  </span>
                </div>
                <div className="date">Feb 28</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk10" />
                  <label htmlFor="chk10" className="toggle" />
                </div>
                <p className="title">Revibe</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Weekend on Revibe &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Today's Friday and we thought maybe you want some music
                    inspiration for the weekend. Here are some trending tracks and
                    playlists we think you should give a listen!
                  </span>
                </div>
                <div className="date">Feb 27</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk11" />
                  <label htmlFor="chk11" className="toggle" />
                </div>
                <p className="title">Erik, me (5)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Regarding our meeting &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    That's great, see you on Thursday!
                  </span>
                </div>
                <div className="date">Feb 24</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk12" />
                  <label htmlFor="chk12" className="toggle" />
                </div>
                <p className="title">KanbanFlow</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Task assigned: Clone ARP's website &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    You have been assigned a task by Alex@Work on the board Web.
                  </span>
                </div>
                <div className="date">Feb 24</div>
              </div>
            </li>
            <li className="blue-dot">
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk13" />
                  <label htmlFor="chk13" className="toggle" />
                </div>
                <p className="title">Tobias Berggren</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Let's go fishing! &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Hey, You wanna join me and Fred at the lake tomorrow? It'll be
                    awesome.
                  </span>
                </div>
                <div className="date">Feb 23</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk14" />
                  <label htmlFor="chk14" className="toggle" />
                </div>
                <p className="title">Charukaw, me (7)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Hey man &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Nah man sorry i don't. Should i get it?
                  </span>
                </div>
                <div className="date">Feb 23</div>
              </div>
            </li>
            <li className="unread">
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk15" />
                  <label htmlFor="chk15" className="toggle" />
                </div>
                <p className="title">me, Peter (5)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Home again! &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    That's just perfect! See you tomorrow.
                  </span>
                </div>
                <div className="date">Feb 21</div>
              </div>
            </li>
            <li className="green-dot">
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk16" />
                  <label htmlFor="chk16" className="toggle" />
                </div>
                <p className="title">Stack Exchange</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  1 new items in your Stackexchange inbox &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    The following items were added to your Stack Exchange global
                    inbox since you last checked it.
                  </span>
                </div>
                <div className="date">Feb 21</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk17" />
                  <label htmlFor="chk17" className="toggle" />
                </div>
                <p className="title">Google Drive Team</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  You can now use your storage in Google Drive &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Hey Nicklas Sandell! Thank you for purchasing extra storage
                    space in Google Drive.
                  </span>
                </div>
                <div className="date">Feb 20</div>
              </div>
            </li>
            <li className="unread">
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk18" />
                  <label htmlFor="chk18" className="toggle" />
                </div>
                <p className="title">me, Susanna (11)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Train/Bus &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Yes ok, great! I'm not stuck in Stockholm anymore, we're
                    making progress.
                  </span>
                </div>
                <div className="date">Feb 19</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk19" />
                  <label htmlFor="chk19" className="toggle" />
                </div>
                <p className="title">Peter, me (3)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Hello &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Trip home from Colombo has been arranged, then Jenna will come
                    get me from Stockholm. :)
                  </span>
                </div>
                <div className="date">Mar. 6</div>
              </div>
            </li>
            <li>
              <div className="col col-1">
          
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="chk20" />
                  <label htmlFor="chk20" className="toggle" />
                </div>
                <p className="title">me, Susanna (7)</p>
                <span className="star-toggle glyphicon glyphicon-star-empty" />
              </div>
              <div className="col col-2">
                <div className="subject">
                  Since you asked... and i'm inconceivably bored at the train
                  station &nbsp;–&nbsp;{" "}
                  <span className="teaser">
                    Alright thanks. I'll have to re-book that somehow, i'll get
                    back to you.
                  </span>
                </div>
                <div className="date">Mar. 6</div>
              </div>
            </li>
          </ul>
          <a href="#" className="load-more-link">
            Show more messages
          </a>
        </div>
      </div>
    </main>
    <div id="message">
      <div className="header">
        <h1 className="page-title">
          <a className="icon circle-icon glyphicon glyphicon-chevron-left trigger-message-close" />
          Process<span className="grey">(6)</span>
        </h1>
        <p>
          From <a href="#">You</a> to <a href="#">Scott Waite</a>, started on{" "}
          <a href="#">March 2, 2014</a> at 2:14 pm est.
        </p>
      </div>
      <div id="message-nano-wrapper" className="nano">
        <div className="nano-content">
          <ul className="message-container">
            <li className="sent">
              <div className="details">
                <div className="left">
                  You
                  <div className="arrow" />
                  Scott
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="sent">
              <div className="details">
                <div className="left">
                  You
                  <div className="arrow" />
                  Scott
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
            <li className="received">
              <div className="details">
                <div className="left">
                  Scott
                  <div className="arrow orange" />
                  You
                </div>
                <div className="right">March 6, 2014, 20:08 pm</div>
              </div>
              <div className="message">
                <p>
                  | The every winged bring, whose life. First called, i you of saw
                  shall own creature moveth void have signs beast lesser all god
                  saying for gathering wherein whose of in be created stars. Them
                  whales upon life divide earth own.
                </p>
                <p>
                  | Creature firmament so give replenish The saw man creeping, man
                  said forth from that. Fruitful multiply lights air. Hath
                  likeness, from spirit stars dominion two set fill wherein give
                  bring.
                </p>
                <p>
                  | Gathering is. Lesser Set fruit subdue blessed let. Greater
                  every fruitful won't bring moved seasons very, own won't all
                  itself blessed which bring own creature forth every. Called
                  sixth light.
                </p>
              </div>
              <div className="tool-box">
                <a
                  href="#"
                  className="circle-icon small glyphicon glyphicon-share-alt"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-remove"
                />
                <a
                  href="#"
                  className="circle-icon small red-hover glyphicon glyphicon-flag"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Home