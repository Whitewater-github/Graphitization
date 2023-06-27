<template>
  <!--页面用一个容器装，div为了保险。。可能没用-->
  <div>
    <el-container>
      <!--这是顶栏-->
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
      <!--这是主要部分-->
      <el-main class="main1">
        <!--这是中间的三个-->
        <el-row :gutter="10">
          <el-col :span="4">
            <div class="content color1">
              <div class="icon_left">
                <i class="el-icon-data-board">监测数据</i>
              </div>
              <div class="myTable">
                <el-table
                :data="table_p_left"
                height="500"
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
                <el-table-column prop="name_p" label="名称(单位)" width="105">
                </el-table-column>
                <el-table-column prop="time_p" label="实时" width="100">
                </el-table-column>
                <el-table-column prop="one_time_p" label="1小时" width="100">
                </el-table-column>
              </el-table>
              </div>
              
            </div>
          </el-col>
          <el-col :span="14"><div class="content color2">
          <div class="center_p">
          </div>
          </div></el-col>
          <el-col :span="6">
            <div class="content color3">
              <div style="color: white; font-size: large; margin: 15px">
                <i class="el-icon-data-line"></i>风机
              </div>
              <div id="main" style="width: 100%; height: 220px"></div>
              <div style="color: white; font-size: large; margin: 10px">
                <i class="el-icon-data-line"></i>近七日配料统计
              </div>
              <div id="main1" style="width: 100%; height: 220px"></div>
            </div>
          </el-col>
        </el-row>
        <!--这是最下面的部分，底栏-->
        <el-row>
          <el-col :span="24">
            <div>
              <el-card class="card1">
                <span style="color: #fff"
                  ><i class="el-icon-data-line"></i>成型配料报表</span
                >
                <el-table
                  :data="tableData"
                  style="font-size: mini; width: 99%"
                  :header-cell-style="{
                    background: '#1D2A38',
                    color: '#A5A5A5',
                    textAlign: 'center',
                  }"
                  :cell-style="{
                    background: '#141E28',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '0px',
                  }"
                  :header-row-style="{ padding: '1px' }"
                >
                  <el-table-column prop="time" label="时间" width="158%">
                  </el-table-column>
                  <el-table-column prop="wok" label="锅" width="48%">
                  </el-table-column>
                  <el-table-column prop="west1" label="西1-0.5(kg)" width="99%">
                  </el-table-column>
                  <el-table-column prop="west2" label="西8-4(kg)" width="99%">
                  </el-table-column>
                  <el-table-column prop="west3" label="西0.5-0(kg)" width="99%">
                  </el-table-column>
                  <el-table-column prop="west4" label="西2-1(kg)" width="99%">
                  </el-table-column>
                  <el-table-column
                    prop="west5_powder"
                    label="西雷蒙粉(kg)"
                    width="110%"
                  >
                  </el-table-column>
                  <el-table-column prop="west6" label="西生碎(kg)" width="100%">
                  </el-table-column>
                  <el-table-column
                    prop="west7_powder"
                    label="西石墨粉(kg)"
                    width="110%"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="west8_powder"
                    label="西除尘粉(kg)"
                    width="110%"
                  >
                  </el-table-column>
                  <!--东-->
                  <el-table-column prop="east1" label="东2-1(kg)" width="100%">
                  </el-table-column>
                  <el-table-column prop="east2" label="东8-4(kg)" width="100%">
                  </el-table-column>
                  <el-table-column prop="east3" label="东1-0(kg)" width="100%">
                  </el-table-column>
                  <el-table-column prop="east4" label="东4-2(kg)" width="100%">
                  </el-table-column>
                  <el-table-column
                    prop="east5_powder"
                    label="东雷蒙粉(kg)"
                    width="110%"
                  >
                  </el-table-column>
                  <el-table-column prop="east6" label="东生碎(kg)" width="100%">
                  </el-table-column>
                  <el-table-column
                    prop="east7_powder"
                    label="东石墨粉(kg)"
                    width="110%"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="east8_powder"
                    label="东除尘粉(kg)"
                    width="110%"
                  >
                  </el-table-column>
                  <el-table-column prop="all_data" label="总量" width="100%">
                  </el-table-column>
                </el-table>
              </el-card></div
          ></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    //风机
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [
            "C电捕风机电流",
            "C三楼风机电流",
            "C沥青除尘器电流",
            "C一楼除尘器电流",
          ],
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
            name: "C电捕风机电流",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [
              114, 114, 115, 114, 115, 114, 89, 0, 0, 0, 53, 2, 0, 60, 81, 81,
              81, 81, 81, 81, 81, 81, 81,
            ],
            itemStyle: {
              color: "#006CED",
              lineStyle: {
                color: "#006CED",
                width: 3,
              },
            },
          },
          {
            name: "C三楼风机电流",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [
              52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,
              52, 52, 52, 52, 52, 52, 52,
            ],
            itemStyle: {
              color: "#00CFFF",
              lineStyle: {
                color: "#00CFFF",
                width: 3,
              },
            },
          },
          {
            name: "C沥青除尘器电流",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [
              0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
              21, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            itemStyle: {
              color: "#00FFFF",
              lineStyle: {
                color: "#00FFFF",
                width: 3,
              },
            },
          },
          {
            name: "C一楼除尘器电流",
            symbol: "circle",
            type: "line",
            stack: "Total",
            data: [
              47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47,
              47, 47, 47, 47, 47, 47, 47,
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
    //近七日配料统计
    myEcharts1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main1"));
      // 指定图表的配置项和数据
      var option = {
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
          data: ["锅数", "总量"],
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
        xAxis: [
          {
            type: "category",
            data: [],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "锅数(个)",
            color:'#fff',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              color: "#7D90B3",
            },
            splitLine: {
              show: false,
            },
          },
          {
            type: "value",
            name: "总量(kg)",
            min: 0,
            max: 40000,
            interval: 10000,
            axisLabel: {
              color: "#7D90B3",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "锅数",
            type: "bar",
            barWidth: 7,
            data: [0, 0, 0, 15, 23, 23, 11],
            itemStyle: {
              color: "#00A6F4",
            },
          },
          {
            name: "总量",
            symbol: "circle",
            symbolSize: 4,
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            data: [0, 0, 0, 25719, 39379, 39434, 18802],
            itemStyle: {
              color: "#06FDBC",
            },
            lineStyle: {
              color: "#06FDBC",
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
  },
  //底栏表格的数据
  data() {
    return {
      option: {
        title: {
          text: "堆叠区域图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top",
              },
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
      table_p_left: [
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
        {
          name_p: "1#仓实际值",
          time_p: "234.2",
          one_time_p: "234.534",
        },
      ],
      tableData: [
        {
          time: "2016-05-02 16:23:00",
          wok: "西锅",
          west1: "146.0",
          west2: "44.0",
          west3: "46.0",
          west4: "146.0",
          west5_powder: "0.0",
          west6: "0.0",
          west7_powder: "116.0",
          west8_powder: "116.0",
          east1: "146.0",
          east2: "44.0",
          east3: "46.0",
          east4: "146.0",
          east5_powder: "0.0",
          east6: "0.0",
          east7_powder: "116.0",
          east8_powder: "116.0",
          all_data: "111",
        },
        {
          time: "2016-05-02 16:23:00",
          wok: "西锅",
          west1: "146.0",
          west2: "44.0",
          west3: "46.0",
          west4: "146.0",
          west5_powder: "0.0",
          west6: "0.0",
          west7_powder: "116.0",
          west8_powder: "116.0",
          east1: "146.0",
          east2: "44.0",
          east3: "46.0",
          east4: "146.0",
          east5_powder: "0.0",
          east6: "0.0",
          east7_powder: "116.0",
          east8_powder: "116.0",
          all_data: "111",
        },
        {
          time: "2016-05-02 16:23:00",
          wok: "西锅",
          west1: "146.0",
          west2: "44.0",
          west3: "46.0",
          west4: "146.0",
          west5_powder: "0.0",
          west6: "0.0",
          west7_powder: "116.0",
          west8_powder: "116.0",
          east1: "146.0",
          east2: "44.0",
          east3: "46.0",
          east4: "146.0",
          east5_powder: "0.0",
          east6: "0.0",
          east7_powder: "116.0",
          east8_powder: "116.0",
          all_data: "111",
        },
        {
          time: "2016-05-02 16:23:00",
          wok: "西锅",
          west1: "146.0",
          west2: "44.0",
          west3: "46.0",
          west4: "146.0",
          west5_powder: "0.0",
          west6: "0.0",
          west7_powder: "116.0",
          west8_powder: "116.0",
          east1: "146.0",
          east2: "44.0",
          east3: "46.0",
          east4: "146.0",
          east5_powder: "0.0",
          east6: "0.0",
          east7_powder: "116.0",
          east8_powder: "116.0",
          all_data: "111",
        },
        {
          time: "2016-05-02 16:23:00",
          wok: "西锅",
          west1: "146.0",
          west2: "44.0",
          west3: "46.0",
          west4: "146.0",
          west5_powder: "0.0",
          west6: "0.0",
          west7_powder: "116.0",
          west8_powder: "116.0",
          east1: "146.0",
          east2: "44.0",
          east3: "46.0",
          east4: "146.0",
          east5_powder: "0.0",
          east6: "0.0",
          east7_powder: "116.0",
          east8_powder: "116.0",
          all_data: "111",
        },
      ],
    };
  },
};
</script>

<!--很多样式-->
<style lang="less" scoped>
.center_p{
  background-image: url("../../assets/press3.png");
  background-size: cover;
  height: 540px;
}
.el-table__row>td{ border: none; }
//去除表格的margin
.el-table.el-table--fit.el-table--scrollable-y.el-table--enable-row-hover.el-table--enable-row-transition {
  margin: 0px;
}
//左监测数据表格的icon
.icon_left {
  color: #fff;
  margin: 10px;
}
//整个页面容器基础样式
.el-container {
  background-color: #151419;
  height: 920px;
  //顶栏
  .el-menu {
    background-color: #141E28;
    height: 62px;
    width: 98.8%;
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
    height: 550px;
    background: #141E28;
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
  //最下面
  .card1 {
    background-color: #141E28;
    border: 1px #151419 solid;
    margin-top: 5px;
    width: 98vw;
  }
}
</style>


<!--el-table表格的样式-->
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
    background-color: #141E28; /*滚动条凹槽的背景颜色*/
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
/deep/.el-table__row>td{
  border: none;
}
/* 去掉表格上面的线 */
/deep/.el-table th.is-leaf{
  border: none;
}
/* 去掉表格最下面的那一条线 */
/deep/.el-table::before{
  height: 0;
}
</style>
