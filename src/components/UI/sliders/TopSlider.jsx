import React, {useEffect, useState} from 'react';
import "../scss/style.scss";

const TopSlider = () => {

    const [indexShow, setIndexShow] = useState(0)
    const [opacity, setOpacity] = useState(0)

    let elem = document.querySelectorAll('.top__slider-img')

    function anime(i) {
        if (opacity < 1) {
            setTimeout(() => {
                let sum = +(opacity + 0.02).toFixed(2)
                setOpacity(sum)
                try {
                    indexShow !== (elem.length - 1) ?
                        elem[i + 1].style.opacity = opacity :
                        elem[0].style.opacity = opacity
                    elem[i].style.opacity = 1 - opacity
                } catch (e) {
                    console.log(e)
                }

            }, 200)
        } else {
            setOpacity(0)
            indexShow !== (elem.length - 1) ? setIndexShow(indexShow + 1) : setIndexShow(0)
        }
    }

    useEffect(() => {
            anime(indexShow)
    }, [opacity])

    return (
        <div className="top__slider">
            <img className="top__slider-img" src="./../../images/top/1.jpg"
                 alt="images"/>
            <img className="top__slider-img" src="./../../images/top/2.jpeg"
                 alt="images"/>
            <img className="top__slider-img" src="./../../images/top/3.jpg"
                 alt="images"/>
        </div>
    )
}

export default TopSlider