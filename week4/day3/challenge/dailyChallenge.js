class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    //2.
    watch(){
        console.log(`${this.uploader} parameter watched all ${this.time} parameter of ${this.title} parameter!`) 
    }
}
//3.
const newvideo = new Video("AnyVideo", "uploader1", 600);
newvideo.watch();
//4.
const secondvideo = new Video("Second Video", "uploader2", 7100);
secondvideo.watch();

//5.
const data = [
  { title: "video1", uploader: "Alia", time: 900 },
  { title: "video2", uploader: "Bernadet", time: 1400 },
  { title: "video3", uploader: "Evelin", time: 700 },
  { title: "video4", uploader: "Diana", time: 5000 },
  { title: "video5", uploader: "George", time: 880 }
];
//6.
const videos = data.map(vid => new Video(vid.title, vid.uploader, vid.time)); 
videos.forEach(v => v.watch());
