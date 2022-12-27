const Footer = () => {
    return (
        <div className="footer hidden px-8 py-8 sm:block sm:z-0">
            <div className="inner">
                <div className="service_area flex justify-between block flex-row pb-10 border-b border-b-gray-200">
                    <div className="footer_menu flex flex-row">
                        <div className="menu_box w-40">
                            <strong className="menu_title">이용안내</strong>
                            <ul className="menu_list">
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">검수기준</a>
                                </li>
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">이용정책</a>
                                </li>
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">패널티 정책</a>
                                </li>
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">커뮤니티 가이드라인</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_box w-40">
                            <strong className="menu_title">고객지원</strong>
                            <ul className="menu_list">
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">공지사항</a>
                                </li>
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">서비스 소개</a>
                                </li>
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">쇼룸 안내</a>
                                </li>
                                <li className="menu_item text-xs text-gray-400 mt-2">
                                    <a href="#" className="menu_link">판매자 방문접수</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="customer_service w-40">
                        <strong className="service_title">
                            고객센터
                            <a href="#" className="service_tel">&nbsp;1588-5252</a>
                        </strong>
                        <div className="service_time text-gray-400">
                            <dl className="time_box text-xs mt-2">
                                <dt className="time_term">
                                    운영시간
                                    <br/>평일 10:00 - 18:00
                                </dt>
                            </dl>
                        </div>
                        <div className="service_btn_box mt-2">
                            <a href="#" className="bg-black text-white text-xs p-2">
                                자주 묻는 질문
                            </a>
                        </div>
                    </div>
                </div>
                <div className="corporation_area mt-2">
                    <ul className="term_list inline-flex pb-2">
                        <li className="term_item mr-4">
                            <a href="#" className="text-sm">회사소개</a>
                        </li>
                        <li className="term_item mr-4">
                            <a href="#" className="text-sm">인재채용</a>
                        </li>
                        <li className="term_item mr-4">
                            <a href="#" className="text-sm">제휴제안</a>
                        </li>
                        <li className="term_item mr-4">
                            <a href="#" className="text-sm">이용약관</a>
                        </li>
                        <li className="term_item mr-4">
                            <a href="#" className="text-sm">개인정보처리방침</a>
                        </li>
                    </ul>
                    <div className="business_info">
                        <div className="info_list text-xs text-gray-400">
                            런잇프(주) 사업자등록번호 : 111-22-33333
                            <br/>사업장소재지 : 지구-501
                        </div>
                    </div>
                </div>
                <div className="notice_area pt-2">
                    <p className="notice text-xs text-gray-400">
                        런잇프(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별 판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한
                        책임은 당사에 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;