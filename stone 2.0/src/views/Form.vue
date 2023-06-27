<template>
  <div>
    <!--这是整个页面-->
    <el-container style="height: 920px; border: 0px">
      <!--这是侧边栏（左边）-->
      <el-row class="aside">
        <el-col>
          <h1 align="center">瑞通炭素</h1>
          <el-menu
            :default-active="this.$route.path"
            router
            class="el-menu-aside"
            background-color="#191A23"
            text-color="#fff"
            active-text-color="#4D70FF">
            <el-menu-item index="/">
              <i class="el-icon-tickets"></i>
              <span>石墨化报表</span>
            </el-menu-item>
            <el-menu-item index="/press">
              <i class="el-icon-s-order"></i>
              <span>压型看板</span>
            </el-menu-item>
            <el-menu-item index="/graying">
              <i class="el-icon-s-platform"></i>
              <span>石墨化看板</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <!--这是右边容器-->
      <el-container>
        <!--这是顶栏-->
        <el-header>
          <el-menu
            mode="horizontal"
            background-color="#F6F6F6">
            <div class="head">
              <el-dropdown>
                <span>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                  </el-avatar>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>切换角色</el-dropdown-item>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-menu>
        </el-header>
        <!--这是页面的主要部分-->
        <el-main class="right">
          <!--这是卡片-->
          <el-card class="box-card">
            <!--这是表格-->
            <el-table
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{ textAlign: 'center' }"
              :cell-style="{ textAlign: 'center' }">
              <el-table-column fixed prop="number1" label="编号" width="140">
              </el-table-column>
              <el-table-column prop="number2" label="炉号" width="50">
              </el-table-column>
              <el-table-column prop="time1" label="送电时间" width="160">
              </el-table-column>
              <el-table-column prop="time2" label="停电时间" width="160">
              </el-table-column>
              <el-table-column prop="time3" label="时长" width="100">
              </el-table-column>
              <el-table-column prop="total1" label="总炉数" width="70">
              </el-table-column>
              <el-table-column prop="total2" label="总重" width="120">
              </el-table-column>
              <el-table-column prop="total3" label="总支数" width="120">
              </el-table-column>
              <el-table-column prop="total4" label="总价" width="120">
              </el-table-column>
              <el-table-column prop="total5" label="电量合计" width="120">
              </el-table-column>
              <el-table-column prop="power" label="有功电量" width="120">
              </el-table-column>
              <el-table-column prop="price" label="单价" width="120">
              </el-table-column>
              <el-table-column prop="low" label="低谷(占比)" width="120">
              </el-table-column>
              <el-table-column prop="flat" label="平段(占比)" width="120">
              </el-table-column>
              <el-table-column prop="high" label="高峰(占比)" width="120">
              </el-table-column>
              <el-table-column prop="tip" label="尖峰(占比)" width="120">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button type="text" size="small">导出报表</el-button>
                  <el-button type="text" size="small">装炉报表</el-button>
                  <el-button type="text" size="small">原始记录</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--这是带附加功能的分页-->
            <div class="block">
              <el-pagination
                :page-sizes="[10, 20, 50, 100]"
                :page-size="33"
                layout="total, sizes, prev, pager, next, jumper"
                :total="375"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
/*这是表格后面的背景色 */
.right{
  background-color:#e0e4e9	;
}

/*这是顶栏*/
.el-header {
  background-color: #f6f6f6;
  .head {
    display: inline-flex;
    float: right;
    margin-top: 10px;
  }
}
/*这是侧边栏 */
.aside {
  background-color: #191a23;
  color: white;
  overflow: hidden;
  .el-menu-aside {
    height: 100vh;
    width: 300px;
  }
}
/*这是分页 */
.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  //表格数据（超级多）
  data() {
    return {
      tableData: [
        {
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },{
          number1: "SMH2022050810",
          number2: "6",
          time1: "2022-05-08 10:30:00",
          time2: "2022-05-09 07:30:00",
          time3: "20小时58分",
          total1: 87,
          total2:4,
          total3:11111,
          total4:"111111.00",
          total5:"112233.00",
          power:435624,
          price:0.1345315,
          low:"37.71%",
          flat:"34.64%",
          high:"64.74%",
          tip:"35.23%",
        },
      ],
    };
  },
};
</script>
