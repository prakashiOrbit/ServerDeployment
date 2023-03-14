import AgricultureIcon from '@mui/icons-material/Agriculture';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HailIcon from '@mui/icons-material/Hail';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShopRoundedIcon from '@mui/icons-material/ShopRounded';
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
    text: "Purchase order",
    icon: < ShopRoundedIcon />,
    options: [
      {
        text: "Create PO Template",
        link: "/po",
        icon: < ShoppingBasketIcon />,
      },
      {
        text: "PO Template List",
        link: "/poList",
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
    ],
  },
  {
    text: "Customer Order",
    icon: <HailIcon />,
    options: [
      {
        text: "Create Order",
        link: "/customer",
        icon: <PersonAddAlt1Icon />
      },
      {
        text: "View Order",
        link: "/customerList",
        icon: <ListAltIcon />
      },
    ],
  },
  {
    text: "Transport Order",
    icon: <LocalShippingIcon />,
    options: [
      {
        text: "Create Order",
        link: "/customer",
        icon: < AddIcon />,
        
      },
      {
        text: "View Order",
        link: "/customerList",
        icon: <ListAltIcon />
      },
    ],
  },
];
export const config = {
  host: "localhost",
  port: "9082",
  tenant: "apptest",
  editFarmer:"/FarmerFlow/EditFarmer",
  addfarmer:"/FarmerFlow/CreateFarmer",
  getfarmer:"/FarmerFlow/SearchFarmers",
  getcc:"/MasterDataFlow/SearchCollectionCenter",
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
  editPurchaseOrderTemplate:"/PurchaseOrderTemplateFlow/EditPurchaseOrderTemplate",
  addPurchaseOrderTemplate:"/PurchaseOrderTemplateFlow/CreatePurchaseOrderTemplate",
  getPurchaseOrderTemplate:"/PurchaseOrderTemplateFlow/SearchPurchaseOrderTemplate",

};
