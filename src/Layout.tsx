import { Link, Outlet, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { Layout, Breadcrumb } from "antd";
import { CopyrightCircleTwoTone } from "@ant-design/icons";

import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";

type AppLayoutProps = {
  header?: boolean;
  footer?: boolean;
}

type AppLayoutComposable = {
  Header: React.FC<Props>;
  Footer: React.FC<Props>;
}

const AppLayout: React.FC<AppLayoutProps> & AppLayoutComposable = ({ header = false, footer = false }) => {
  return (
    <Layout className="min-h-screen">
      {
        header && <Header />
      }

      <Layout.Content className="bg-transparent">
        <Outlet/>
      </Layout.Content>

      {
        footer && <Footer/>
      }
    </Layout>
  )
}


type BreadCrumbItem = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;

const breadcrumbItems: BreadCrumbItem[] = [
  {
    title: 'Contacts',
    path: '/contacts',
    key: 'contacts'
  },
  {
    title: 'Add Contacts',
    key: 'contacts/add'
  },
  {
    title: 'Edit Contacts',
    key: 'contacts/edit'
  }
]

const breadCrumbItemRender = (item: BreadCrumbItem) => {
  const Element = item.path ? Link : 'div';

  return (
    <Element to={item.path ?? ''}>{item.title}</Element>
  )
}

const Header: React.FC<Props> = ({ children, className }) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const filteredBreadcrumbItem = breadcrumbItems.filter(({key}) => pathSnippets.includes(String(key)));

  return (
    <Layout.Header className={twMerge("bg-yellow-100 flex items-center justify-between sticky top-0 z-10", className)}>
      <Breadcrumb className="hidden laptop:block" itemRender={breadCrumbItemRender} items={filteredBreadcrumbItem}/>
      {children}
    </Layout.Header>
  )
}

const Footer: React.FC<Props> = ({children, className}) => {
  return (
    <Layout.Footer className={twMerge("bg-yellow-100 sticky bottom-0", className)}>
      {children ?? <div className="text-slate-600"><CopyrightCircleTwoTone/> Galih Dika Pranata</div>}
    </Layout.Footer>
  )
}

AppLayout.Header = Header;
AppLayout.Footer = Footer;

export default AppLayout;

