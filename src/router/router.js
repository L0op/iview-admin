import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: resolve => { require(['@/views/system/component/order-info.vue'], resolve); } } // 用于展示动态路由
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '系统管理',
        component: Main,
        children: [
            { path: 'access-management', title: '权限管理', name: 'access-management',icon:'key', component: resolve => { require(['@/views/system/access-management.vue'], resolve); } },
            { path: 'user-management', title: '用户管理', name: 'user-management',icon:'person', access: 0, component: resolve => { require(['@/views/system/user-management.vue'], resolve); } },
            { path: 'dep-management', title: '部门管理', name: 'dep-management',icon:'ios-grid-view', component: resolve => { require(['@/views/system/dep-management.vue'], resolve); } },
            { path: 'role-management', title: '角色管理', name: 'role-management',icon:'person-stalker', component: resolve => { require(['@/views/system/role-management.vue'], resolve); } }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter
];
