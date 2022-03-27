<style>
@import "./header.css";
</style>
<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link
          class="nav-link"
          data-widget="pushmenu"
          to="#"
          role="button"
          ><i class="fas fa-bars"></i
        ></router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link to="#" class="nav-link">Contact</router-link>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input
          class="form-control form-control-navbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <router-link class="nav-link" data-toggle="dropdown" to="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge"></span>
        </router-link>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <router-link to="#" class="dropdown-item">
            <!-- Message Start -->
            <!-- <div class="media">
              <img
                src="/static/dist/img/user1-128x128.jpg"
                alt="User Avatar"
                class="img-size-50 mr-3 img-circle"
              />
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"
                    ><i class="fas fa-star"></i
                  ></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted">
                  <i class="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div> -->
            <!-- Message End -->
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item">
            <!-- Message Start -->
            <!-- <div class="media">
              <img
                src="/static/dist/img/user8-128x128.jpg"
                alt="User Avatar"
                class="img-size-50 img-circle mr-3"
              />
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"
                    ><i class="fas fa-star"></i
                  ></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted">
                  <i class="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div> -->
            <!-- Message End -->
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item">
            <!-- Message Start -->
            <!-- <div class="media">
              <img
                src="/static/dist/img/user3-128x128.jpg"
                alt="User Avatar"
                class="img-size-50 img-circle mr-3"
              />
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"
                    ><i class="fas fa-star"></i
                  ></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted">
                  <i class="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div> -->
            <!-- Message End -->
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item dropdown-footer"
            >See All Messages</router-link
          >
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <router-link class="nav-link" data-toggle="dropdown" to="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </router-link>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item dropdown-footer"
            >See All Notifications</router-link
          >
        </div>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          data-widget="fullscreen"
          to="#"
          role="button"
        >
          <i class="fas fa-expand-arrows-alt"></i>
        </router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link class="nav-link" data-toggle="dropdown" to="#">
          <i
            ><div class="media">
              <img
                :src="user_image"
                alt="User Avatar"
                class="img-size-50 mr-3 img-circle"
              /></div
          ></i>
          <!-- <i class="far fa-user fa-2x"></i> -->
          <!-- <span class="badge badge-danger navbar-badge">3</span> -->
        </router-link>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <router-link to="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <div class="media-body">
                <h3 class="dropdown-item-title text-center">
                  <router-link to="/profile" class="text-center"
                    >Profile</router-link
                  >
                </h3>
              </div>
            </div>
            <!-- Message End -->
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <div class="media-body">
                <h3 class="dropdown-item-title text-center">
                  <p @click.prevent="logout" class="text-center">Logout</p>
                </h3>
              </div>
            </div>
            <!-- Message End -->
          </router-link>
          <div class="dropdown-divider"></div>

          <router-link to="#" class="dropdown-item dropdown-footer"
            >See All Messages</router-link
          >
        </div>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          to="#"
          role="button"
        >
          <i class="fas fa-th-large"></i>
        </router-link>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4 addScroll">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="/static/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            :src="user_image"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <router-link to="#" class="d-block">
            {{ user.full_name ? user.full_name : "" }}
          </router-link>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <!-- <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <router-link to="/" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <!-- <i class="right fas fa-angle-left"></i> -->
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-invoices" class="nav-link">
              <i class="nav-icon fas fa-file-invoice"></i>
              <p>
                My Invoices
                <!-- <span class="right badge badge-danger">New</span> -->
              </p>
            </router-link>
          </li>
          <!-- accounts -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Accounts
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/chart-of-accounts" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Chart of Accounts</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/salesInvoice" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales Invoice</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/PurchaseInvoice" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Invoice</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/journalEntry" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Journal Entry</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/paymentEntry" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Payment Entry</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/accountsReceivable" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Accounts Receivable</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/generalLedger" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General Ledger</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/trialBalance" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Trial Balance</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/account-dashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- assets -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Assets
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/asset" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Asset</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/assetCategory" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Asset Category</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/fixedAssetRegister" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Asset Register</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/assetDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- build -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Build
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/doctype" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Doctype</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/workspace" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Workspace</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/report" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Report</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- buying -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Buying
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/item" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Item</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/materialRequest" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Material Request</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/purchaseOrder" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Order</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/purchaseAnalytics" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Analytics</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/purchaseOrderAnalysis" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Order Analysis</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/buyingDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- CRM -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                CRM
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/lead" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Lead</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/opportunity" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Opportunity</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/customer" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Customer</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/salesAnalytics" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales Analytics</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/crmDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- HR -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                HR
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/employee" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Employee</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/leaveApplication" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Leave Application</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/attendance" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Attendance</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/jobApplicant" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Job Applicant</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/monthlyAttendanceSheet" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Monthly Attendance Sheet</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/hrDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Loans -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Loans
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/loanApplication" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Loan Application</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/loan" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Loan</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/loanDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- payroll -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Payroll
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/salaryStructure" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Salary Structure</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/payrollEntry" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Payroll Entry</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/salarySlip" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Salary Slip</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/IncomeTaxSlab" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Income Tax Slab</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/salaryRegister" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Salary Register</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/payrollDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- projects -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Projects
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/task" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Task</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/project" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/timeSheet" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>TimeSheet</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projectBillingSummary" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Billing Summary</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projectDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- quality -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Quality
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/qualityGoal" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Quality Goal</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/qualityProcedure" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Quality Procedure</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/qualityInspection" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Quality Inspection</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/qualityReview" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Quality Review</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/qualityAction" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Quality Action</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/nonConformance" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Non Conformance</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Selling -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Selling
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/sellingItem" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Item</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sellingSalesOrder" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales Order</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sellingSalesAnalytics" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales Analytics</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/salesOrderAnalysis" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales Order Analysis</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sellingDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- stock -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Stock
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/stockItem" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Item</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/stockMaterialRequest" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Material Request</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/stockEntry" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Stock Entry</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/purchaseReceipt" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Receipt</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/deliveryNote" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Delivery Note</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/stockLedger" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Stock Ledger</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/stockBalance" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Stock Balance</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/stockDashboard" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Support -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Support
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/issue" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Issue</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/maintenanceVisit" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Maintenance Visit</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/serviceLevelAgreement" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Service Level Agreement</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Website -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Website
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/blogPost" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Blog Post</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blogger" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Blogger</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/webPage" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Web Page</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/webForm" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Web Form</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/websiteSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Website Settings</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Settings -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Settings
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/systemSetting" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>System Setting</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/printSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Print Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/websiteSetting" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Website Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projectSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/namingSeries" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Naming Series</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/accountsSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Accounts Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/stockSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Stock Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/hrSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>HR Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sellingSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Selling Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/buyingSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Buying Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/supportSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Support Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/eCommerceSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>E Commerce Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="portalSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Portal Settings</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/domainSettings" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Domain Settings</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Utilities -->
          <li class="nav-item">
            <router-link to="/utilities" class="nav-link">
              <!-- <i class="nav-icon fas fa-file-invoice"></i> -->
              <p>
                Utilities
                <!-- <span class="right badge badge-danger">New</span> -->
              </p>
            </router-link>
          </li>
          <!-- Customization -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
                Customization
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/customizeForm" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Customize Form</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/customRole" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Custom Role</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/clientScript" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Client Script</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/serverScript" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Server Script</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- tools -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
                Tools
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/toDo" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ToDo</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/note" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Note</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/file" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>File</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/assignmentRule" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Assignment Rule</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/autoRepeat" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Auto Repeat</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Users -->
          <li class="nav-item">
            <router-link to="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Users
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/user" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>User</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/role" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Role</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/permissionManager" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Permission Manager</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/usersProfile" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Users Profile</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/UsersType" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Users Type</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- integration -->
          <li class="nav-item">
            <router-link to="/integration" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>Integration</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        full_name: "",
      },
      user_image: "/static/dist/img/user2-160x160.jpg",
    };
  },
  methods: {
    logout(e) {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          // logout
          this.$session.clear();
          localStorage.clear();
          Swal.fire("Logged Out!", "You have been logged out.", "success");
          setTimeout(function () {
            window.location.href = "/login";
          }, 2000);
        }
      });
    },
  },
  mounted() {
    // if(this.)
    if (!["/login", "/register", "/signup"].includes(this.$route.path)) {
      this.user = this.$sessionUserData();
    }
    // console.log(this.user.full_name)
  },
  computed: {
    // profileImage: {
    //
    // }
  },
  watch: {
    "user.user_image": {
      handler(user_image) {
        // alert(user_image);
        this.user_image = this.$remoteUrl + user_image;
      },
      deep: true,
    },
  },
};
</script>