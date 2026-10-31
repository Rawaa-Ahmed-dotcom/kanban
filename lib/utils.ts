import { CiHome } from "react-icons/ci";
import { MdInventory } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LuCircleUser } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import {SalesChartProps , OrderSummaryProps, Column, TopSellingProducts} from "./types";


export const buttonVariants = {
    'primary' : 'bg-(--primary-600) text-white hover:bg-(--primary-700) ',
    'outline' : 'bg-(--bg-card) border border-(--gray-300) text-(--gray-800)'
}

export const sidebarItems = [
    {href : "/" , title : "dashboard" , icon :  CiHome},
    {href : "/inventory" , title : "Inventory" , icon : MdInventory},
    {href : '/reports' , title : "Reports" , icon : HiOutlineDocumentReport},
    {href : '/suppliers' , title : "Suppliers" , icon : LuCircleUser},
    {href : "/orders" , title : "Orders" , icon : BsBoxSeam},
    {href : "/store" , title : "Manage Store" , icon : CiBoxList}
]

export const sidebarItemsBottom = [
    {href : "/settings" , title : "settings" , icon :  IoSettingsOutline},
    {href : "/logout" , title : "log out" , icon : MdLogout},
];

export const salesKpis = [
    {title : "Sales" , icon : "/Sales.png", value : 832 , bg : "bg-(--primary-50)"},
    {title : "Revenue" , icon : "/Revenue.png", value : 18300 , bg : "bg-(--violate)"},
    {title : "Profit" , icon : "/Profit.png", value : 868 , bg : "bg-(--orange)"},
    {title : "Cost" , icon : "/Cost.png", value : 17432 , bg: "bg-(--green)"},

];

export const purchaseKpis = [
    {title : "Purchase" , icon : "/Purchase.png", value : 82 , bg : "bg-(--primary-50)"},
    {title : "Cost" , icon : "/Cost.png", value : 13573 , bg : "bg-(--green)"},
    {title : "Cancel" , icon : "/Cancel.png", value : 5 , bg : "bg-(--violate)"},
    {title : "Return" , icon : "/Profit.png", value : 17432 , bg: "bg-(--orange)"},

];

export const inventoryKpis= [
    {title : "Quantity in Hand" , icon : "/Quantity.png" , value : 868 , bg : "bg-(--orange)"},
    {title : "To be received" , icon : "/On_the_way.png" , value : 200 , bg : "bg-(--violate)"},
];


export const productKpis= [
    {title : "Number of Suppliers" , icon : "/Suppliers.png" , value : 31 , bg : "bg-(--primary-50)"},
    {title : "Number of Categories" , icon : "/Categories.png" , value : 21 , bg : "bg-(--violate)"},
];

export const monthlyData: SalesChartProps = [
  { month: "Jan", sales: 45000, purchase: 32000 },
  { month: "Feb", sales: 38000, purchase: 29000 },
  { month: "Mar", sales: 52000, purchase: 36500 },
  { month: "Apr", sales: 47500, purchase: 34000 },
  { month: "May", sales: 55000, purchase: 41000 },
  { month: "Jun", sales: 53000, purchase: 43500 },
  { month: "Jul", sales: 58000, purchase: 45000 },
  { month: "Aug", sales: 56000, purchase: 47500 },
  { month: "Sep", sales: 59000, purchase: 49000 },
  { month: "Oct", sales: 57500, purchase: 52000 },
  { month: "Nov", sales: 59500, purchase: 54500 },
  { month: "Dec", sales: 60000, purchase: 56000 },
];

export const OrderSummaryData: OrderSummaryProps = [
  { month: "Jan", ordered: 2400, delivered: 2210 },
  { month: "Feb", ordered: 2100, delivered: 1950 },
  { month: "Mar", ordered: 2650, delivered: 2400 },
  { month: "Apr", ordered: 2350, delivered: 2200 },
  { month: "May", ordered: 3000, delivered: 2750 },
  { month: "Jun", ordered: 2800, delivered: 2640 },
  { month: "Jul", ordered: 3200, delivered: 2950 },
  { month: "Aug", ordered: 3100, delivered: 2880 },
  { month: "Sep", ordered: 3450, delivered: 3150 },
  { month: "Oct", ordered: 3300, delivered: 3070 },
  { month: "Nov", ordered: 3700, delivered: 3380 },
  { month: "Dec", ordered: 3950, delivered: 3650 },
];

export const TopSellingStockCols : Column<TopSellingProducts>[] = [
    {header :"Name" , key : "name"},
    {header :"Sold Quantity" , key : "sold_quantity" },
    {header :"Remaining Quantity" , key : "remaining_quantity"},
    {header :"Price" , key : "price"},
]

export const TopSellingStockData = [
    {name : "Surf Excel" , sold_quantity : 30 , remaining_quantity : 12 , price :  100},
    {name : "Rin" , sold_quantity : 21 , remaining_quantity : 15 , price :  207},
    {name : "Parle G" , sold_quantity : 19 , remaining_quantity : 17 , price :  105}
];


export const badgesVariants = {
    "low_stock" : "text-(--warning-600) bg-(--warning-100)",
    "in_stock" : "text-(--success-600) bg-(--success-200)",
    "out_of_stock" : "text-(--error-600) bg-(--error-200)"
};