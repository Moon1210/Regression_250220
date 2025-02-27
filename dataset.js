
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}

let d1 = new DataSet("선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("공부시간과 성적과 관련성의 선형성을 가진 연속적인 데이터를 활용하여 연속된 예상값을 추출하는 모델")//서브 타이틀
d1.set_img(0,{imgtitle:"일부코드샘플",imgurl:"https://drive.google.com/file/d/1iOckT0xtTu7BMFC5ASkz0LYV9bt_BzCp/view?usp=drive_link",imglog:"시험성적데이터를 임의로 만들어 선형회귀분석 코드",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"산점도데이터분석",imgurl:"https://drive.google.com/file/d/1CIwZ85qicFFhAS3PUi21T_Oj0KdqJqXq/view?usp=drive_link",imglog:"문제데이터의 선형성 관계 파악을 위한 산점도 그래프 분석",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/1yQ-9SrC3kucE9QZSm_WUu6kKLQSNCM5n/view?usp=drive_link",imglog:"훈련시 모델의 올바른 학습을 데이터의 정규분포로 표준화 전처리 시행",sourceurl:"https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"선형모델의 구성, 컴파일, 훈련",imgurl:"https://drive.google.com/file/d/1h6qe2fzkVQ6Rwk-8Ji2DoezubuDGO4NG/view?usp=drive_link",imglog:"Sequential모델 및 입력출력레이어 작성과 mse 오차손실함수 및 역전파 시 적용 될 SGD(경사하강법) 최적화함수 적용과 200회 훈련 실행",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1lSgvcX5K5BWVC2hazEfoqcgm1qPb20E9/view?usp=drive_link",imglog:"시각화 그래프 판단 시 120회 훈련에서 훈련 조기종료를 검토할수도 있다",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"모델의 예측",imgurl:"https://drive.google.com/file/d/1VHCm1bFoPZKvjqHCujZecaLAaMUCe3i9/view?usp=drive_link",imglog:"임의의 데이터를 생성하여 모델의 예측 결과를 표기",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀


d1.set_content("당뇨환자에 대한 1년 후 상태예측, 예측값은 연속데이터로 출력.")
d1.set_img(1,{imgtitle:"샘플소스코드",imgurl:"https://drive.google.com/file/d/18cODSvjq_JmE6nmwbC-nl1m4w_UQw-UL/view?usp=drive_link",imglog:"당뇨환자에 대한 나이,성별,bmi수치, bp수치등을 10의 항목을 측정하여 1년후 당뇨수치에 대한 증감데이터",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"소스데이터수신 및 분석",imgurl:"https://drive.google.com/file/d/1qBfawY68DbxBftS0u-yXBqSEHp-Mrl8K/view?usp=drive_link",imglog:"sklearn의 diabetes 데이터를 수신하여 항목별 분석과 수치값과 1년후 변화 질량에 대한 확인",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"연관성 분석을 위한 산점도",imgurl:"https://drive.google.com/file/d/1Ja6WolzI8jI10cjr8WuZiTWAnTmIVhvI/view?usp=drive_link",imglog:"1년후 질량과 측정된 수치의 연관성 분석을 위한 산점도 그래프 확인",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"1.선택데이터",imgurl:"https://drive.google.com/file/d/1s9xFuF_kSf4Xxhw2uSv5wmspZhZXnKSm/view?usp=drive_link",imglog:"bml 수치는 대각방향의 선형형태를 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"2.선택데이터",imgurl:"https://drive.google.com/file/d/10THolo96gHedqg_wCz_IHwl_qkZEKscS/view?usp=drive_link",imglog:"s5 수치는 대각방향의 선형성을 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"3.미선택",imgurl:"https://drive.google.com/file/d/1gYK4M78IFUpx_sb2CP4WinG1gRE60vVl/view?usp=drive_link",imglog:"성별데이터는 방향의 선형성이 없으므로 1년후 질량과 연관이 없으므로 판명되어 분석에서 제외",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터추출",imgurl:"https://drive.google.com/file/d/1RwWozycnmvu82yDacz5xf-_XHGib5Hb9/view?usp=drive_link",imglog:"선택된 2번, 8번 인덱스 데이터 추출 및 데이터의 모양 확인 후 문제데이터와 정답데이터 값 확인분석",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"모델구성과 훈련",imgurl:"https://drive.google.com/file/d/1vp9phz3ugS_MOuIvxy9wBb27d9ntihBM/view?usp=drive_link",imglog:"순차모델구성과 입출력 레이 구성, MSE 손실함수와 SGD를 최적화함수 사용하여 컴파일 및 훈련 13회 실행",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"훈련결과시각화",imgurl:"https://drive.google.com/file/d/1Jbv6GAhSVDRuf2AWegh5zGfHCrGuw2Kr/view?usp=drive_link",imglog:"100회 이상의 훈련 후 시각그래프 판단하에 12회 훈련이 최적화로 판단되어 12회 훈련으로 조기종료함",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터 예측",imgurl:"https://drive.google.com/file/d/15jAMgcsckOZFhNOiNNlHMKQlq4X_DCyB/view?usp=drive_link",imglog:"테스트 데이터 10개를 추출하여 예측 실행, 결과는 오차확률 4% 수치대로 접근",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/diabet"})//이미지타이틀


d1.set_content("보스턴 지역의 환경에 따른 하우스 가격 데이터로 예측값은 연속데이터로 출력")
d1.set_img(2,{imgtitle:"보스턴하우징샘플코드",imgurl:"https://drive.google.com/file/d/1fxAywvlQcSIPcNviXJL7QLPiZ3JgBdmD/view?usp=drive_link",imglog:"총 12개 유형의 데이터로 범죄율, 주거토지비율, 회사입지비율, 강의 경계여부, 일상화질소 농도, 방의 갯수등 13개의 데이터를 분석하여 집가격을 예측하는 시나리오",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"1.데이터연관성 산점도 분석코드",imgurl:"https://drive.google.com/file/d/17xs543I_4d7EutaWPWUoUUn70TtnvLjP/view?usp=drive_link",imglog:"데이터연관성 분석을 위해 데이터 항목별 산점도 시각화",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"2.산점도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1zdCmPnN6wgavx7VOf4Jm3_s8Zkg0MAam/view?usp=drive_link",imglog:"분석결과 5번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"3.산점도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1UMQ9WywBL1AuR071u23dPufA-QhqCbk0/view?usp=drive_link",imglog:"분석결과 7번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련을 위한 데이터 선택",imgurl:"https://drive.google.com/file/d/1MYUffne5GXqG8mtVn1Jzzvl_RTO16Gs9/view?usp=drive_link",imglog:"5번 인덱스 데이터와 7번 인덱스 데이터의 선형성 확인결과로 훈련데이터로 추출후 선형성 재확인",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련데이터 전처리",imgurl:"https://drive.google.com/file/d/1yklqBb6nzGXkmrh1i5zQF0wJSWDI_gvj/view?usp=drive_link",imglog:"훈련데이터의 수치 폭을 확인후 정규분포데이터로 표준화 실행",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"모델구성 및 훈련",imgurl:"https://drive.google.com/file/d/100joT9jnHm5XRzM5lTlxWuG1k1jTlKKF/view?usp=drive_link",imglog:"순차모델 구성과 입출력레이어 추가, MSE 손실함수 및 SGD 최적화함수를 적용하여 컴파일, 10회 훈련 실시",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1f2jZXpeZ-A7iaOWNUHcQOa6PQPKED7Gi/view?usp=drive_link",imglog:"훈련결과 손실값을 시각화 그래프 출력 결과 분석 및 확인",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"",imgurl:"",imglog:"",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"",imgurl:"",imglog:"",sourceurl:"https://github.com/Moon1210/Regression_250220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀



d1.set_fill("선형 분석을 위한 데이터 표준화 및 훈련실행 시 연관된 데이터의 수집과 분석하여 데이터를 선택함이 중요하게 생각된다.")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
//https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression
let d2 = new DataSet("이진분류모델")//메인타이틀
d2.set_content("종앙데이터 분석에 의한 음성과 양성 종양데이터 예측모델.")//서브 타이틀
d2.set_img(0,{imgtitle:"종양데이터인출",imgurl:"https://drive.google.com/file/d/1IwwbGJLpHqSAwuxLLHqSjJ-8L09fihGB/view?usp=drive_link",imglog:"sklearn에서 제공하는 종양데이터 수신코드",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"수신데이터구성파악",imgurl:"https://drive.google.com/file/d/1s3AiZbtZvUxau5jGVH48pkW4SBc6D5QS/view?usp=drive_link",imglog:"반지름, 표면조직, 둘레, 범위등의 10개의 특성 데이터파악",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터값 수치분석",imgurl:"https://drive.google.com/file/d/1M6En3aYao84FTx6HYfh85D9-DFZMBfzg/view?usp=drive_link",imglog:"각 특성의 최대값과 표준편차 분석",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"훈련및테스트데이터 분리",imgurl:"https://drive.google.com/file/d/1qr1AQlKLK0YUnAOSzlJcMunWmI6_QLn5/view?usp=drive_link",imglog:"훈련데이터 80%, 검증데이터 10%, 테스트데이터 10% 각각 분리",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/1uiguZMctCDaDiRCygQUukVc9P4zJMV3-/view?usp=drive_link",imglog:"데이터 표준분포값으로 변경 및 변경된 데이터 확인",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터최종확인",imgurl:"https://drive.google.com/file/d/1Z3iMc9nwo5ij47D56orzQ3JLkNodBVco/view?usp=drive_link",imglog:"훈련전 데이터 수량 및 차원과 값에 대한 최종확인",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"이진분류모델구성과 행렬",imgurl:"https://drive.google.com/file/d/1Pp-VrcK433wnwzzTy8P9C3jsm-itAlxi/view?usp=drive_link",imglog:"이진분류모델 구성 후 컴파일 및 훈련 200회 실행",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"훈련결과시각화그래프",imgurl:"https://drive.google.com/file/d/1IelBU2Xxu5vX0U2cKrOm5VA_eHD2Bmqf/view?usp=drive_link",imglog:"이진분류모델의 훈련 후 검증데이터와 훈련데이터의 정확도와 손실도 측정 데이터 그래프 시각화",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"이진분류모델평가",imgurl:"https://drive.google.com/file/d/156IOurd5R67dQPNjzpEmV7xnckYHHN2t/view?usp=drive_link",imglog:"테스트 데이터와 테스트 정답을 입력하여 손실율과 정확률을 측정",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"예측데이터 출력",imgurl:"https://drive.google.com/file/d/1nS07beKPFhfvwi5bngOo4POlV_FHADEd/view?usp=drive_link",imglog:"테스트 데이터를 입력하여 예측값을 출력 후 실제 정답과 비교",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"혼동행렬과 시각화",imgurl:"https://drive.google.com/file/d/1ATHNaq0x-0IixK-vdP1oOimFzOshce-T/view?usp=drive_link",imglog:"혼동행렬을 출력하여 히트맵으로 실제정답과 예측정답의 예측된 횟수 시각화 실행하여 1종오류와 2종오류에 대한 추측",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀
d2.set_img(0,{imgtitle:"정밀도재현율측청",imgurl:"https://drive.google.com/file/d/1BEMuOc5BGAF0ZfgGBLJ2hLgLuNPl2SSW/view?usp=drive_link",imglog:"훈련결과 모델의 정밀도와 재현율 및 f1-score를 측정하여 수치 요약",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/LinearRegression"})//이미지타이틀

d2.set_content("당뇨데이터 분석에 의한 음성과 양성 당뇨판정 예측모델.")//서브 타이틀
d2.set_img(0,{imgtitle:"당뇨데이터 불려오기",imgurl:"https://drive.google.com/file/d/1Qx0N4WcckQTIlAWf8rRXTsXV3eFCZq7_/view?usp=drive_link",imglog:"임신횟수, 혈장, 혈압등의 8개 특성 데이터 판다스를 이용하여 로드 및 분석",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"히스토그램분석1",imgurl:"https://drive.google.com/file/d/1nhL19Ok3s27QVe7gx6LpKkwAnLQmscfz/view?usp=drive_link",imglog:"특성별 이상치데이터 판별과 특성데이터의 분포를 시각화",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"히스토그램분석2",imgurl:"https://drive.google.com/file/d/1anokP8HUPjbct-djhsi_tyY33iLJWnxc/view?usp=drive_link",imglog:"특성별 이상치데이터 판별과 특성데이터의 분포를 시각화",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터분할",imgurl:"https://drive.google.com/file/d/189RB8p6GOfJ1g5B7gt5YOro3YAgoAlSE/view?usp=drive_link",imglog:"훈련데이터  80%, 검증데이터 10%, 테스트데이터 10% 분활",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/152DuWP0tiQe9je0OjzJ-g7uHOmGl2faL/view?usp=drive_link",imglog:"데이터 정규분포로 표준화 후 변경 데이터 확인",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"모델구성 및 컴파일훈련",imgurl:"https://drive.google.com/file/d/1bi5Q0_9BC7F2MSfFkninft64r2SK-g5U/view?usp=drive_link",imglog:"이진분류모델구성과 모델의 컴파일 후 훈련데이터와 검증데이터로 훈련실행",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1KPaDlCuIKi_OhMPW8yKbz93Nsj9VqGqH/view?usp=drive_link",imglog:"손실도와 정확도를 훈련데이터와 검증데이터를 시각화하여 분석",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"모델평가",imgurl:"https://drive.google.com/file/d/13ZwpvlEqQpAWMKRVy4RQlMU89DMv4w13/view?usp=drive_link",imglog:"데스트 문제데이터와 정답데이터를 입력하여 정확도 손실율 출력",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"혼동행렬 및 시각화",imgurl:"https://drive.google.com/file/d/1EsMH-o7ZJ-L9de0Dl0zo4uROppdPm2gr/view?usp=drive_link",imglog:"혼동행렬출력 후 히트맵을 이용하여 결과를 시각화 후 1종오류와 2종오류 수치 확인",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀
d2.set_img(0,{imgtitle:"정밀도와 재현율",imgurl:"https://drive.google.com/file/d/1oQ7uh9mVPp7aUfUuKHtc_mkn0mT0eK3l/view?usp=drive_link",imglog:"정밀도 및 재현율과 f1-score 요약출력",sourceurl:"https://github.com/Moon1210/Regression_250220/tree/main/binary_classification_diabetes"})//이미지타이틀

d2.set_fill("악성종양과 양성 종양을 확률적으로 구분 할 수 있는 AI 모델 구축")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
