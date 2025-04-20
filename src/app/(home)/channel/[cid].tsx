// import { useLocalSearchParams } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { ActivityIndicator, Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Channel as ChannelType } from 'stream-chat';
// import {
//   Channel,
//   MessageInput,
//   MessageList,
//   useChatContext,
// } from 'stream-chat-expo';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// export default function ChannelScreen() {
//   const [channel, setChannel] = useState<ChannelType | null>(null);
//   const { cid } = useLocalSearchParams<{ cid: string }>();

//   const { client } = useChatContext();

//   useEffect(() => {
//     const fetchChannel = async () => {
//       const channel = client.channel('messaging', cid);
//       await channel.watch();
//       setChannel(channel);
//     };

//     fetchChannel();
//   }, [cid]);


//   if (!channel) {
//     return <ActivityIndicator />;
//   }

//   return (
//     <GestureHandlerRootView>
//       <Channel channel={channel}>
//         <MessageList />
//         <SafeAreaView edges={['bottom']}>
//           <MessageInput />
//         </SafeAreaView>
//       </Channel>
//     </GestureHandlerRootView>
//   );
// }
import { ActivityIndicator,Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Channel as ChannelType } from "stream-chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Channel, MessageInput, MessageList, useChatContext } from "stream-chat-expo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { cid } = useLocalSearchParams<{ cid: string }>();
  
  const { client } = useChatContext();
  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({cid: cid});
      // console.log(res);
      setChannel(channels[0]);
    };
    fetchChannel();
  },[cid])

  if (!channel) {
        return <ActivityIndicator />;
      }
  return(
    <GestureHandlerRootView>
       <Channel channel={channel}>
         <MessageList />
         <SafeAreaView edges={['bottom']}>
           <MessageInput />
         </SafeAreaView>
       </Channel>
     </GestureHandlerRootView>
  )
}