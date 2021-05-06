export const getYoutubeSongInfo = async (videoId) => {
    try{
        const respSong= await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAlkdGHSvc4Ky5puJH9JFRPlt8xbY0tKfk`);
        
        const VideoInfo = await respSong.json();
    
        const respChannel = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${VideoInfo.items[0].snippet.channelId}&key=AIzaSyAlkdGHSvc4Ky5puJH9JFRPlt8xbY0tKfk`);
    
        const ChannelInfo = await respChannel.json();

        return {
            title:VideoInfo.items[0].snippet.title,
            urlImageVideo:VideoInfo.items[0].snippet.thumbnails.high.url,
            urlImageChannel:ChannelInfo.items[0].snippet.thumbnails.default.url,
            channelTitle:VideoInfo.items[0].snippet.channelTitle,
            channelId:VideoInfo.items[0].snippet.channelId,   
        };
    }catch(e){
        console.log(e);
    }
}