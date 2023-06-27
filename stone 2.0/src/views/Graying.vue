<template>
  <!--页面用一个容器装，div为了保险。。可能没用-->
  <div>
    <el-container>
      <!--顶栏-->
      <el-header>
        <el-menu
          mode="horizontal"
          background-color="#132330"
          text-color="#708090"
          active-text-color="white"
        >
          <el-menu-item index="1"
            ><a href="http://localhost:8080/ " class="link">
              <i class="el-icon-back"></i>返回</a
            >
          </el-menu-item>
        </el-menu>
      </el-header>
      <!--用一个容器装主要内容-->
      <el-container>
        <el-main>
          <!--布局分三部分-->
          <el-row :gutter="5">
            <!--第一部分-->
            <el-col :span="7">
              <div class="content color1">
                <!--标签页tabs，activeName是默认使用哪个标签-->
                <el-tabs v-model="activeName">
                  <el-tab-pane label="实时" name="first">
                    <div class="time_left_all">
                      <div class="time_left_1">
                        <div class="time_left_1_head">
                          <i class="el-icon-caret-bottom"></i>装炉
                        </div>
                        <div class="time_left_1_main">暂无数据</div>
                      </div>
                      <div class="time_left_2">
                        <div class="time_left_2_head">
                          <i class="el-icon-caret-bottom"></i>监测数据
                        </div>
                        <div class="time_left_2_main">
                          <el-table
                            :data="table_g_left"
                            height="680"
                            style="width: 100%"
                            :header-cell-style="{
                              background: '#1D2A38',
                              color: '#fff',
                              textAlign: 'center',
                            }"
                            :cell-style="{
                              background: '#141E28',
                              color: '#A5A5A5',
                              textAlign: 'center',
                              padding: '0px',
                            }"
                          >
                            <el-table-column
                              prop="name_g"
                              label="名称(单位)"
                              width="130"
                            >
                            </el-table-column>
                            <el-table-column
                              prop="time_g"
                              label="实时"
                              width="105"
                            >
                            </el-table-column>
                            <el-table-column
                              prop="fif_time_g"
                              label="15分钟"
                              width="90"
                            >
                            </el-table-column>
                            <el-table-column
                              prop="th_time_g"
                              label="30分钟"
                              width="90"
                            >
                            </el-table-column>
                            <el-table-column
                              prop="one_time_g"
                              label="1小时"
                              width="100"
                            >
                            </el-table-column>
                          </el-table>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="报表" name="second">
                    <div>
                      <!--炉号表格-->
                      <div style="height: 300px">
                        <div
                          style="color: white; font-size: large; margin: 5px"
                        >
                          <i class="el-icon-caret-bottom"></i>炉号8
                        </div>
                        暂无数据
                      </div>
                      <!--功率位移趋势图-->
                      <div>
                        <div
                          style="color: white; font-size: large; margin: 5px"
                        >
                          <i class="el-icon-caret-bottom"></i>功率位移趋势
                        </div>
                        <div
                          id="main_5_g"
                          style="width: 540px; height: 170px"
                        ></div>
                      </div>
                      <!--运行数据图-->
                      <div>
                        <div
                          style="color: white; font-size: large; margin: 5px"
                        >
                          <i class="el-icon-caret-bottom"></i>运行数据
                        </div>
                        <div
                          id="main_6_g"
                          style="width: 540px; height: 170px"
                        ></div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="位移变化" name="third">
                    <!--表格-->
                    <div class="left_g">
                      <el-table
                        :data="table_graying"
                        :header-cell-style="{
                          background: '#30343D',
                          color: '#DDE0E8',
                          textAlign: 'center',
                        }"
                        :cell-style="{
                          background: '#141E28',
                          color: '#DDE0E8',
                          textAlign: 'center',
                          padding: '2px',
                        }"
                        style="width: 95%"
                        height="720px"
                      >
                        <el-table-column
                          prop="time_g"
                          label="时刻点"
                          width="68"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="power_g"
                          label="有功功率"
                          width="78"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="displacement_g"
                          label="位移"
                          width="60"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="resistance_g"
                          label="炉阻"
                          width="64"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="displacement_a_g"
                          label="位移变化"
                          width="78"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="one_current_g"
                          label="一次电流"
                          width="78"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="current_g"
                          label="直流电流"
                          width="78"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="voltage_g"
                          label="直流电压"
                          width="78"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="branch_power_g"
                          label="支流功率"
                          width="88"
                        >
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-tab-pane>
                </el-tabs></div
            ></el-col>
            <!--第二部分-->
            <el-col :span="11"
              ><div class="content color2">
                <div class="center_g"></div>
                <div class="center_g_b">
                  <div
                    style="color: white; font-size: large; margin-left: 15px"
                  >
                    <i class="el-icon-caret-bottom"></i>功率vs位移
                  </div>
                  <div id="main_0_g" style="width: 100%; height: 170px"></div>
                </div></div
            ></el-col>
            <!--第三部分-->
            <el-col :span="6"
              ><div class="content color3">
                <div style="color: white; font-size: large; margin: 5px">
                  <i class="el-icon-caret-bottom"></i>机组
                </div>
                <div id="main_1_g" style="width: 100%; height: 170px"></div>

                <div id="main_2_g" style="width: 100%; height: 170px"></div>

                <div id="main_3_g" style="width: 100%; height: 170px"></div>
                <div class="luzu">
                  <div style="color: white; font-size: large; margin: 5px">
                    <i class="el-icon-caret-bottom"></i>炉阻
                  </div>
                  <div id="main_4_g" style="width: 100%; height: 170px"></div>
                </div></div
            ></el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    //右边机组1
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_1_g"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["直流电压", "AB线电压(U1)", "BC线电压(U2)", "AC线电压(U3)"],
          textStyle: {
            color: ["#7D90B3"],
          },
          top: "9%",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
          splitLine: false,
          axisLabel: {
            color: "#7D90B3",
          },
        },
        series: [
          {
            name: "直流电压",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [59, 61, 85, 78, 77, 0, 0, 57, 60, 62, 61, 62],
            itemStyle: {
              color: "#006CED",
              lineStyle: {
                color: "#006CED",
                width: 3,
              },
            },
          },
          {
            name: "AB线电压(U1)",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [36, 36, 36, 35, 34, 35, 35, 35, 35, 35, 35, 35],
            itemStyle: {
              color: "#00CFFF",
              lineStyle: {
                color: "#00CFFF",
                width: 3,
              },
            },
          },
          {
            name: "BC线电压(U2)",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [36, 36, 36, 35, 34, 35, 35, 35, 35, 35, 35, 35],
            itemStyle: {
              color: "#00FFFF",
              lineStyle: {
                color: "#00FFFF",
                width: 3,
              },
            },
          },
          {
            name: "AC线电压(U3)",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [36, 36, 36, 35, 34, 35, 35, 35, 35, 35, 35, 35],
            itemStyle: {
              color: "#06FDBC",
              lineStyle: {
                color: "#06FDBC",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    //右边机组2
    myEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_2_g"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "9%",
          data: ["直流电流", "IA(A1)", "IB(A2)", "IC(A3)"],
          textStyle: {
            color: ["#7D90B3"],
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
          splitLine: false,
          axisLabel: {
            color: "#7D90B3",
          },
        },
        series: [
          {
            name: "直流电流",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [99, 119, 179, 190, 192, 0, 0, 47, 56, 65, 76, 81],
            itemStyle: {
              color: "#006CED",
              lineStyle: {
                color: "#006CED",
                width: 3,
              },
            },
          },
          {
            name: "IA(A1)",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [106, 125, 294, 283, 286, 0, 0, 48, 56, 65, 84, 89],
            itemStyle: {
              color: "#00CFFF",
              lineStyle: {
                color: "#00CFFF",
                width: 3,
              },
            },
          },
          {
            name: "IB(A2)",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [106, 125, 284, 283, 286, 0, 0, 48, 56, 65, 84, 89],
            itemStyle: {
              color: "#00FFFF",
              lineStyle: {
                color: "#00FFFF",
                width: 3,
              },
            },
          },
          {
            name: "IC(A3)",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [106, 125, 294, 283, 286, 0, 0, 48, 56, 65, 84, 89],
            itemStyle: {
              color: "#06FDBC",
              lineStyle: {
                color: "#06FDBC",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    //右边机组3
    myEcharts2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_3_g"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "9%",
          data: ["变压器温度", "A柜水温", "B柜水温"],
          textStyle: {
            color: ["#7D90B3"],
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
          splitLine: false,
          axisLabel: {
            color: "#7D90B3",
          },
        },
        series: [
          {
            name: "变压器温度",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [0, 5, 3, 7, 5, 12, 23, 42, 46, 52, 41, 39, 24, 33, 23, 11],
            itemStyle: {
              color: "#006CED",
              lineStyle: {
                color: "#006CED",
                width: 3,
              },
            },
          },
          {
            name: "A柜水温",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [0, 5, 3, 3, 4, 12, 23, 42, 46, 52, 43, 21, 24, 12, 5, 3],
            itemStyle: {
              color: "#00CFFF",
              lineStyle: {
                color: "#00CFFF",
                width: 3,
              },
            },
          },
          {
            name: "B柜水温",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [0, 5, 3, 23, 33, 12, 42, 46, 52, 43, 21, 24, 12, 5, 3, 3],
            itemStyle: {
              color: "#00FFFF",
              lineStyle: {
                color: "#00FFFF",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    //右边炉阻1
    myEcharts3() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_4_g"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "9%",
          data: ["炉阻"],
          textStyle: {
            color: ["#7D90B3"],
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          top: "17%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
          splitLine: false,
          axisLabel: {
            color: "#7D90B3",
          },
        },
        series: [
          {
            name: "炉阻",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [
              1.2, 1.19, 1.15, 1.13, 1.12, 1.11, 0.99, 0.95, 0.93, 0.88, 0.87,
              0.85, 0.77, 0.74, 0.66, 0.62, 0.55, 0.51,
            ],
            itemStyle: {
              color: "#006CED",
              lineStyle: {
                color: "#006CED",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    //底下功率位移
    myEcharts4() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_0_g"));
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          top: "17%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["有功功率", "功率设定", "位移"],
          textStyle: {
            color: ["#7D90B3"],
          },
        },
        xAxis: [
          {
            type: "category",
          },
        ],
        yAxis: [
          {
            type: "value",

            min: 0,
            max: 15000,
            interval: 3000,
            axisLabel: {
              color: "#7D90B3",
            },
          },
          {
            type: "value",
            min: 0,
            max: 1500,
            interval: 300,
            axisLabel: {
              color: "#7D90B3",
            },
          },
        ],
        series: [
          {
            name: "有功功率",
            type: "bar",

            data: [
              5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000,
              6000, 7000, 5000, 6000, 7000, 5000, 6000, 7000, 8000, 1000, 8000,
              8000, 5000, 7000, 5000,
            ],
            itemStyle: {
              color: "#009AF3",
              lineStyle: {
                color: "#009AF3",
                width: 3,
              },
            },
          },
          {
            name: "功率设定",
            type: "line",
            symbol: "circle",
            yAxisIndex: 1,

            data: [
              300, 330, 234, 333, 333, 333, 654, 633, 523, 563, 644, 667, 711,
              723, 333, 333, 333, 512, 645, 355, 756, 856, 1210, 1111, 1111,
              1111,
            ],
            itemStyle: {
              color: "#FD8601",
              lineStyle: {
                color: "#FD8601",
                width: 3,
              },
            },
          },
          {
            name: "位移",
            type: "line",
            symbol: "circle",
            yAxisIndex: 1,

            data: [
              1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111,
              1111, 711, 723, 733, 733, 833, 512, 645, 355, 756, 856, 999, 999,
              999, 1111,
            ],
            itemStyle: {
              color: "#06FDBC",
              lineStyle: {
                color: "#06FDBC",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    //功率位移趋势
    myEcharts5() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_5_g"));
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          top: "17%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["有功功率", "功率设定", "位移"],
          textStyle: {
            color: ["#7D90B3"],
          },
        },
        xAxis: [
          {
            type: "category",
          },
        ],
        yAxis: [
          {
            type: "value",

            min: 0,
            max: 15000,
            interval: 3000,
            axisLabel: {
              color: "#7D90B3",
            },
          },
          {
            type: "value",
            min: 0,
            max: 1500,
            interval: 300,
            axisLabel: {
              color: "#7D90B3",
            },
          },
        ],
        series: [
          {
            name: "有功功率",
            type: "bar",

            data: [
              7000, 7000, 7000, 7000, 5000, 6000, 7000, 8000, 5000, 5000, 5000,
              6000, 7000, 5000, 7000, 8000, 5000, 6000, 7000, 8000, 7000, 8000,
              8000, 8000, 5000, 7000, 5000,
            ],
            itemStyle: {
              color: "#009AF3",
              lineStyle: {
                color: "#009AF3",
                width: 3,
              },
            },
          },
          {
            name: "功率设定",
            type: "line",
            symbol: "circle",
            yAxisIndex: 1,

            data: [
              800, 800, 855, 800, 800, 855, 800, 800, 855, 633, 523, 563, 644,
              667, 711, 723, 333, 654, 633, 523, 645, 654, 633, 523, 654, 633,
              523, 1111,
            ],
            itemStyle: {
              color: "#FD8601",
              lineStyle: {
                color: "#FD8601",
                width: 3,
              },
            },
          },
          {
            name: "位移",
            type: "line",
            symbol: "circle",
            yAxisIndex: 1,

            data: [
              1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111, 1111,
              1111, 711, 723, 733, 733, 711, 723, 733, 733, 756, 856, 999, 999,
              999, 1111, 1111, 1111,
            ],
            itemStyle: {
              color: "#06FDBC",
              lineStyle: {
                color: "#06FDBC",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    //右边炉阻1
    myEcharts6() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main_6_g"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "9%",
          data: ["炉阻"],
          textStyle: {
            color: ["#7D90B3"],
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          top: "17%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
          splitLine: false,
          axisLabel: {
            color: "#7D90B3",
          },
        },
        series: [
          {
            name: "炉阻",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [
              1.15, 1.13, 1.12, 0.95, 0.93, 0.88, 0.87, 0.77, 0.75, 0.85, 0.77,
              0.74, 0.66, 0.62, 0.55, 0.51, 0.44, 0.33, 0.22,
            ],
            itemStyle: {
              color: "#006CED",
              lineStyle: {
                color: "#006CED",
                width: 3,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
    this.myEcharts1();
    this.myEcharts2();
    this.myEcharts3();
    this.myEcharts4();
    this.myEcharts5();
    this.myEcharts6();
  },
  data() {
    return {
      activeName: "third",
      table_g_left: [
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
        {
          name_g: "AB线电压/kV",
          time_g: "0",
          fif_time_g: "765",
          th_time_g: "0.0",
          one_time_g: "-3",
        },
      ],
      //左边的超长表格
      table_graying: [
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
        {
          time_g: "20:00",
          power_g: "5678",
          displacement_g: "6789",
          resistance_g: "1.234",
          displacement_a_g: "234",
          one_current_g: "33.543",
          current_g: "23.5",
          voltage_g: "54.654",
          branch_power_g: "1234.432",
        },
      ],
    };
  },
};
</script>
<!--右边样式-->
<style lang="less" scoped>
.luzu {
  margin-top: 20px;
}
.center_g {
  height: 590px;
  background-image: url("../../assets/gray.png");
  background-size: cover;
  
}
</style>

<style lang="less">
//两个区域基础样式
.time_left_1 {
  background-color: #141e28;
  height: 400px;
  border-bottom: 10px solid #151419;
}
.time_left_2 {
  background-color: #141e28;
  height: 700px;
}
//主要解决滑动条问题
.time_left_all {
  overflow-y: scroll;
  height: 740px;
  //实时表的滑动条隐藏（莫名奇妙不见了）
  &::-webkit-scrollbar {
    height: 1px;
    width: 1px;
  }
}
//装炉
.time_left_1_head {
  color: #fff;
  margin-left: 20px;
}
//暂无数据
.time_left_1_main {
  color: grey;
  font-size: large;
  margin: 234px;
}
//监测数据 四个字
.time_left_2_head {
  color: #fff;
  margin-left: 20px;
  margin-top: 20px;
}
//监测数据表格
.time_left_2_main {
  width: 94%;
}
</style>

<!--左 位移变化 表格的样式-->
<style>
/*去掉tabs底部的下划线*/
.el-tabs__nav-wrap::after {
  position: static;
}
/**去除el-tab-pane切换时的下划线 */
.el-tabs__active-bar.is-top {
  background-color: transparent;
}
/**位移变化表格表头样式 */
.el-tabs__item {
  font-size: 16px;
  padding: 12px;
  margin-left: 20px;
  color: #9e9b9b;
}
/**位移变化表格上移且右移 */
.el-table {
  margin: 12px;
}
</style>
<!--表格的 滑动条样式-->
<style lang="less" scoped>
.el-table {
  //corner是右边和下面滑动条的空白处
  ::-webkit-scrollbar-corner {
    background-color: #161f35;
  }
  // 定义滚动条的样式
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #141e28; /*滚动条凹槽的背景颜色*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: #737f85; /*滚动条的颜色*/
  }
}
//下面两个deep的内容是把右边滚动条放入表格
/deep/.el-table th.gutter {
  display: none;
  width: 0;
}

/deep/.el-table colgroup col[name="gutter"] {
  display: none;
  width: 0;
}
/* 去掉表格中间数据的分割线 */
/deep/.el-table__row > td {
  border: none;
}
/* 去掉表格上面的线 */
/deep/.el-table th.is-leaf {
  border: none;
}
/* 去掉表格最下面的那一条线 */
/deep/.el-table::before {
  height: 0;
}
</style>
<!--整个页面的基础样式-->
<style lang="less" scoped>
//基础页面
.el-container {
  background-color: #151419;
  height: 900px;
  //顶部
  .el-menu {
    background-color: #141e28;
    height: 62px;
    margin-top: 10px;
    border: 0px;
    .link {
      text-decoration: none;
      font-size: 22px;
    }
  }
  //中间部分的默认格式
  .content {
    border-radius: 4px;
    height: 800px;
    background: #141e28;
  }
  //中间部分顶上的颜色
  .color1 {
    border-top: rgb(57, 167, 198) 4px solid;
  }
  .color2 {
    border-top: rgb(97, 191, 88) 4px solid;
  }
  .color3 {
    border-top: rgb(223, 55, 86) 4px solid;
  }
}
</style>
