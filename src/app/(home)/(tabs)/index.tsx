import { router } from 'expo-router';
import { ChannelList } from 'stream-chat-expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function MainTabScreen() {
  return (
    <GestureHandlerRootView>
      <ChannelList
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </GestureHandlerRootView>
  );
}