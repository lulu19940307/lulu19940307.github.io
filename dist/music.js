const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '像鱼',
            artist: '王贰浪',
            //url: 'http://m10.music.126.net/20190918174230/b8d9cd234ec1e82bd70c6974834be2cb/ymusic/555b/545f/005f/b193f4fbc9c5c3a94eb17531a71fbc26.mp3',
            //url:'https://music.163.com/song?id=1331819951',
            url:'http://m10.music.126.net/20190919155657/3c9e5490ea34c1beac53762750038d7a/ymusic/555b/545f/005f/b193f4fbc9c5c3a94eb17531a71fbc26.mp3',
            //cover: 'img/cover1.jpg', 
            cover:'http://p1.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=130y130'
            
        }]
});