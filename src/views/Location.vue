<template>
    <div class="location">
        <a-row class="location-row" :gutter="[16,16]">
            <a-col :span="12">
                <div id="container">

                </div>
            </a-col>
            <a-col :span="12" class="info">
                <h3>How to reach Crete</h3>
                <ul class="ul">
                    <li class="li">
                        <span class="bold">By air:</span> The airport Nikos Kazantzakis (airport Code: HER) is the only one in Heraklion. Heraklion has 8-10 direct flights per day from Athens (ATH), 2-4 direct flights per day from Thesaloniki (SKG). Between April and September there are also frequent charter flights from most major European cities. Taxi service is provided just outside the airport.
                    </li>
                    <li>
                        <span class="bold">By sea:</span> There are two major ship companies on the line: Athens-Heraklion. Minoan lines and ANEK lines provide daily service from and towards Crete. There are taxis available as well as buses near the port.
                    </li>
                </ul>
                <h3>
                    Getting from the airport to the city
                </h3>
                <div class="description">
                    When you arrive at the Heraklion airport, you have two options: You either use public transportation (buses) or a taxi. We highly recommend the taxi option, since you will be able to find one immediately outside the arrivals building and it will take you directly to your destination.
                    How to reach Physics Building
                </div>
                <ul>
                    <li>
                        <span>By Taxi:</span> Phone number for calling a taxi and for information: (+30) 2810 210102, (+30) 2810 210146. The cost of a taxi from the city center to University of Crete Voutes campus is approximately 10-12 Euros. If you decide to go by taxi, you can print the map to show to the taxi driver.
                    </li>
                    <li>
                        <span>By Car:</span> Should you wish to rent a car, the map will give you a perspective on how to reach University's Physics Building and FORTH.
                    </li>
                    <li>
                        <span>By Public Bus:</span> There is a bus going directly from the center of the city to FO.R.T.H. You can take the bus from the bus station in front of Astoria Hotel (Eleytherias Square). The price of the one-way ticket is 1,50 Euros and you can buy it form the special small kiosk in the bus station or from any other kiosk. The bus schedule is the following:
                    </li>
                </ul>
                <ul style="list-style:none">
                    <li>
                        <span>Airport -University:</span> 07:20, 08:30, 11:30, 13:50, 15:00, 17:20 (The bus arrives at Astoria bus station about 10 minutes later)
                    </li>
                    <li>
                        <span>University - Airport:</span> 08:00, 09:15, 12:15, 14:30, 15:40, 18:00 The sign on the bus is: I.T.E.
                    </li>
                </ul>



            </a-col>
        </a-row>
    </div>
</template>

<script>
    /**
     @Date: 2021-05-22
     @Author: Mr Liu
     @Project: menhu
     **/
    export default {
        name: "Location",
        data() {
            return {
                map:{},
            }
        },
        mounted() {
            this.initMap()
        },
        methods: {
            initMap(){
                this.map = new AMap.Map('container', { // eslint-disable-line no-undef
                    zoom: 11,//级别
                    center: [116.397428, 39.90923],//中心点坐标
                    viewMode: '3D'//使用3D视图
                })
                let marker = new AMap.Marker({ // eslint-disable-line no-undef
                    position: new AMap.LngLat(116.39, 39.9),    // eslint-disable-line no-undef
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    title: '北京'
                });
                this.map.add(marker)
                // console.log(this.map)
            }
        }
    }
</script>

<style scoped lang="scss">
    .location{
        .location-row{
            .info{
                color: #0D5C8C;
                h3{
                    font-weight: 800;
                    color: #0D5C8C;
                }
                .description{
                    line-height: 25px;
                    /*text-align: left;*/
                    text-align: justify;
                    text-justify: inter-ideograph;/*IE*/
                    padding: 0 0 0 20px;
                }
                ul{
                    li{
                        line-height: 25px;
                        /*text-align: left;*/
                        text-align: justify;
                        text-justify: inter-ideograph;/*IE*/
                        span{
                            font-weight: bold;
                        }
                    }
                }
            }
            padding: 20px;
            #container{
                min-height: 600px;
            }
        }

    }
</style>
