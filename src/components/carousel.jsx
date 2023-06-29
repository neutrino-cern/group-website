import React, { useEffect } from "react";
import { Carousel } from "tw-elements";
import { initTE } from "tw-elements";

// TODO: Proper import of the images and use of Picture component

    const App = () => {
      useEffect(() => {
        initTE({ Carousel });
      }, []);

      return (
  
        <div
            id="carouselExampleIndicators"
            class="relative s-hidden w-full order-1 rounded-xl shadow-xl transition hover:shadow-xl mt-10 lg:-mt-10 max-w-xl lg:max-w-7xl"
            data-te-carousel-init
            data-te-carousel-slide
            data-te-interval="4500">

        {/* <!--Carousel indicators--> */}
        <div
          class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="0"
            data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="2"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="3"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 4"></button>
        </div>
      
        {/* <!--Carousel items--> */}
        <div
        class="relative w-full overflow-hidden aspect-[4/3] rounded-xl after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active>
            <img
              src="protodune-group.jpg"
              class="absolute block w-full"
              alt="Group photo" />
          </div>
          {/* <!--Second item--> */}
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src="spacemunk.png"
              class="absolute block w-full"
              alt="Spacemunk" />
          </div>
          {/* <!--Third item--> */}
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src="einstein.png"
              class="absolute block w-full"
              alt="Einstein" />
          </div>
          {/* <!--Fourth item--> */}
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src="chessmunk.png"
              class="absolute block w-full"
              alt="Chessmunk" />
          </div>

        </div>

      </div>
     
); }; export default App;