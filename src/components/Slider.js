import React, { useState, useRef } from 'react';
import "./Slider.css";

// images
import img1 from "../img/skuter1.jpg";
import img2 from "../img/hulajdusza.jpg";
import img3 from "../img/rower.jpg";
import img4 from "../img/silka.jpg";
import img5 from "../img/spadochron.jpg";
import img6 from "../img/surfing.jpg";

// get font awesome icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slider() {
    const item = useRef({})
    const slides = [
        {
            title: 'Skutery wodne',
            subtitle: 'Szeroki wybór renomowanych skuterów wodnych najlepszych',
            img: img1,
            alt: 'skutery'
        },
        {
            title: 'Roweryki',
            subtitle: 'Selekcja rowerów od kolażówek do rowerów górskich',
            img: img2,
            alt: 'roweryki'
        },
        {
            title: 'Hulajnogi elektryncze',
            subtitle: 'Wypożyczami również hulajnogi elektryczne popularnych producentów',
            img: img3,
            alt: 'hulajnogi elektryczne'
        },
        {
            title: 'Surfing',
            subtitle: 'Najlepsze deski do surfowania',
            img: img4,
            alt: 'surfing'
        },
        {
            title: 'Surfing',
            subtitle: 'Najlepsze deski do surfowania',
            img: img5,
            alt: 'surfing'
        },
        {
            title: 'Inne',
            subtitle: 'Przyrządy do ćwiczeń siłowych i kondycyjnych',
            img: img6,
            alt: 'przyrzady do cwiczen'
        },
    ];


    // use state
    const lastIndex = slides.length;
    // const lastIndex = slider_info.slice(-1);
    const [i, setCount] = useState(0);

    let index = i;
    //console.log(slides[0])

    const scrollToSlide = () => {
        console.log("==========================")
        console.log("HANDLE SCROLLTOSLIDE START: " + index)
        item.current[index].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
        console.log("HANDLE SCROLLTOSLIDE END: " + index)
        console.log("==========================")
    }

    // left nav
    let handleNavLeft = () => {
        console.log("==========================")
        console.log("HANDLE NAV LEFT START: " + index)
        if(index === 0){
            //setCount(lastIndex-1)
            index = lastIndex-1
            console.log("HANDLE NAV RIGHT SET 5: " + index)
        }else{
            //setCount(i - 1)
            index -= 1
            console.log("HANDLE NAV RIGHT SET -1: " + index)
        }
        console.log("HANDLE NAV LEFT END: " + index)
        console.log("CALL TO SCROLLTOSLIDE...")
        console.log("==========================")
        scrollToSlide();
    }

    // right nav
    let handleNavRight = () => {
        console.log("==========================")
        console.log("HANDLE NAV RIGHT START: " + index)
        setCount(0)
        if(index === lastIndex-1){
            index = 0;
            console.log("HANDLE NAV RIGHT SET 0: " + index)
        }else{
            //setCount(i + 1)
            index += 1;
            console.log("HANDLE NAV RIGHT SET +1: " + index)
        }
        console.log("HANDLE NAV RIGHT END: " + index)
        console.log("CALL TO SCROLLTOSLIDE...")
        console.log("==========================")
        scrollToSlide();
    }

    {/*

        useEffect(()=>{
        if(item.current[i]){
            scrollToSlide();
        }

    })

    const scrollToNextSlide = () => {
        item.current[i].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }



    useEffect(() => {
        if(item.current[0]){
            scrollToNextSlide();
        }
    },[i])

    const startIndex = item.current[1];
    const scroll = (direction) =>{
        if (direction === "left"){
            setCount(prev => prev - 1);
            console.log(i);
            console.log(item.current[i])
        }else{
            setCount(prev => prev + 1);
            console.log(i);
            console.log(item.current[i])
        }

        //scrollToNextSlide();
        //console.log(item.current[i])
    }
    //console.log(i);
*/}

    return(
            <>
                <div className="slider">
                    {slides.map((data, i) => (
                            <article className="art_class"
                                     key={i}
                                     ref={ref => item.current[i] = ref}>
                                <img className="art_img"
                                     alt={data.alt}
                                     src={data.img}/>
                                <header className="art_title">{data.title}</header>
                                <p>{data.subtitle}</p>
                            </article>
                        )
                    )}
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="arrow left"
                            onClick={handleNavLeft}>
                        </FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow right"
                            onClick={handleNavRight}>
                        </FontAwesomeIcon>
                </div>
            </>
    )
}

export default Slider;