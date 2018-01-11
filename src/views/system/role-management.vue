<style lang="less">
    @import './advanced-router.less';
</style>

<template>
    <div>
        <Row>
            <Col span="24">
                <Card>
                    <p slot="title">
                        <ButtonGroup shape="circle">
                            <Button type="primary" @click="addRole = true">增加角色</Button>
                            <Button type="primary">删除角色</Button>
                            <Button type="primary" @click="modRole = true">修改角色</Button>
                        </ButtonGroup>
                    </p>
                    <Row type="flex" justify="center" align="middle" class="advanced-router">
                        <Table :columns="orderColumns" :data="orderData" style="width: 100%;"></Table>
                    </Row>
                </Card>
            </Col>
        </Row>
         <Row class="margin-top-10" v-show="addRole">
            <Card>
                <Modal width="700" v-model="addRole" title="增加角色">
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="角色名称">
                            <Input v-model="formItem.add_name" placeholder="角色名称"></Input>
                        </FormItem>
                        <FormItem label="录入时间">
                            <Input v-model="formItem.add_date" placeholder="录入时间 "></Input>
                        </FormItem>
                    </Form>
                </Modal>
            </Card>
        </Row>
         <Row class="margin-top-10" v-show="modRole">
            <Card>
                <Modal width="700" v-model="modRole" title="修改角色">
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="角色名称">
                            <Input v-model="formItem.mod_input" placeholder="角色名称"></Input>
                        </FormItem>
                    </Form>
                    <Table :columns="mod_col" :data="mod_data"></Table>
                </Modal>
            </Card>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'mutative-router',
    data () {
        return {
            formItem: {
                add_name:'',
                add_date:'',
                mod_input:''
            },
            addRole: false,
            modRole:false,
            orderColumns: [
                {
                    type: 'selection',
                    title: '序号',
                    width: 60
                },
                {
                    title: '名称',
                    key: 'user_name',
                    align: 'center'
                },
                {
                    title: '录入时间',
                    key: 'luru_time',
                    align: 'center',
                },
                {
                    title: '详情',
                    key: 'show_more',
                    align: 'center',
                    render: (h, params) => {
                        return h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                    let argu = { order_id: params.row.order_id };
                                    this.$router.push({
                                        name: 'order-info',
                                        params: argu
                                    });
                                }
                            }
                        }, '了解详情');
                    }
                }
            ],
            orderData: [
                {
                    order_id: '1000002',
                    user_name: '人资',
                    luru_time:'2018-01-10'
                },
                {
                    order_id: '1000002',
                    user_name: '财务',
                    luru_time:'2018-01-10'
                },
                {
                    order_id: '1000003',
                    user_name: '业务组长',
                    luru_time:'2018-01-10'
                },
                {
                    order_id: '1000004',
                    user_name: '内勤',
                    luru_time:'2018-01-10'
                },
                {
                    order_id: '1000005',
                    user_name: '管家',
                    luru_time:'2018-01-10'
                },
                {
                    order_id: '1000006',
                    user_name: '管理员',
                    luru_time:'2018-01-10'
                }
            ],
             mod_col: [
                {
                    title: '一级',
                    key: 'first_level',
                    align: 'center'
                },
                {
                    title: '二级',
                    key: 'second_level',
                    align: 'center'
                },
                {
                    title: '三级',
                    key: 'third_level',
                    align: 'center'
                },
                {
                    title: '四级',
                    key: 'fourth_level',
                    align: 'center'
                }
            ],
            mod_data: [
                {
                    first_level: '系统管理'
                }
            ],
        };
    },
    computed: {
        avatorImage () {
            return localStorage.avatorImgPath;
        }
    }
};
</script>
