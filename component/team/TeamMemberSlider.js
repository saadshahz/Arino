import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import TeamMember from "./TeamMember";
import member1 from "@/public/images/team/member_1.jpeg";
import member2 from "@/public/images/team/member_2.jpeg";
import member3 from "@/public/images/team/member_3.jpeg";
import member4 from "@/public/images/team/member_4.jpeg";

export default function TeamMemberSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TeamMember
            img={member1}
            name={"John Doe"}
            jobTitle={"Project Manager"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member2}
            name={"John Doe"}
            jobTitle={"Project Designer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member3}
            name={"John Doe"}
            jobTitle={"Project Tester"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member4}
            name={"John Doe"}
            jobTitle={"Project Developer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member1}
            name={"John Doe"}
            jobTitle={"Project Manager"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member2}
            name={"John Doe"}
            jobTitle={"Project Designer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member3}
            name={"John Doe"}
            jobTitle={"Project Tester"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            img={member4}
            name={"John Doe"}
            jobTitle={"Project Developer"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
