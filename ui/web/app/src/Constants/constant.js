import AgricultureIcon from '@mui/icons-material/Agriculture';
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HailIcon from '@mui/icons-material/Hail';
import GridViewIcon from '@mui/icons-material/GridView';
import ShopRoundedIcon from '@mui/icons-material/ShopRounded';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import HiveIcon from '@mui/icons-material/Hive';
export const sideMenu = [
  {
    text: "Farmer Management",
    icon: < AgricultureIcon />,
    options: [
      {
        text: "Onboard Farmer",
        link: "/farmer",
        icon: < AddIcon />,
      },
      {
        text: "Farmer List",
        link: "/farmerList",
        icon: <ListAltIcon />
      },
    ],
  },
  {
    text: "Master Data",
    icon: <GridViewIcon />,
    options: [
      {
        text: "Product",
        link: "/productList",
        icon: <CategoryIcon />,
      },
      {
        text: "Truck",
        link: "/truckList",
        icon: <LocalShippingIcon />,
      },
      {
        text: "Collection Center",
        link: "/centerList",
        icon: <LocalConvenienceStoreIcon />,
      },
      {
        text: "Warehouse",
        link: "/warehouseList",
        icon: <WarehouseIcon />,
      },
      {
        text: "Category List",
        link: "/category-list",
        icon: < CategoryIcon />,
        
      },
      {
        text: "Item List",
        link: "/product-list",
        icon: < HiveIcon />,
        
      },
    ],
  },
  {
    text: "Customer Order",
    icon: <HailIcon />,
    options: [
      
      {
        text: "Order List",
        link: "/customerList",
        icon: <ListAltIcon />
      },
    ],
  },
  {
    text: "Warehouse",
    icon: <WarehouseIcon />,
    options: [
      {
        text: "Order Status",
        link: "/warehouseOrder",
        icon: < LocationOnSharpIcon />,
        
      },
    ],
  },
];
export const config = {
  host: "localhost",
  port: "9082",
  tenant: "apptest",
  editFarmer:"/AdminFlow/EditFarmer",
  addfarmer:"/AdminFlow/CreateFarmer",
  getfarmer:"/AdminFlow/SearchFarmers",
  getcc:"/MasterDataFlow/SearchCollectionCenter",

  editPO:"/AdminFlow/EditPurchaseOrderTemplate",
  addPO:"/AdminFlow/CreatePurchaseOrderTemplate",
  getPO:"/AdminFlow/SearchPurchaseOrdersTemplate", 

  editCollectionCenter:"/MasterDataFlow/EditCollectionCenter",
  addCollectionCenter:"/MasterDataFlow/CreateCollectionCenter",
  getCollectionCenter:"/MasterDataFlow/SearchCollectionCenter",
  editProduct:"/MasterDataFlow/EditProduct",
  addProduct:"/MasterDataFlow/CreateProduct",
  getProduct:"/MasterDataFlow/SearchProduct",
  editWarehouse:"/MasterDataFlow/EditWarehouse",
  addWarehouse:"/MasterDataFlow/CreateWarehouse",
  getWarehouse:"/MasterDataFlow/SearchWarehouse",
  editTruck:"/MasterDataFlow/EditTruck",
  addTruck:"/MasterDataFlow/CreateTruck",
  getTruck:"/MasterDataFlow/SearchTruck",


  editPurchaseOrderTemplate:"/AdminFlow/EditPurchaseOrdersTemplate",
  addPurchaseOrderTemplate:"/AdminFlow/CreatePurchaseOrderTemplate",
  SearchPurchaseOrdersTable:"/AdminFlow/SearchPurchaseOrdersTable",
  CreatePurchaseOrder:"/AdminFlow/CreatePurchaseOrder",
  SearchPurchaseOrder:"/AdminFlow/SearchPurchaseOrders",
  EditPurchaseOrder :"/AdminFlow/EditPurchaseOrder",
  getPurchaseOrderTemplate:"/AdminFlow/GetPurchaseOrderTemplate",
  searchPurchaseOrderTemplate:"/AdminFlow/SearchPurchaseOrdersTemplate",
  createPurchaseOrderTemplateLineItem:"/AdminFlow/CreatePurchaseOrderTable",
  editPurchaseOrderTemplateLineItem:"/AdminFlow/EditPurchaseOrderTable",
  searchPurchaseOrderTemplateLineItems:"/AdminFlow/SearchPurchaseOrdersTable",

  editCustomer:"/AppFlow/EditCustomerOrder",
  addCustomer:"/AppFlow/CreateCustomerOrder",
  getCustomer:"/AppFlow/SearchCustomerOrder",

  getCustomerview:"/AppFlow/ViewCustomerOrder",

  createItem:"/AppFlow/CreateItem",
  searchItem:"/AppFlow/SearchItem",
  editItem:"/AppFlow/EditItem",
  getCustomerOrder:"/AppFlow/SearchlineItem",
  
  createCategory:"/AppFlow/CreateCategory",
  searchCategory:"/AppFlow/SearchCategory",
  editCategory:"/AppFlow/EditCategory",

};

