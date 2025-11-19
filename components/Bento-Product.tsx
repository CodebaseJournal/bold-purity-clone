import Image from "next/image";
import React from "react";

const BentoProduct = () => {
    return (
        <section className={'product-showcase'}>
            <div className={'w-full'}>
               <div className={"showcase-layout"}>
               {/*Left side*/}
                   <div className={"overflow-hidden product-list-wrapper"}>
                       <div className={"product"}>
                           <div className={"image-wrapper bg-primary-100"}>
                               <picture className="absolute inset-0 w-full h-full z-0">
                                   {/* Desktop Source (Loads on screens 768px and wider) */}
                                   <source
                                       media="(min-width: 768px)"
                                       srcSet={"/toner-1-desktop.png"}
                                   />
                                   {/* Mobile Source (Loads by default, or smaller screens) */}
                                   <img
                                       src={"/toner-1-mobile.png"}
                                       alt={'hero'}
                                       className="w-full h-full object-cover object-center md:object-right"
                                   />
                               </picture>
                           </div>
                       </div>
                       <div className={"product"}>
                           <div className={"image-wrapper bg-primary-100"}>
                               <picture className="absolute inset-0 w-full h-full z-0">
                                   {/* Desktop Source (Loads on screens 768px and wider) */}
                                   <source
                                       media="(min-width: 768px)"
                                       srcSet={"/toner-2-desktop.png"}
                                   />
                                   {/* Mobile Source (Loads by default, or smaller screens) */}
                                   <img
                                       src={"/toner-2-mobile.png"}
                                       alt={'hero'}
                                       className="w-full h-full object-cover object-center md:object-right"
                                   />
                               </picture>
                           </div>
                       </div>
                   </div>
               {/*Right Side*/}
                   <div className={"second-product-wrapper"}>
                       <div className={"image-wrapper"}>
                           <picture className="absolute inset-0 w-full h-full z-0">
                               {/* Desktop Source (Loads on screens 768px and wider) */}
                               <source
                                   media="(min-width: 768px)"
                                   srcSet={"/toner-3-desktop.png"}
                               />
                               {/* Mobile Source (Loads by default, or smaller screens) */}
                               <img
                                   src={"/toner-3-mobile.png"}
                                   alt={'hero'}
                                   className="w-full h-full object-cover object-center md:object-right"
                               />
                           </picture>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    )
}
export default BentoProduct
