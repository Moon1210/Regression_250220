menu_sets = []
//메뉴 생성기 시작 S==============================
class Menu{
    constructor(mtitle){
        this.mtitle=mtitle;
    }
    mtitle;url;tips;
}
//?menu=0 의 쿼리스트링은 데이터 생성함수 data_sets 객체의 push 순서와 일치합니다.
menu0 = new Menu("1. 선형회귀분석")//1. 개발목적/언어-선정/요구사항명세/분석 2. 구현도구/라이센스 3. 테스트도구(junit,mockobj)  4. 형상관리도구  5. 빌드도구
menu0.url = "?menu=0"
menu0.tips = ["1.1 성적 예측","1.2 당뇨 상태 예측","1.3 보스턴 주택가격 예측"]
menu1 = new Menu("2. 로지스틱 회귀분석")
menu1.url = "?menu=1"
menu1.tips = ["2.이진분류(종양데이터)","2.2 이진분류(당뇨데이터)"] //로그인 로그아웃 기능
menu2 = new Menu("3.카테고리 분류모델")
menu2.url = "?menu=2"
menu2.tips = ["3.1 임시","3.2 임시","3.3 임시"]
// (5분마다 프로그램 정상 작동유무 출력 메시지 스케줄링 확인)



menu_sets.push(menu0)
menu_sets.push(menu1)
menu_sets.push(menu2)
menu_sets.push(menu3)

