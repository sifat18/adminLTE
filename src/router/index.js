import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '@/views/authentication/Login.vue'
import Profile from '@/views/Profile.vue'
import Invoice from '@/views/transactions/Invoice.vue'
import InvoiceDetail from '@/views/transactions/InvoiceDetail.vue'
import AccountsReceivable from '@/views/Accounts/AccountsReceivable.vue'
import Dashboard from '@/views/Accounts/Dashboard.vue'
import GeneralLedger from '@/views/Accounts/GeneralLedger.vue'
import JournalEntry from '@/views/Accounts/JournalEntry.vue'
import PaymentEntry from '@/views/Accounts/PaymentEntry.vue'
import PurchaseInvoice from '@/views/Accounts/PurchaseInvoice.vue'
import SalesInvoice from '@/views/Accounts/SalesInvoice.vue'
import TrialBalance from '@/views/Accounts/TrialBalance.vue'
import ChartAccount from '@/views/Accounts/ChartAccount.vue'
import Utilities from '@/views/Utilities.vue'
import Integration from '@/views/Integration.vue'

// asset
import AssetDashboard from '@/views/Assets/AssetDashboard.vue'
import Asset from '@/views/Assets/Asset.vue'
import AssetCategory from '@/views/Assets/AssetCategory.vue'
import FixedAssetRegister from '@/views/Assets/FixedAssetRegister.vue'
// build
import Doctype from '@/views/Build/Doctype.vue'
import Workspace from '@/views/Build/Workspace.vue'
import Report from '@/views/Build/Report.vue'
// buying
import BuyingDashboard from '@/views/Buying/BuyingDashboard.vue'
import Item from '@/views/Buying/Item.vue'
import MaterialRequest from '@/views/Buying/MaterialRequest.vue'
import PurchaseAnalytics from '@/views/Buying/PurchaseAnalytics.vue'
import PurchaseOrder from '@/views/Buying/PurchaseOrder.vue'
import PurchaseOrderAnalysis from '@/views/Buying/PurchaseOrderAnalysis.vue'
// crm
import CRMDashboard from '@/views/crm/CRMDashboard.vue'
import Customer from '@/views/crm/Customer.vue'
import Lead from '@/views/crm/Lead.vue'
import Opportunity from '@/views/crm/Opportunity.vue'
import SalesAnalytics from '@/views/crm/SalesAnalytics.vue'
// hr
import HRDashboard from '@/views/hr/HRDashboard.vue'
import Attendance from '@/views/hr/Attendance.vue'
import Employee from '@/views/hr/Employee.vue'
import JobApplicant from '@/views/hr/JobApplicant.vue'
import LeaveApplication from '@/views/hr/LeaveApplication.vue'
import MonthlyAttendanceSheet from '@/views/hr/MonthlyAttendanceSheet.vue'
// loan
import LoanDashboard from '@/views/loan/LoanDashboard.vue'
import Loan from '@/views/loan/Loan.vue'
import LoanApplication from '@/views/loan/LoanApplication.vue'
// payroll
import IncomeTaxSlab from '@/views/payroll/IncomeTaxSlab.vue'
import PayrollDashboard from '@/views/payroll/PayrollDashboard.vue'
import PayrollEntry from '@/views/payroll/PayrollEntry.vue'
import SalaryRegister from '@/views/payroll/SalaryRegister.vue'
import SalarySlip from '@/views/payroll/SalarySlip.vue'
import SalaryStructure from '@/views/payroll/SalaryStructure.vue'
// project
import ProjectDashboard from '@/views/project/ProjectDashboard.vue'
import Project from '@/views/project/Project.vue'
import ProjectBillingSummary from '@/views/project/ProjectBillingSummary.vue'
import Task from '@/views/project/Task.vue'
import TimeSheet from '@/views/project/TimeSheet.vue'
// quality
import NonConformance from '@/views/quality/NonConformance.vue'
import QualityAction from '@/views/quality/QualityAction.vue'
import QualityGoal from '@/views/quality/QualityGoal.vue'
import QualityInspection from '@/views/quality/QualityInspection.vue'
import QualityProcedure from '@/views/quality/QualityProcedure.vue'
import QualityReview from '@/views/quality/QualityReview.vue'
// selling
import SalesOrderAnalysis from '@/views/selling/SalesOrderAnalysis.vue'
import SellingDashboard from '@/views/selling/SellingDashboard.vue'
import SellingItem from '@/views/selling/SellingItem.vue'
import SellingSalesAnalytics from '@/views/selling/SellingSalesAnalytics.vue'
import SellingSalesOrder from '@/views/selling/SellingSalesOrder.vue'
// stock
import StockDashboard from '@/views/stock/StockDashboard.vue'
import DeliveryNote from '@/views/stock/DeliveryNote.vue'
import PurchaseReceipt from '@/views/stock/PurchaseReceipt.vue'
import StockBalance from '@/views/stock/StockBalance.vue'
import StockEntry from '@/views/stock/StockEntry.vue'
import StockItem from '@/views/stock/StockItem.vue'
import StockLedger from '@/views/stock/StockLedger.vue'
import StockMaterialRequest from '@/views/stock/StockMaterialRequest.vue'
// support
import Issue from '@/views/support/Issue.vue'
import MaintenanceVisit from '@/views/support/MaintenanceVisit.vue'
import ServiceLevelAgreement from '@/views/support/ServiceLevelAgreement.vue'
// website
import Blogger from '@/views/website/Blogger.vue'
import BlogPost from '@/views/website/BlogPost.vue'
import WebForm from '@/views/website/WebForm.vue'
import WebPage from '@/views/website/WebPage.vue'
import WebsiteSetting from '@/views/website/WebsiteSetting.vue'
// setting
import BuyingSetting from '@/views/setting/BuyingSetting.vue'
import DomainSettings from '@/views/setting/DomainSettings.vue'
import EcommerceSetting from '@/views/setting/EcommerceSetting.vue'
import HRSetting from '@/views/setting/HRSetting.vue'
import NamingSeries from '@/views/setting/NamingSeries.vue'
import PortalSetting from '@/views/setting/PortalSetting.vue'
import PrintSetting from '@/views/setting/PrintSetting.vue'
import ProjectSetting from '@/views/setting/ProjectSetting.vue'
import SellingSetting from '@/views/setting/SellingSetting.vue'
import StockSetting from '@/views/setting/StockSetting.vue'
import SupportSetting from '@/views/setting/SupportSetting.vue'
import SystemSetting from '@/views/setting/SystemSetting.vue'
import WebsiteSettings from '@/views/setting/WebsiteSettings.vue'
import AccountSettings from '@/views/setting/AccountSettings.vue'
// customization
import ClientScript from '@/views/customization/ClientScript.vue'
import CustomForm from '@/views/customization/CustomForm.vue'
import CustomRole from '@/views/customization/CustomRole.vue'
import ServerScript from '@/views/customization/ServerScript.vue'
// tools
import AssignmentRule from '@/views/tools/AssignmentRule.vue'
import File from '@/views/tools/File.vue'
import AutoRepeat from '@/views/tools/AutoRepeat.vue'
import Note from '@/views/tools/Note.vue'
import ToDo from '@/views/tools/ToDo.vue'
// user
import PermissionManager from '@/views/user/PermissionManager.vue'
import Role from '@/views/user/Role.vue'
import User from '@/views/user/User.vue'
import UsersProfile from '@/views/user/UsersProfile.vue'
import UsersType from '@/views/user/UsersType.vue'
const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true }, },
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'Login', component: Login },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/my-invoices', name: 'Invoice', component: Invoice },
  { path: '/my-invoices/:name', name: 'InvoiceDetail', component: InvoiceDetail },
  // accounts route
  { path: '/trialBalance', name: 'TrialBalance', component: TrialBalance },
  { path: '/accountsReceivable', name: 'AccountsReceivable', component: AccountsReceivable },
  { path: '/account-dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/generalLedger', name: 'GeneralLedger', component: GeneralLedger },
  { path: '/journalEntry', name: 'JournalEntry', component: JournalEntry },
  { path: '/paymentEntry', name: 'PaymentEntry', component: PaymentEntry },
  { path: '/purchaseInvoice', name: 'PurchaseInvoice', component: PurchaseInvoice },
  { path: '/SalesInvoice', name: 'SalesInvoice', component: SalesInvoice },
  { path: '/chart-of-accounts', name: 'ChartAccount', component: ChartAccount },
  // Asset
  { path: '/asset', name: 'Asset', component: Asset },
  { path: '/assetCategory', name: 'AssetCategory', component: AssetCategory },
  { path: '/fixedAssetRegister', name: 'FixedAssetRegister', component: FixedAssetRegister },
  { path: '/assetDashboard', name: 'AssetDashboard', component: AssetDashboard },
  // build
  { path: '/doctype', name: 'Doctype', component: Doctype },
  { path: '/report', name: 'Report', component: Report },
  { path: '/workspace', name: 'Workspace', component: Workspace },
  // buying
  { path: '/buyingDashboard', name: 'BuyingDashboard', component: BuyingDashboard },
  { path: '/item', name: 'Item', component: Item },
  { path: '/materialRequest', name: 'MaterialRequest', component: MaterialRequest },
  { path: '/purchaseAnalytics', name: 'PurchaseAnalytics', component: PurchaseAnalytics },
  { path: '/purchaseOrder', name: 'PurchaseOrder', component: PurchaseOrder },
  { path: '/purchaseOrderAnalysis', name: 'PurchaseOrderAnalysis', component: PurchaseOrderAnalysis },
  // crm
  { path: '/crmDashboard', name: 'CRMDashboard', component: CRMDashboard },
  { path: '/customer', name: 'Customer', component: Customer },
  { path: '/lead', name: 'Lead', component: Lead },
  { path: '/opportunity', name: 'Opportunity', component: Opportunity },
  { path: '/salesAnalytics', name: 'SalesAnalytics', component: SalesAnalytics },
  // hr
  { path: '/hrDashboard', name: 'HRDashboard', component: HRDashboard },
  { path: '/attendance', name: 'Attendance', component: Attendance },
  { path: '/employee', name: 'Employee', component: Employee },
  { path: '/jobApplicant', name: 'JobApplicant', component: JobApplicant },
  { path: '/leaveApplication', name: 'LeaveApplication', component: LeaveApplication },
  { path: '/monthlyAttendanceSheet', name: 'MonthlyAttendanceSheet', component: MonthlyAttendanceSheet },
  // loan
  { path: '/loanDashboard', name: 'LoanDashboard', component: LoanDashboard },
  { path: '/loan', name: 'Loan', component: Loan },
  { path: '/loanApplication', name: 'LoanApplication', component: LoanApplication },
  // payroll
  { path: '/incomeTaxSlab', name: 'IncomeTaxSlab', component: IncomeTaxSlab },
  { path: '/payrollDashboard', name: 'PayrollDashboard', component: PayrollDashboard },
  { path: '/payrollEntry', name: 'PayrollEntry', component: PayrollEntry },
  { path: '/salaryRegister', name: 'SalaryRegister', component: SalaryRegister },
  { path: '/salarySlip', name: 'SalarySlip', component: SalarySlip },
  { path: '/salaryStructure', name: 'SalaryStructure', component: SalaryStructure },
  // project
  { path: '/projectDashboard', name: 'ProjectDashboard', component: ProjectDashboard },
  { path: '/project', name: 'Project', component: Project },
  { path: '/projectBillingSummary', name: 'ProjectBillingSummary', component: ProjectBillingSummary },
  { path: '/task', name: 'Task', component: Task },
  { path: '/timeSheet', name: 'TimeSheet', component: TimeSheet },
  // quality
  { path: '/nonConformance', name: 'NonConformance', component: NonConformance },
  { path: '/qualityAction', name: 'QualityAction', component: QualityAction },
  { path: '/qualityGoal', name: 'QualityGoal', component: QualityGoal },
  { path: '/qualityInspection', name: 'QualityInspection', component: QualityInspection },
  { path: '/qualityProcedure', name: 'QualityProcedure', component: QualityProcedure },
  { path: '/qualityReview', name: 'QualityReview', component: QualityReview },
  // selling
  { path: '/salesOrderAnalysis', name: 'SalesOrderAnalysis', component: SalesOrderAnalysis },
  { path: '/sellingDashboard', name: 'SellingDashboard', component: SellingDashboard },
  { path: '/sellingItem', name: 'SellingItem', component: SellingItem },
  { path: '/sellingSalesAnalytics', name: 'SellingSalesAnalytics', component: SellingSalesAnalytics },
  { path: '/sellingSalesOrder', name: 'SellingSalesOrder', component: SellingSalesOrder },
  // stock
  { path: '/stockDashboard', name: 'StockDashboard', component: StockDashboard },
  { path: '/deliveryNote', name: 'DeliveryNote', component: DeliveryNote },
  { path: '/purchaseReceipt', name: 'PurchaseReceipt', component: PurchaseReceipt },
  { path: '/stockEntry', name: 'StockEntry', component: StockEntry },
  { path: '/stockBalance', name: 'StockBalance', component: StockBalance },
  { path: '/stockItem', name: 'StockItem', component: StockItem },
  { path: '/stockLedger', name: 'StockLedger', component: StockLedger },
  { path: '/stockMaterialRequest', name: 'StockMaterialRequest', component: StockMaterialRequest },
  // support
  { path: '/issue', name: 'Issue', component: Issue },
  { path: '/maintenanceVisit', name: 'MaintenanceVisit', component: MaintenanceVisit },
  { path: '/serviceLevelAgreement', name: 'ServiceLevelAgreement', component: ServiceLevelAgreement },
  // website
  { path: '/blogger', name: 'Blogger', component: Blogger },
  { path: '/blogPost', name: 'BlogPost', component: BlogPost },
  { path: '/webForm', name: 'WebForm', component: WebForm },
  { path: '/webPage', name: 'WebPage', component: WebPage },
  { path: '/websiteSettings', name: 'WebsiteSetting', component: WebsiteSetting },
  // setting
  { path: '/buyingSettings', name: 'BuyingSetting', component: BuyingSetting },
  { path: '/domainSettings', name: 'DomainSettings', component: DomainSettings },
  { path: '/ecommerceSettings', name: 'EcommerceSetting', component: EcommerceSetting },
  { path: '/hrSettings', name: 'HRSetting', component: HRSetting },
  { path: '/namingSeries', name: 'NamingSeries', component: NamingSeries },
  { path: '/portalSettings', name: 'PortalSetting', component: PortalSetting },
  { path: '/printSettings', name: 'PrintSetting', component: PrintSetting },
  { path: '/projectSettings', name: 'ProjectSetting', component: ProjectSetting },
  { path: '/sellingSettings', name: 'SellingSetting', component: SellingSetting },
  { path: '/stockSettings', name: 'StockSetting', component: StockSetting },
  { path: '/supportSettings', name: 'SupportSetting', component: SupportSetting },
  { path: '/systemSetting', name: 'SystemSetting', component: SystemSetting },
  { path: '/websiteSetting', name: 'WebsiteSettings', component: WebsiteSettings },
  { path: '/accountsSettings', name: 'AccountSettings', component: AccountSettings },
  // utility
  { path: '/utilities', name: 'Utilities', component: Utilities },
  //customization
  { path: '/clientScript', name: 'ClientScript', component: ClientScript },
  { path: '/customizeForm', name: 'CustomForm', component: CustomForm },
  { path: '/customRole', name: 'CustomRole', component: CustomRole },
  { path: '/ServerScript', name: 'ServerScript', component: ServerScript },
  //tools
  { path: '/assignmentRule', name: 'AssignmentRule', component: AssignmentRule },
  { path: '/autoRepeat', name: 'AutoRepeat', component: AutoRepeat },
  { path: '/file', name: 'File', component: File },
  { path: '/Note', name: 'Note', component: Note },
  { path: '/ToDo', name: 'ToDo', component: ToDo },
  // user
  { path: '/permissionManager', name: 'PermissionManager', component: PermissionManager },
  { path: '/role', name: 'Role', component: Role },
  { path: '/user', name: 'User', component: User },
  { path: '/usersProfile', name: 'UsersProfile', component: UsersProfile },
  { path: '/usersType', name: 'UsersType', component: UsersType },
  { path: '/integration', name: 'Integration', component: Integration },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let getToken = () => {
  try {
    return JSON.parse(localStorage.frappUser).token;
  } catch (e) {
    return null
  }
}

router.beforeEach((to, from, next) => {
  // alert(to.fullPath)
  if (!['/login', '/register'].includes(to.fullPath)) {
    if (!getToken()) {
      next('/login');
    }
  }
  //
  if (to.fullPath === '/login') {
    if (getToken()) {
      next('/');
    }
  }
  next();
});

export default router
