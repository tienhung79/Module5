import React from "react";
import {Carousel} from "react-bootstrap";
import '../css/Service.css';

export const Service = () => {
    return (
        <div className="container">
            <h1 className="h1ForService">Dịch vụ</h1>
            <Carousel interval={10000} controls>
                <Carousel.Item>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <img
                                    className="d-block w-100 foodImg"
                                    src="/img/food3.jpg"
                                    alt="Image 1"
                                />
                            </div>
                            <div className="col-6">
                                <h1 className="titleService">Ẩm thực</h1>
                                <p className="pService">
                                Trải nghiệm ẩm thực tại Khu nghỉ có sự pha trộn độc đáo các món ăn truyền thống Việt Nam
                                với nhiều những hương vị ẩm thực châu Á, Ý và châu Âu cùng các món bò nhập khẩu thượng
                                hạng tại đa dạng các nhà hàng, quầy bar đẳng cấp được bao quanh bởi một khu vườn nhiệt
                                đới hay hướng mình ra biển, đón những hơi thở mát mẻ thổi về từ biển đông
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <img
                                    className="d-block w-100 foodImg"
                                    src="/img/spa1.jpg"
                                    alt="Image 2"
                                />
                            </div>
                            <div className="col-6">
                                <h1 className="titleService">Spa</h1>
                                <p className="pService">
                                    Tọa lạc tại khu vườn nhiệt đới tuyệt đẹp hướng biển của “Ốc đảo xanh” Furama Resort Đà Nẵng, được văn hóa Chăm Pa thổi hồn trong từng nét kiến trúc. Hãy đến với V-senses Wellness & Spa để cùng đắm chìm vào khung cảnh bình yên, lắng nghe tiếng sóng vỗ về tâm hồn, cảm nhận sự thanh mát của thiên nhiên hòa vào từng nhịp thở, và hành trình tìm về sự tĩnh tại và khôi phục năng lượng sống chỉ mới bắt đầu…
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <img
                                    className="d-block w-100 foodImg"
                                    src="/img/play1.jpg"
                                    alt="Image 3"
                                />
                            </div>
                            <div className="col-6">
                                <h1 className="titleService">Giải trí</h1>
                                <p className="pService">Biến kỳ nghỉ dưỡng năng động hơn bằng cách tham gia các hoạt động thể thao trên nước từ chèo thuyền catamaran, lướt ván buồm, chèo thuyền trên biển, lướt vát, đi xe đạp nước, trượt nước, lướt ván, chuối, dù lượn và đa dạng các hoạt động.</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <img
                                    className="d-block w-100 foodImg"
                                    src="/img/event1.jpg"
                                    alt="Image 3"
                                />
                            </div>
                            <div className="col-6">
                                <h1 className="titleService">Sự kiện</h1>
                                <p className="pService">
                                    Cung hội nghị Quốc tế International Convention Palace (ICP) với phòng Hội nghị lớn sức chứa lên tới 1000 khách cùng hơn 10 phòng chức năng phụ trợ quy mô từ 50 đến 300 khách được trang bị cơ sở vật chất, thiết bị hiện đại, là địa điểm lý tưởng dành cho các đoàn MICE tổ chức hội nghị, hội thảo và sự kiện.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
