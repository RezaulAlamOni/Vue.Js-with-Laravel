import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

// import CompaniesIndex from '../components/companies/CompaniesIndex.vue';
// import CompaniesCreate from '../components/companies/CompaniesCreate.vue';
// import CompaniesEdit from '../components/companies/CompaniesEdit.vue';


// import EmployeeIndex from '../components/employee/EmployeeIndex'
// import EmployeeCreate from '../components/employee/EmployeeCreate'
// import EmployeeEdit from '../components/employee/EmployeeEdit'


import one from '../components/ExampleComponent'

export default new Router({
    mode: 'history',
    routes: [

        { path: '/', component: one, name: 'one' },
        // { path: '/', component: CompaniesIndex, name: 'companiesIndex' },

        // { path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany' },
        // { path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany' },

        // {path: '/admin/employee', component: EmployeeIndex, name: 'employeeIndex'},
        // {path: '/admin/employee/create', component: EmployeeCreate, name: 'createEmployee'},
        // {path: '/admin/employee/edit/:id', component: EmployeeEdit, name: 'editEmployee'},
    ]
});

