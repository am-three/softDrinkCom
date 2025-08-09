import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { Activity } from 'lucide-react';
import { Pause } from 'lucide-react';
// import { ArrowBigRightDash } from 'lucide-react';
import { ArrowRightToLine } from 'lucide-react';
import { ArrowLeftToLine } from 'lucide-react';
// import { SquarePlay } from 'lucide-react';
import { Squircle } from 'lucide-react';

const playlist = [
    { title: 'MM3', src: '/music/SoFaygo-MM3.mp3' },
    { title: 'Off The Meter', src: '/music/Ken Carson - Off The Meter ft Playboi Carti, Destroy Lonely.mp3' },
    { title: 'Sorry Bout That', src: '/music/YEATSORRYBOUTTHAT.mp3' },
    { title: 'Hell Yeah', src: '/music/SoFaygoHellYeahFtKenCarson.mp3' },
    { title: 'FWU', src: '/music/DonToliver-FWU.mp3' },
    { title: 'Best Friend', src: '/music/YoungThug-BestFriend.mp3' },
    { title: 'Annihilate', src: '/music/MetroBoomin,SwaeLee,LilWayne,Offset-Annihilate.mp3' },
    { title: 'Let U Know', src: '/music/LilUziVert-LetUKnow(ft. Playboi Carti).mp3' },
    { title: 'LYFESTYLE', src: '/music/Yeat-LYFESTYLE(FEAT. LILDURK).mp3' },
    { title: 'His & Hers', src: '/music/Internet Money-His&HersFeat.DonToliver,LilUziVert&Gunna.mp3' },
    { title: 'STARGAZING', src: '/music/Travis Scott-STARGAZING.mp3' },
    { title: 'P2', src: '/music/LilUziVert-P2.mp3' },
    { title: 'Energy', src: '/music/yung bans - energy.mp3' },
    { title: 'NO STYLIST', src: '/music/DestroyLonely-NOSTYLIST.mp3' },
    { title: 'FOMDJ', src: '/music/PlayboiCarti-FOMDJ.mp3' },
    { title: 'there he go', src: '/music/SosocamoThereHeGo.mp3' },
];



const Music = () => {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [progress, setProgress] = useState(0);

    const barRef = useRef(null);

    const navigate = useNavigate();


    useEffect(() => {
        const audio = audioRef.current;

        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            setProgress(percent);
        };

        audio?.addEventListener('timeupdate', updateProgress);

        return () => {
            audio?.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    // ---------------------------------------


    const playMusic = () => {
        audioRef.current.play();
    };

    const pauseMusic = () => {
        audioRef.current.pause();
    };

    const previousSong = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? playlist.length - 1 : prevIndex - 1)

    };

    const nextSong = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    const onEnded = () => {
        nextSong();
    };

    return (

        <div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">

                {[
                    { size: 'w-16 h-16', color: 'bg-gradient-to-tr from-orange-300 to-red-600', top: 'top-[40%]', left: 'left-20', delay: 'animate-float' },
                    { size: 'w-28 h-28', color: 'bg-gradient-to-br from-amber-300 to-red-500', top: 'top-[40%]', left: 'left-[160px]', delay: 'animate-float-delay' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-amber-300 to-red-500', top: 'top-[80%]', left: 'left-[270px]', delay: 'animate-float' },

                    { size: 'w-20 h-20', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[95%]', left: 'left-[430px]', delay: 'animate-float-delay' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[28%]', left: 'left-[500px]', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[60%]', left: 'left-[590px]', delay: 'animate-float-delay' },

                    { size: 'w-24 h-24', color: 'bg-gradient-to-tl from-orange-500 to-red-400', top: 'top-[40%]', right: 'right-[600px]', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-orange-600 to-red-300', top: 'top-[70%]', right: 'right-[430px]', delay: 'animate-float-delay' },


                    { size: 'w-16 h-16', color: 'bg-gradient-to-bl from-lime-500 to-green-100', top: 'top-[35%]', right: 'right-[300px]', delay: 'animate-float' },
                    { size: 'w-28 h-28', color: 'bg-gradient-to-bl from-lime-500 to-green-100', top: 'top-[55%]', right: 'right-[150px]', delay: 'animate-float-delay' },
                    { size: 'w-20 h-20', color: 'bg-gradient-to-b from-lime-300 to-green-400', top: 'top-[80%]', right: 'right-[30px]', delay: 'animate-float' },
                ].map((b, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full blur-[9px] ${b.size} ${b.color} ${b.top} ${b.left || ''} ${b.right || ''} ${b.delay}`}
                    ></div>
                ))}

            </div>

            <div className={`fixed transition-all p-10  mt-[200px] backdrop-blur-md rounded-xl shadow-lg w-full `}>
                <h2 className="text-xl font-bold mb-2 text-center">Now Playing:</h2>
                <p className="text-center mb-4"> <i>{playlist[currentIndex].title}</i> </p>

                <audio
                    ref={audioRef}
                    src={playlist[currentIndex].src}
                    onEnded={onEnded}
                    autoPlay
                />

                {/* <div className="w-full max-w-xl mx-auto h-1 bg-gray-300  mt-4 overflow-hidden">
                        <div
                            className="h-full bg-[#121212] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div> */}


                {/* bar */}
                <div ref={barRef}
                    onClick={(e) => {
                        const rect = barRef.current.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const percentage = clickX / rect.width;

                        const audio = audioRef.current;
                        if (audio?.duration) {
                            audio.currentTime = percentage * audio.duration;
                        }
                    }}
                    className='relative w-full max-w-xl mx-auto h-1 bg-gray-300  mt-4 overflow-hidden cursor-pointer'>

                    <div
                        className="h-full bg-[#121212] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#cca712]"
                        style={{ left: `calc(${progress}% - 5px)` }}
                    />

                </div>


                {/* button */}
                <div className="flex justify-center gap-28 mt-8 text-[#f5e8da] font-bold">


                    <button
                        onClick={previousSong}
                        className="rounded hover:-translate-x-3 hover:text-[#89ad34]"
                    >
                        <ArrowLeftToLine />
                    </button>

                    <button
                        onClick={pauseMusic}
                        className="rounded hover:-translate-y-1"
                    >
                        <Pause />
                    </button>

                    <button
                        onClick={playMusic}
                        className="rounded hover:-translate-y-1"
                    >
                        <Squircle />
                    </button>

                    <button
                        onClick={nextSong}
                        className="rounded hover:translate-x-3 hover:text-[#89ad34]"
                    >
                        <ArrowRightToLine />
                    </button>

                </div>
            </div>

            <div className='fixed bottom-16 right-[100px] tracking-widest'>
                <button className='rounded-lg py-1 px-6 flex gap-3 justify-center items-center 
                   border-r
                   hover:border-none                 
                   transform transition duration-300
                   hover:scale-105
                   hover:bg-[#575552]
                    
                   hover:translate-x-5'
                    onClick={() => navigate('/')}
                >
                    Back

                </button>
            </div>


            <style>
                {`
                            @keyframes float {
                                0%, 100% { transform: translateY(0px); }
                                50% { transform: translateY(-300px); }
                            }

                            .animate-float {
                                animation: float 6s ease-in-out infinite;
                            }

                            .animate-float-delay {
                                animation: float 13s ease-in-out infinite;
                                animation-delay: 15s;
                            }
                            `}
            </style>

        </div>
    );
};

export default Music;
