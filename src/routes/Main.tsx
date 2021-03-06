import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    max-width: 100%;
    height: auto;
    color: black;
`;
const Img = styled.div`
    img{
        width: 100%;
        height: 100%;
    }
`;
const MapContainer = styled.div`
    font-family: 'Dongle', sans-serif;
    text-align: center;
    margin-top: 20px;
    max-width: auto;
    height: auto;
    span{
        font-weight: 400;
        font-size: 30px;
    }
    .maker{
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-top: 10px;
   }
   #myMap{
       margin-top: 20px;
       margin-bottom: 20px;
   }
`;

const GetTicket = styled.div`
        font-weight: 400;
        font-size: 30px;
        background-color: rgba(94, 178, 84, 0.3);
        padding-bottom: 10px;
        img{
            margin-top: 20px;
            width: 81px;
            height: 20px;
        }
`;



function Main() {
    // 카카오맵 API
    const { kakao } = window;

    function KakaoMapScript() {

        var mapContainer = document.getElementById('myMap'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.55965126414985, 126.90983935382229), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        var markerPosition = new kakao.maps.LatLng(37.55965126414985, 126.90983935382229);

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
    }
    useEffect(() => {
        KakaoMapScript();
    }, []);
    return (
        <>
            <Container>
                <Img>
                    <img src={`${process.env.PUBLIC_URL}/img/mistake.jpg`}></img>
                </Img>
                <MapContainer>
                    <img className="maker" src={`${process.env.PUBLIC_URL}/img/maker.png`}></img>
                    <span> 오시는 길</span>
                    <div id='myMap' style={{
                        width: '100%',
                        height: '400px'
                    }}>
                    </div>
                    <a href="https://www.playticket.co.kr/m/nav/detail.html?idx=1686">
                        <GetTicket>
                            <img src={`${process.env.PUBLIC_URL}/img/ptLogo.png`}></img> 예매하기!
                        </GetTicket>
                    </a>
                </MapContainer>
            </Container>
        </>
    );
}

export default Main;