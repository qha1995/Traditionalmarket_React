import { Link } from 'react-router-dom';



const Header = () => {


 
    return (
        
        <header class="main_header">
        <h1>우리동네소공인</h1>
        <div class="main_header_inner">
            <p class="icon_bell">
                <a href="javascript:;" class="goNotify">
                    <span class="cnt"></span>
                </a>
            </p>

            <div class="main_header_search">
            <input id="mainSearchTxt" name="mainSearchTxt" placeholder="상호명을 입력해 주세요." type="text"/>
          
        </div>
          <button>메뉴</button>
        </div>
    </header>
    )
}

export default Header;