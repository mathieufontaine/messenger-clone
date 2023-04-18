import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
    appId: "1586335",
    key: "cbfae7ee29b574f5b05d",
    secret: "f99d4dd3367b16fb2ca2",
    cluster: "eu",
    useTLS: true
  });


export const clientPusher = new ClientPusher('cbfae7ee29b574f5b05d', {
    cluster: 'eu'
  });

