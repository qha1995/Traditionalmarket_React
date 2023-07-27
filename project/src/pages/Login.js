import '../css/style_mem.css';


const Login = () => {
    return (
        <div id="wrap">
        <div class="login_wrap">
            <h1 class="login_logo">[소공인 전용]</h1>
            <div class="login_input_field">
                <legend>로그인 입력폼</legend>
                <input id="userId" name="userId" placeholder="아이디(사업자등록번호)을 입력하세요." type="number" pattern="\d*" maxlength="10" oninput="maxLengthCheck(this)"/>
               
                <input id="userPw" name="userPw" placeholder="비밀번호를 입력하세요." type="number" maxlength="20" oninput="maxLengthCheck(this)"/>
                <input id="token" name="token" type="hidden"/>
                <div class="auto_login_wrap">
                    <p class="auto_login">
                        <input id="autoLogin" name="auto" type="checkbox" value="Y"/>
                        <label for="autoLogin">자동 로그인</label>
                    </p>
                </div>
                <a class="btn_login" href="javascript:;">로그인</a>
                <div class="txt_log_btns">
                    <div class="find_idpw">
                        <p><a href="/maker/findId.do">아이디 찾기</a></p>
                        <p><a href="/maker/findPw.do">비밀번호 찾기</a></p>
                    </div>
                    <a class="btn_join" href="/maker/join_step1.do">회원가입</a>
                </div>
                </div>

        </div>
    </div>
    )
}
export default Login; 