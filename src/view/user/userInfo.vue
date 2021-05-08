<template>
  <div>
    <!-- 用户/员工信息-->
       <Row :gutter="24">
         <Card>
           <Row shadow>
                <Col span="3">

                  <Input v-model="queryList.userNumber" placeholder="请输入账号" clearable style="width: 160px" />
                </Col>
                <Col span="3">
                  <Input v-model="queryList.userName" placeholder="请输入姓名" clearable style="width: 160px" />
                </Col>
                <Col span="3">
                  <Input v-model="queryList.phone" placeholder="请输入手机号" clearable style="width: 160px" />
                </Col>
                <Col span="3">
                     <!-- <div class = "header_title">状态：</div> -->
                    <Select v-model="queryList.state" style="width:160px">
                         <Option v-for="item in positionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 </Select>
                </Col>

                <Col span="5">
                   <Button type="info" ghost>筛选</Button>
                   <split blankWidth="2"></split>
                   <Button type="primary" ghost>重置</Button>
                </Col>
              </Row>
              </Card>
            </Row>
              <height splitHeight="5"></height>
         <Row :gutter="24">
            <Card>
                  <height splitHeight="10"></height>
                <Table :loading="listLoading" border :columns="columns" :data="data1"></Table>
                 <height splitHeight="20"></height>
               <Page :total="100" show-sizer />
            </Card>
        </Row>
  </div>
</template>

<script>
import { formatDates,formatTimeStamp } from '@/utils/formatData'
import split  from '@/components/split/blank'
import height  from '@/components/split/height'


  const statusOptions = [
    { key: '0', display_name: '启用' },
    { key: '1', display_name: '禁用' },
  ]
  const statusOptionsValues = statusOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name
    return acc
  }, {})

   export default {
     filters: {
       handleStatusFilter(type) {
         return statusOptionsValues[type]
       },
      formatDates(date){
         return formatDates(date);
       }
     },
          data () {
              return {
                  positionList: [
                      {
                          value: '',
                          label: '请选择账号状态'
                      },
                      {
                          value: '0',
                          label: '启用'
                      },
                      {
                          value: '1',
                          label: '禁用'
                      }
                  ],
                  queryList:{
                    userId:'',
                    userNumber:'',
                    userName:'',
                    phone:'',
                    state:'',
                    page:1,
                    limit:5,
                    sort:'0',

                  },
                  userList:[],
                  userOne:{},
                  listLoading:false,
                  total:0,
                  columns: [
                      {
                          title: 'Name',
                          key: 'name'
                      },
                      {
                          title: 'Age',
                          key: 'age'
                      },
                      {
                          title: 'Address',
                          key: 'address'
                      }
                  ],
                  data1: [
                      {
                           name: 'John Brown',
                           age: 18,
                           address: 'New York No. 1 Lake Park',
                           date: '2016-10-03'
                      },
                      {
                          name: 'Jim Green',
                          age: 24,
                          address: 'London No. 1 Lake Park',
                          date: '2016-10-01'
                      },
                      {
                          name: 'Joe Black',
                          age: 30,
                          address: 'Sydney No. 1 Lake Park',
                          date: '2016-10-02'
                      },
                      {
                          name: 'Jon Snow',
                          age: 26,
                          address: 'Ottawa No. 2 Lake Park',
                          date: '2016-10-04'
                      }
                  ]
              }
          },
          components: {
            split,height
          },
          methods: {
            init () {

            },
            handleFilter() {
              this.queryList.page = 1
              this.init()
            }
          },
          //页面加载完成后
          mounted() {
            this.init()
          },
           //页面销毁前
          beforeDestroy() {
          }
      }
</script>

<style>

  .header_title{
    height: 100%;
    text-align: left;
    line-height: 30px;
    margin-right:10px;
    float:left;
  }
</style>
