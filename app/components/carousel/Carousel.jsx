'use client';
function Carousel() {
    return (
        <div >
            <section className="carousel-slide">
                <div className="container mx-auto">
                    <div className="items p-2 ">
                        <div className="carousel w-full rounded-md">
                            <div id="item1" className="carousel-item w-full">
                                <img src="/images/OG-FARM.png"
                                    className="w-full" />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img src="./images/slide.jpeg"
                                    className="w-full" />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <img src="https://res.cloudinary.com/freshketimage001/image/upload/c_fill,w_1900,h_400,q_auto,f_auto/freshket/campaigns/OMS-Admin_AppSheet-Production/Paper_Cartons_fee/Paper_Cartons_fee_Image_TH__1900x500_"
                                    className="w-full" />
                            </div>
                            <div id="item4" className="carousel-item w-full">
                                <img src="https://res.cloudinary.com/freshketimage001/image/upload/c_fill,w_1900,h_400,q_auto,f_auto/oms/prod/content_management/banner/2023/12/DOWNLOAD%20CATALOG%20(JAN%202024)_DESKTOP_TH"
                                    className="w-full" />
                            </div>
                            <div id="item5" className="carousel-item w-full">
                                <img src="https://res.cloudinary.com/freshketimage001/image/upload/c_fill,w_1900,h_400,q_auto,f_auto/oms/prod/content_management/banner/2024/1/desktop_Dry_Jan_TH"
                                    className="w-full" />
                            </div>
                            <div id="item6" className="carousel-item w-full">
                                <img src="https://res.cloudinary.com/freshketimage001/image/upload/c_fill,w_1900,h_400,q_auto,f_auto/oms/prod/content_management/banner/2024/1/CREDIT%20CARD%20(JAN%202024)_DESKTOP_TH"
                                    className="w-full" />
                            </div>
                            <div id="item7" className="carousel-item w-full">
                                <img src="https://res.cloudinary.com/freshketimage001/image/upload/c_fill,w_1900,h_400,q_auto,f_auto/oms/prod/content_management/banner/2024/1/FESTIVE%20PROMOTION%20(JAN%202024)_DESKTOP_TH"
                                    className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                            <a href="#item5" className="btn btn-xs">5</a>
                            <a href="#item6" className="btn btn-xs">6</a>
                            <a href="#item7" className="btn btn-xs">7</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Carousel;