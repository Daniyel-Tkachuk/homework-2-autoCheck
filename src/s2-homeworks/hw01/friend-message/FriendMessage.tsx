import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type Props = {
   message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: Props) => {
   const {
      message: {
         message: {text, time},
         user: {avatar, name}
      }
   } = props;

   return (
      <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
         <div className={s.friendImageAndText}>
            <img id={'hw1-friend-avatar-' + props.message.id}
               src={avatar}
            />
            <div className={s.friendText}>
               <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                  {name}
               </div>
               <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                  {text}
               </pre>
            </div>
         </div>
         <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
            {time}
         </div>
      </div>
   )
}

export default FriendMessage
