import React from 'react';
import Login from'../pages/Login';
import Join from'../pages/Join';

const Main = () => {

    return (
        <div id="Wrap">
    
    
        
        <div class="main_all_wrap pb126">
            <div class="main_maker_list_wrap">
                <h2>
                    <strong><b>의뢰인</b>님</strong>
                    <p>어떤 소공인을 찾으세요?</p>
                </h2>
                <div class="main_maker_list">
                    <ul>
                        <li class="maker01">
                            <a class="categorySel" href="javascript:;" rel="01">식료품</a>
                        </li>
                        <li class="maker02">
                            <a class="categorySel" href="javascript:;" rel="02">섬유</a>
                        </li>
                        <li class="maker03 lines">
                            <a class="categorySel" href="javascript:;" rel="03">의복(악세서리)<br/>및 모피</a>
                        </li>
                        <li class="maker04">
                            <a class="categorySel" href="javascript:;" rel="04">가방 및 신발</a>
                        </li>
                    </ul>
                    <ul>
                        <li class="maker05 lines">
                            <a class="categorySel" href="javascript:;" rel="05">인쇄 및<br/>기록매체</a>
                        </li>
                        <li class="maker06">
                            <a class="categorySel" href="javascript:;" rel="06">1차 금속</a>
                        </li>
                        <li class="maker07">
                            <a class="categorySel" href="javascript:;" rel="07">금속가공</a>
                        </li>
                        <li class="maker08">
                            <a class="categorySel" href="javascript:;" rel="08">전자부품 및<br/>전자장비</a>
                        </li>
                    </ul>
                    <ul class="more">
                        <li class="maker09">
                            <a class="categorySel" href="javascript:;" rel="09">전기장비</a>
                        </li>
                        <li class="maker10 lines">
                            <a class="categorySel" href="javascript:;" rel="10">기타 기계 및<br/>장비</a>
                        </li>
                        <li class="maker11">
                            <a class="categorySel" href="javascript:;" rel="11">가구</a>
                        </li>
                        <li class="maker12">
                            <a class="categorySel" href="javascript:;" rel="12">비특정 제품</a>
                        </li>
                    </ul>
                    <ul class="more">
                        <li>
                            <a class="categorySel" href="javascript:;" rel="13">기타 소공인<img src={process.env.PUBLIC_URL + "/assets/images/btn_plus.png"} alt="" /></a>
                        </li>
                        <li>
                            <a class="categorySel" href="javascript:;" rel="14">전체 소공인
                            <img src={process.env.PUBLIC_URL + "/assets/images/btn_plus.png"} alt="" /></a>
                        </li>
                    </ul>
                    <p class="open_all_list">
                        <a href="javascript:;">
                            전체항목열기<img src={process.env.PUBLIC_URL + "/assets/images/btn_arrow_down.png"} alt="" />
                        </a>
                    </p>
                </div>
            </div>
            
            <div class="main_cont_each_wrap">
                <div class="main_cont_ttl_wrap">
                    <strong class="main_cont_each_ttl">백년소공인</strong>
                    <p class="main_cont_each_subtxt">우수소공인을 소개합니다!</p>
                </div>
                <div class="main_cont_slide hmaker">
                    <ul class="swiper-wrapper hmakerList"></ul>
                </div>
                <p class="main_cont_btn_wrap">
                    <a href="/client/century.do">백년소공인 전체보기<img src={process.env.PUBLIC_URL + "/assets/images/btn_arrow_down.png"} alt="" /></a>
                </p>
            </div>
        
            <div class="blank grey"></div>
    
            <div class="main_cont_each_wrap">
                <div class="main_cont_ttl_wrap">
                    <strong class="main_cont_each_ttl">스마트공방</strong>
                    <p class="main_cont_each_subtxt">스마트공방을 소개합니다!</p>
                </div>
                <div class="main_cont_slide hmaker">
                    <ul class="swiper-wrapper smartList"></ul>
                </div>
                <p class="main_cont_btn_wrap">
                    <a href="/client/smart.do">스마트공방 전체보기<img src={process.env.PUBLIC_URL + "/assets/images/gate_btn_arrow_g.png"} alt="" /></a>
                </p>
            </div>
        
            <div class="blank grey"></div>
        
            <div class="main_cont_each_wrap recent_maker">
                <div class="main_cont_ttl_wrap">
                    <strong class="main_cont_each_ttl">최근 본 소공인</strong>
                    <p class="main_cont_each_subtxt">마이페이지 &gt; 최근 본 소공인 메뉴에서 확인하실 수 있습니다.</p>
                </div>
            
                <div class="main_cont_slide recent">
                    <ul class="swiper-wrapper"></ul>
                </div>
                <p class="main_cont_btn_wrap recent">
                    <a href="/client/myRecentMaker.do">최근 본 소공인 전체보기<img src={process.env.PUBLIC_URL + "/assets/images/gate_btn_arrow_g.png"} alt="" /></a>
                </p>
        
            
                <p class="main_no_login recent_no_result">최근 본 소공인이 없습니다.<br/>관심있는 소공인을 선택하여 정보를 확인해주세요.</p>
            
            </div>
        
            <div class="blank grey recent_maker"></div>
    
            <div class="main_cont_each_wrap">
                <div class="main_cont_ttl_wrap">
                    <strong class="main_cont_each_ttl">개인 맞춤 소공인</strong>
        
                    <div class="hash_chk_btns" >
                        <ul></ul>
                    </div>
                    <a class="go_to_set" href="/client/setCustomInfo.do">개인 맞춤 설정하기<img src={process.env.PUBLIC_URL + "/assets/images/gate_btn_arrow_w.png"} alt="" /></a>
                    <ul class="main_maker_list_ul" ></ul>
            
                </div>
                <p class="main_cont_btn_wrap">
                    <a href="/client/personalList.do">개인 맞춤 소공인 더보기 +</a>
                </p>
        
                <p class="main_no_login">
                    개인 맞춤 소공인은 개인 맞춤 설정을<br/>완료하신 회원에게만 표시됩니다.<br/  >개인 맞춤 소공인을 확인하시려면 로그인을 해주세요.
                    <a class="go_to_set" href="/client/login.do">로그인 하기<img src={process.env.PUBLIC_URL + "/assets/images/gate_btn_arrow_w.png"} alt="" /></a>
                </p>
        
            </div>
    
            <div class="blank grey"></div>
    
            <div class="main_board_list">
                <strong>함께해요<a href="/client/coworkList.do">더보기</a></strong>
                <p>구인을 원하는 소공인이 직접 작성한 구인정보글입니다.</p>
                <ul class="coworkMain"></ul>
            </div>
    
            <div class="blank grey"></div>
        
            <div class="main_board_list">
                <strong>공지사항<a href="/client/noticeList.do">더보기</a></strong>
                <ul class="noticeMain"></ul>
                <div class="main_btm_btns clear_both">
                    <a class="f_left" href="/client/faq.do">자주 묻는 질문</a>
                    <a class="f_right" href="/client/qnaList.do">1:1 문의</a>
                </div>
            </div>
            <h3 class="main_btm_venture_logo">중수벤처기업부</h3>
            
        </div>
    <Login/>
    <Join/>
    </div>
 
    
    )
    
}

export default Main;

