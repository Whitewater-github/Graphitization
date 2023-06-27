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
                   <div class="time_left_1_head"><i class="el-icon-caret-bottom"></i>装炉</div>
                   <div class="time_left_1_main">暂无数据</div>
                  </div>
                  <div class="time_left_2">
                    <div class="time_left_2_head"><i class="el-icon-caret-bottom"></i>监测数据</div>
                    <div class="time_left_2_main">
                      <el-table :data="table_g_left" 
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
                <el-table-column prop="name_g" label="名称(单位)" width="130">
                </el-table-column>
                <el-table-column prop="time_g" label="实时" width="105">
                </el-table-column>
                <el-table-column prop="fif_time_g" label="15分钟" width="90"> 
                </el-table-column>
                <el-table-column prop="th_time_g" label="30分钟" width="90"> 
                </el-table-column>
                <el-table-column prop="one_time_g" label="1小时" width="100"> 
                </el-table-column>
              </el-table>
                    </div>
                  </div>
                  </div>
                  </el-tab-pane>
                  <el-tab-pane label="报表" name="second">配置管理</el-tab-pane>
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
                      <el-table-column prop="time_g" label="时刻点" width="68">
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
                      </el-table
                  >
                    </div>
                  </el-tab-pane>
                </el-tabs></div
            ></el-col>
            <!--第二部分-->
            <el-col :span="11"><div class="content color2"></div></el-col>
            <!--第三部分-->
            <el-col :span="6"><div class="content color3"></div></el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "third",
      table_g_left:[
        {
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
        },{
          name_g:'AB线电压/kV',
          time_g:'0',
          fif_time_g:'765',
          th_time_g:'0.0',
          one_time_g:'-3',
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
<style lang="less">
//两个区域基础样式
.time_left_1{
  background-color: #141E28;
  height: 400px;
  border-bottom: 10px solid #151419;
}
.time_left_2{
  background-color: #141E28;
  height: 700px;
}
//主要解决滑动条问题
.time_left_all{
  overflow-y: scroll;
  height: 740px;
  //实时表的滑动条隐藏（莫名奇妙不见了）
  &::-webkit-scrollbar {
    height: 1px;
    width:1px;
  }
}
//装炉
.time_left_1_head{
  color: #fff;
  margin-left: 20px;
}
//暂无数据
.time_left_1_main{
   color:grey;
   font-size: large;
   margin: 234px;
}
//监测数据 四个字
.time_left_2_head{
  color: #fff;
  margin-left: 20px;
  margin-top: 20px;
}
//监测数据表格
.time_left_2_main{
  width:94%;
}
</style>



<!--左 位移变化 表格的样式-->
<style>
/*去掉tabs底部的下划线*/
.el-tabs__nav-wrap::after {
  position: static;
}
/**去除el-tab-pane切换时的下划线 */
.el-tabs__active-bar.is-top{
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
.el-table{
  margin:12px;
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
<!--整个页面的基础样式-->
<style lang="less" scoped>
//基础页面
.el-container {
  background-color: #151419;
  height: 900px;
  //顶部
  .el-menu {
    background-color: #141E28;
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
}
</style>
