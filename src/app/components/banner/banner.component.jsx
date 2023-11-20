"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, A11y, Pagination, EffectCreative } from 'swiper/modules';
import image1 from "../../../../public/Flight_2_Homepage_Desktop_a3d65abd76.jpg";
import image2 from "../../../../public/Psyche_outside39abmound_IMG_8486_desktop_f5072ad69b.jpg";
import image3 from "../../../../public/Star6_26_110323_DSC_8515_mobile_562c823076.jpg";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import "./banner.scss";

const images = [
    {
        id: 1,
        image: image1,
        title: 'STARSHIP\'S SECOND FLIGHT TEST',
        desc: 'The second flight test of a fully integrated Starship could launch as soon as mid-November, pending regulatory approval.'
    },
    {
        id: 2,
        image: image2 ,
        title: 'PSYCHE MISSION',
        desc: 'On Friday, October 13 at 10:19 a.m. ET, Falcon Heavy launched NASA\'s Psyche mission to an interplanetary transfer orbit from Launch Complex 39 A(LC - 39 A) at Kennedy Space Center in Florida.This was the fourth launch for the side boosters, both of which previously supported the USSF - 44, USSF - 67, and Hughes JUPTER 3 missions.'
    },
    {
        id: 3,
        image: image3,
        title: 'STARLINK MISSION',
        desc: 'On Friday, November 3 at 8:37 p.m. ET, Falcon 9 launched 23 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.',
    },
]

const Banner = () => {
    return (
        <section className="banner">
            <Swiper
                modules = {
                    [Autoplay, A11y, Parallax, EffectCreative, Pagination]
                }
                slidesPerView={1}
                autoplay = {
                    {
                        delay: 7000,
                        disableOnInteraction: false,
                    }
                }
                pagination = {
                    {
                        type: 'progressbar',
                    }
                }
                speed = { 800 }
                loop = { true }
                parallax = {true}
                effect = { 'creative' }
                creativeEffect = {
                    {
                        prev: {
                            shadow: true,
                            translate: ['-20%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }
                }
            >
                {
                    images.map((img) => {
                        const {id, image, title, desc} = img
                        return (
                            <SwiperSlide key={id}>
                                <Image className="object-cover absolute h-full w-full" fill sizes="100vw" priority src={img.image} alt={title} /> 
                                <div className="container">
                                    <div className="wrapper max-w-2xl">
                                        <h1 className="text-4xl mb-7" data-swiper-parallax="-100">{title}</h1>
                                        <div className="desc"><p>{desc}</p></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Banner;