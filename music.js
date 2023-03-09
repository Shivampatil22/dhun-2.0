const music = new Audio('audio/1.mp3');//music,play
const song =[
    {
    id:1,
    songName:`<b>On My Way</b><br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"img/1.jpg"
},

{
    id:2,
    songName:`Fade<br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"img/2.jpg"
},
{
    id:3,
    songName:`Cartoon-On & On<br>
    <div class="subtitle">Daniel Levi</div>`,
    poster:"img/3.jpg"

},
    {
    id:4,
    songName:`Warriyo-Mortals<br>
    <div class="subtitle">Mortals</div>`,
    poster:"img/4.jpg"
},
{
    id:5,
    songName:`Ertugal Gazi<br>
    <div class="subtitle">Ertugal</div>`,
    poster:"img/5.jpg"
},
{
    id:6,
    songName:`Electronic Music<br>
    <div class="subtitle">Electro </div>`,
    poster:"img/6.jpg"
},
{
    id:7,
    songName:`Agar Tum Sath Ho<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/7.jpg"
},
{
    id:8,
    songName:`Suna Hai<br>
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster:"img/8.jpg"
},
{
    id:9,
    songName:`Dilbar<br>
    <div class="subtitle">Dhvani Bhanushali , Neha Kakkar</div>`,
    poster:"img/9.jpg"
},
{
    id:10,
    songName:`Duniya<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/10.jpg"
},
{
    id:11,
    songName:`Lagti Lahore Di<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/11.jpg"
},
{
    id:12,
    songName:`Putt Jatt Da<br>
    <div class="subtitle">Diljit Dosanjh</div>`,
    poster:"img/12.jpg"
},
{
    id:13,
    songName:`Main Agar<br>
    <div class="subtitle">Atif Aslam</div>`,
    poster:"img/13.jpg"
},
{
    id:14,
    songName:`Vaste<br>
    <div class="subtitle">Dhvani Bhanushali</div>`,
    poster:"img/14.jpg"
},
{
    id:15,
    songName:`Lut Gaye<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/15.jpg"
},
{
    id:16,
    songName:`Meri Zindagi Hai Tu<br>
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster:"img/16.jpg"
},
{
    id:17,
    songName:`Zaroori Tha<br>
    <div class="subtitle">Rahat Fateh Ali Khan</div>`,
    poster:"img/17.jpg"
},
{
    id:18,
    songName:`Pasoori<br>
    <div class="subtitle">Sethi , Astha Gill</div>`,
    poster:"img/18.jpg"
},
{
    id:19,
    songName:`Insane<br>
    <div class="subtitle">AP Dhillon</div>`,
    poster:"img/19.jpg"
},
{
    id:20,
    songName:`Ae Watan<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/20.jpg"
}
]
let bu=document.getElementById('check');
let poster=document.getElementById('songside')
let con=document.getElementById('subcontent')
let subc=document.getElementById('cs')
let plays=document.getElementById('again')
let psp=document.getElementById('ps')
let  search_con=document.getElementById("search_content")
let res=document.getElementById('resu')
function seavisi(){
    poster.classList.add('noback')
    console.log("1")
    con.classList.add('invisible')
    subc.classList.remove('invisible')
    psp.classList.add('invisible')
    console.log("1")
    search_con.classList.remove('invisible')
    res.classList.remove('invisible')
}
function searcher(){
    seavisi();
            while(search_con.firstChild){
                search_con.removeChild(search_con.firstChild)
             }
           
             
     inputs=document.getElementById("searchs").value
     const url =`https://itunes.apple.com/search?term=${inputs}`
     fetch(url)
     .then(response =>response.json())
     .then(data => {
        const artists=data.results ;
        return artists.map(result => {
            
            const article =document.createElement('div'),
    
             artists=document.createElement('div'),
             song=document.createElement('div'),
             img=document.createElement('img'),
             audio=document.createElement('audio'),
             audioSoucre=document.createElement('source')
              article.setAttribute('class','cards')
              song.setAttribute('class','songti')
              artists.setAttribute('class','songti')
            
             artists.innerHTML=result.artistName;
             song.innerHTML=result.trackName;
             img.src=result.artworkUrl100;
             audioSoucre.src=result.previewUrl;
            audio.controls=true;
            article.appendChild(img);
            article.appendChild(artists);
            article.appendChild(song);
            article.appendChild(audio);
            audio.appendChild(audioSoucre);
            

       search_con.appendChild(article);
      
        })
     })
     

}

function newposter(){
      poster.classList.add('noback')
      con.classList.add('invisible')
      subc.classList.remove('invisible')
}

function ho()
{
    document.getElementById('ch').style=`background: none;
    color: #36e2ec`;
    document.getElementById('check').style=`background: #5adae0;
    color: #fff`
}

function ho1()
{
    document.getElementById('check').style=`background: none;
    color: #36e2ec`;
    document.getElementById('ch').style=`background: #5adae0;
    color: #fff`;
}

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src =song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=song[i].songName;

});
let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
   
masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        newposter();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }
    else if (music.play()){
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
    }
});

const makeAllBackgroungd = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>
    {
        el.style.background='rgb(105 ,105 , 105 , .0';  
    })
}
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) =>
    {
        el.style.background='rgb(105 ,105 , 105 , .0';  
        el.classList.add('bi-play-circle-fill');
        // masterPlay.classList.remove('bi-pause-circle-fill');
    })
}
let index=0;
let currentsong_poster=document.getElementById("imgcurrent");
let poster_master_play = document.getElementById('poster_master_play');
let title=document.getElementById('title');
let c_title=document.getElementById('current_title');

plays.addEventListener('click',()=>{
    poster.classList.remove('noback')
      con.classList.remove('invisible')
      subc.classList.add('invisible')
      psp.classList.remove('invisible')
      search_con.classList.add('invisible')
      res.classList.add('invisible')

})
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) =>{
e.addEventListener('click',(el) =>{
    index=el.target.id;
    console.log(index);
   
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    currentsong_poster.innerHTML=`<img id="current" src="img/${index}.jpg" alt="">`;
    music.play();
    newposter();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songsTitles=song.filter((els) =>
    {
        return els.id == index;
    });

    songsTitles.forEach((elss) =>
        {
            let {songName}=elss;
            title.innerHTML=songName;
            c_title.innerHTML=songName;
            // poster_master_play.src = poster;
        });
        makeAllBackgroungd();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background='rgb(105 ,105 , 105 , .1';

        makeAllplays(); 
        el.target.classList.remove('bi-play-circle-fill') ;
        el.target.classList.add('bi-pause-circle-fill') ; 
        wave.classList.add('active1');
});
});



let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2')
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate', () =>
{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if (sec1 < 10)
    {
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);

    if (sec2 < 10)
    {
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;


    let progressbar=parseInt((music_curr / music_dur) * 100);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width =`${seekbar}%`;
    dot.style.left =`${seekbar}%`;

});

seek.addEventListener('change' , ()=>
{
    music.currentTime=seek.value * music.duration / 100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',() =>
{
    if(vol.value == 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a / 100;


});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',() =>{
    index-= 1;
    
    if(index < 1)
    {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    poster_master_play.src=`img/${index}.jpg`;
    currentsong_poster.innerHTML=`<img id="current" src="img/${index}.jpg" alt="">`;
    music.play();

    let songsTitles=song.filter((els) =>
    {
        return els.id == index;
    });

    songsTitles.forEach((elss) =>
        {
            let {songName}=elss;
        title.innerHTML=songName;
            c_title.innerHTML=songName;
            // poster_master_play.src = poster;
        });
        makeAllBackgroungd();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background='rgb(105 ,105 , 105 , .1';

        makeAllplays(); 
        el.target.classList.remove('bi-play-circle-fill') ;
        el.target.classList.add('bi-pause-circle-fill') ; 
        wave.classList.add('active1');


})

next.addEventListener('click', ()=>{
    index ++;
    if( index > Array.from(document.getElementsByClassName('songItem')).length)
    {
        index = 1;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    poster_master_play.src=`img/${index}.jpg`;
    currentsong_poster.innerHTML=`<img id="current" src="img/${index}.jpg" alt="">`
    music.play();
    newposter()
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songsTitles=song.filter((els) =>
    {
        return els.id == index;
    });

    songsTitles.forEach((elss) =>
        {
            let {songName}=elss;
            title.innerHTML=songName;
            c_title.innerHTML=songName;
            // poster_master_play.src = poster;
        });
        makeAllBackgroungd();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background='rgb(105 ,105 , 105 , .1';

        makeAllplays(); 
        el.target.classList.remove('bi-play-circle-fill') ;
        el.target.classList.add('bi-pause-circle-fill') ; 
        wave.classList.add('active1');
});

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',() =>{
    pop_song_right-=330;
});
pop_song_left.addEventListener('click',() =>{
    pop_song_left+=330;
});
let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artist_bx=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',() =>{
    Artist_bx.scrollleft+=330;
});
pop_song_left.addEventListener('click',() =>{
    Artist_bx.scrollleft+=330;
});
let greettxt=document.getElementById('greet')
let d=new Date()
function greeter(){
    let hr=d.getHours()
    if(hr>=7 && hr<12){
        greettxt.innerText="Good Morning"
    }
    else if(hr>=12 && hr<=17){
        greettxt.innerText="Good Afternoon"
    }
    else{
        greettxt.innerText="Good Evening"
    }
}
setInterval(greeter,1000);
greeter();











