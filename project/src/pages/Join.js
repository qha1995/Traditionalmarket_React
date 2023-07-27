const Join = () => {
	return (
<form name="frm" id="frm" action="/client/join_step3.do" method="post">
<input type="hidden" name="userType" value="G"/>
<input type="hidden" name="overlap" id="overlap" value=""/>
<input type="hidden" name="snsid" value="${param.snsid }"/>
<div id="wrap">
<header class="common_header">
<a class="btn_back" href="javascript:;">뒤로</a>
<h2>의뢰인 회원가입</h2>
</header>
<div class="memjoin_step_wrap">
<div class="memjoin_step_inner">
	<div class="memjoin_step_rail">
		<div class="memjoin_step memjoin_step01">
			<p><span>STEP 01</span><br/>약관 동의</p>
		</div>
		<div class="memjoin_step on memjoin_step02">
			<p><span>STEP 02</span><br/>상세 정보</p>
		</div>
		<div class="memjoin_step memjoin_step03">
			<p><span>STEP 03</span><br/>맞춤 정보</p>
		</div>
	</div>
</div>
</div>

		<div class="user_info_input_wrap">
<div class="user_info_input_each">
	<dl>
		<dt><label for="userId">이메일</label></dt>
		<dd>
			<input id="userId" name="userId" type="email"/>
			<a class="btn_certi certSend" href="javascript:;">인증하기</a>
		</dd>
	</dl>
	<p class="input_warn emailValid"></p>
</div>
<div class="user_info_input_each emailCertInput">
	<dl>
		<dt><label for="certiNum">이메일 인증번호</label></dt>
		<dd>
			<input id="certiNum" name="certiNum" type="number" pattern="\d*" maxlength="8" oninput="maxLengthCheck(this)"/>
			<a class="btn_certi certChk" href="javascript:;">확인하기</a>
		</dd>
	</dl>
	<p class="input_warn"></p>
</div>
<div class="user_info_input_each">
	<dl>
		<dt><label for="userNm">의뢰인 성명</label></dt>
		<dd>
			<input id="userNm" name="userNm" type="text"/>
		</dd>
	</dl>
	<p class="input_warn"></p>
</div>

<div class="user_info_input_each">
	<dl>
		<dt><label for="userPw">비밀번호</label></dt>
		<dd>
			<p class="join_vrtl_input" oninput="maxLengthCheck(this)">영문, 숫자, 기호로 8자 이상 입력하세요.</p>
			<input id="userPw" name="userPw" placeholder="영문과 숫자를 조합하여 20글자 이하로 입력하세요." type="hidden" maxlength="20" oninput="maxLengthCheck(this)" />
			 {/* <a class="btn_eye" rel="userPw" href="javascript:;">비밀번호 숨기기</a> */}
		</dd>
	</dl>
	<p class="input_warn"></p>
</div>
<div class="user_info_input_each">
	<dl>
		<dt><label for="userPwRe">비밀번호 확인</label></dt>
		<dd>
			<p class="join_vrtl_input2" oninput="maxLengthCheck(this)">영문, 숫자, 기호로 8자 이상 입력하세요.</p>
			<input id="userPwRe" name="userPwRe" placeholder="동일한 비밀번호를 입력하세요." type="hidden" maxlength="20" oninput="maxLengthCheck(this)" />
		{/* <a class="btn_eye" rel="userPwRe" href="javascript:;">비밀번호 숨기기</a>  */}
		</dd>
	</dl>
	<p class="input_warn"></p>
</div>

<div class="btm_full_btn">
	<a href="javascript:;">다음 단계로 이동합니다.</a>
</div>
</div>

</div>
</form>
	)}
export default Join;