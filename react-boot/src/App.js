import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/1.PNG';
import img2 from './img/2.PNG';
import img3 from './img/3.PNG';
import img4 from './img/4.PNG';
import img5 from './img/5.PNG';
import img6 from './img/6.PNG';
import img7 from './img/7.PNG';


function App() {
  return (
    <div >
      <header className="bg-danger m-10v py-1 px-5">
        <div className="row">
          <p className="col-md-9"></p>
          <p className="col-md-1">로그인</p>
          <p className="col-md-1">회원가입</p>
          <p className="col-md-1">🧝</p>
        </div>

        <div className='row text-light'>
        <h1 className="mb-5 mt-5 ml-3">당근어때</h1>
              <p className='col-md-2'> 호텔 목록</p>
              <p className='col-md-2'>문의게시판</p>
              <p className='col-md-2'>후기게시판</p>
              <p className='col-md-2'> 당근랜드</p>
              <p className='col-md-2'>고객센터</p>
              <p className='col-md-2'>마이페이지</p>
        </div>
         
          

      </header>


      <main className='container mt-4'>
        <section className='mr-5'>

        <div className='row'>
           <h3>오늘의 할인</h3>
              <img src={img5} className="col-md-4 rounded-5 img-fluid"></img>
              <img src={img6} className="col-md-4 rounded-5 img-fluid"></img>
              <img src={img7} className="col-md-4 rounded-5 img-fluid"></img>
         
          </div>
          </section>


          <section>
            <h3 className="mb-1 mt-5">어디로 떠나볼까요?</h3>
            <div className="card px-4 py-3">
            <form>
              <div className="mb-3">
                <label className="form-label">
                  여행지를 입력해주세요
                </label>
                <input type="text" className="form-control" id="name"  aria-describedby='이메일 입력'></input>
              </div>
            </form>

            <div className='row'>
                <div className="col-md-5">
                  <label className="form-label">
                    날짜
                  </label>
                  <input type="text" className="form-control " ></input>
                </div>

                <div className="col-md-5">
                  <label className="form-label">
                    인원수
                  </label>
                  <input type="text"className="form-control " ></input>
                </div>

                <button className="btn btn-primary btn-danger col-md-2 mt-4 "> 전송하기 </button>
            </div>
            </div>

          </section>


       


        <section className='mb-5'>
       
            <div className='col-md-12 mt-5'>
              <div className='row'>
                <h2  >이달의 인기 호텔</h2>
                <img src={img1} className='col-md-3' />
                <img src={img2} className='col-md-3' />
                <img src={img3} className='col-md-3' />
                <img src={img4} className='col-md-3' />
                  <div className='row'>
                    <p className='col-md-3'>롯데호텔</p>
                    <p className='col-md-3'>신라호텔</p>
                    <p className='col-md-3'>그랜드 하얏트</p>
                    <p className='col-md-3'>그랜드 인투라온</p>
                  </div>
              </div>
            </div>


            </section>

            <section className='mb-5'>
            <div className='col-md-12'>
                <div className='row'>
                  <h2 >이달의 인기 리조트</h2>
                  <img src={img1} className='col-md-3' />
                  <img src={img2} className='col-md-3' />
                  <img src={img3} className='col-md-3' />
                  <img src={img4} className='col-md-3' />
                  <div className='row'>
                    <p className='col-md-3'>롯데호텔</p>
                    <p className='col-md-3'>신라호텔</p>
                    <p className='col-md-3'>그랜드 하얏트</p>
                    <p className='col-md-3'>그랜드 인투라온</p>
                  </div>
                </div>
            </div>
            </section>


            <section className='mb-5'>
            <div className='col-md-12'>
                <div className='row'>
                  <h2>이달의 핫스팟</h2>
                  <img src={img1} className='col-md-3' />
                  <img src={img2} className='col-md-3' />
                  <img src={img3} className='col-md-3' />
                  <img src={img4} className='col-md-3' />
                  <div className='row'>
                    <p className='col-md-3'>롯데호텔</p>
                    <p className='col-md-3'>신라호텔</p>
                    <p className='col-md-3'>그랜드 하얏트</p>
                    <p className='col-md-3'>그랜드 인투라온</p>
                  </div>
                </div>
            </div>
            </section>
      
      </main>
      <footer>
        <p className='text-center'>&copy; 2023 how do you think about carrot?</p>
      </footer>
    </div>
  );
}

export default App;



    {/* 
    container : 본문을 담을 컨테이너를 생성
  mt : margin-top
  mb : margin-bottom
  m : margin
  bg-dark: 배경색을 검정으로 주겠다.
  bg : background-color;
  py : padding-y
  y : 위 아래 여백
  x : 좌 우 여백
  py-1 px-1 : 상하좌우 여백 
  BootStrap : 여백 크기가 1~5까지 5단계
  row : 컬럼 나열
  card : 정보를 시각적으로 보여줌
  card-body : 카드의 내용을 감싸는 부분
  cart-text : 카드에서 일반적 텍스트 내용
  cart-title
  rounded : 이미지의 모서리를 둥글게 만듬
  rounded-circle :이미지를 원형으로 만듬
  img-thumnail : 이미지에 경계선과 그림자 효과를 추가해서 작은 썸네일 이미지 만듬
  
    */}