<template>
  <div>
    <!-- 用户/员工信息-->
       <Row :gutter="24">
         <Card>
           <Row shadow>
                <Col span="4">

                  <Input v-model="queryList.userNumber" placeholder="请输入账号" clearable style="width: 160px" />
                </Col>
                  <split blankWidth="5"></split>
                <Col span="3">
                     <!-- <div class = "header_title">状态：</div> -->
                    <Select v-model="queryList.state" style="width:160px">
                         <Option v-for="item in positionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 </Select>
                </Col>
                <Col span="5">
                  <div class="button_post">
                    <Button size="small" type="info" ghost>筛选</Button>
                    <split blankWidth="3"></split>
                    <Button  size="small" type="primary" ghost>重置</Button>

                  </div>

                </Col>
              </Row>
              </Card>
            </Row>
              <height splitHeight="10"></height>
       <Row :gutter="24">
          <Card>

              <height splitHeight="5"></height>
         <!--     <Button size="small" @click="handleSelectAll(true)">全选</Button>
               <split blankWidth="1"></split>
              <Button size="small"  @click="handleSelectAll(false)">取消</Button>
               <split blankWidth="1"></split> -->
              <Button size="small"  @click="handleSelectAll(false)">添加</Button>
               <split blankWidth="1"></split>
              <Button size="small"  @click="handleSelectAll(false)">禁用</Button>
               <split blankWidth="1"></split>
               <Button size="small"  @click="handleSelectAll(false)">启用</Button>
                <split blankWidth="1"></split>
              <Button size="small"  @click="handleSelectAll(false)">删除</Button>
               <split blankWidth="1"></split>
              <Button size="small"  @click="handleSelectAll(false)">导入</Button>
               <split blankWidth="1"></split>
              <Button size="small" :loading="exportLoading" @click="exportExcel">导出</Button>
                <height splitHeight="10"></height>
              <Table :loading="listLoading"  ref="selection" border :columns="columns" :data="data1" >
                <template slot-scope="{ row }" slot="number" >
                    <span>{{ row.number }}</span>
                </template>
                <template slot-scope="{ row }" slot="password" >
                    <span>{{ row.password }}</span>
                </template>
                <template slot-scope="{ row }" slot="state" >
                    <span>{{ row.state | handleStatusFilter  }}</span>
                </template>
                <template slot-scope="{ row }" slot="date" >
                    <span>{{ row.date }}</span>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">密码记录</Button>

                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>

                    <Button type="error" size="small" @click="remove(index)">删除</Button>
                </template>
              </Table>
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
import excel from '@/libs/excel'


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
                    userNumber:'',
                    state:'',
                    page:1,
                    limit:5,
                    sort:'0',

                  },
                  userList:[],
                  userOne:{},
                  listLoading:false,
                  exportLoading:false,
                  total:0,
                  columns: [
                      {
                          type: 'selection',
                          width: 60,
                          align: 'center'
                      },
                      {
                          title: '账号',
                          slot: 'number',
                          align: 'center'
                      },
                      {
                          title: '当前密码',
                          slot: 'password',
                          align: 'center'
                      },
                      {
                          title: '状态',
                          slot: 'state',
                          align: 'center'
                      },
                      {
                          title: '创建日期',
                          slot: 'date',
                          align: 'center'
                      },
                      {
                          title: '操作',
                          slot: 'action',
                          align: 'center'
                      }
                  ],
                  data1: [
                      {
                           number: 'JohnBrown',
                           password: 18,
                           state: '0',
                           date: '2016-10-03 14:21:14'
                      },
                      {
                          number: 'JimGreen',
                          password: 24,
                          state: '1',
                          date: '2016-10-01'
                      },
                      {
                          number: 'JoeBlack',
                          password: 30,
                          state: '0',
                          date: '2016-10-02'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26121244,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '1',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '1',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '1',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26,
                          state: '0',
                          date: '2016-10-04'
                      },
                      {
                          number: 'JonSnow',
                          password: 26121233,
                          state: '0',
                          date: '2016-10-04'
                      },
                  ]
              }
          },
          components: {
            split,height
          },
          methods: {
            handleSelectAll (status) {
              this.$refs.selection.selectAll(status);

            },
            init () {

            },
            handleFilter() {
              this.queryList.page = 1
              this.init()
            },
            //删除
             remove (index) {
                this.$Modal.confirm({
                   title: '警告',
                   content: '<p>确定要删除该账号吗</p>',
                   loading: true,
                   onOk: () => {
                      this.data1.splice(index, 1);
                       setTimeout(() => {
                           this.$Modal.remove();
                       }, 1000);
                   },
                    onCancel: () => {
                   }
               });
                this.data1.splice(index, 1);
            },

            changeState(value){
              if(value == ''|| value == undefined){
                return ""
              }
              if(value == '0'){
                return '启用'
              }
              if(value == '1'){
                return '禁用'
              }

            },
           exportExcel () {
             if (this.data1.length) {
               var data = this.data1
               for(let i in data){
                 data[i].state = this.changeState(data[i].state)
               }

               this.exportLoading = true
               const params = {
                 title: ['账号', '密码', '状态','创建时间'],
                 key: ['number', 'password', 'state','date'],
                 data: data,
                 autoWidth: true,
                 filename: '账号信息'
               }
               excel.export_array_to_excel(params)
               this.exportLoading = false
             } else {
               this.$Message.info('表格数据不能为空！')
             }
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
  .button_post{
    height: 80%;
    margin: 1.5% 3%;
  }
</style>
