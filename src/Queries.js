/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';


export const QUERY_ALL_VENDOR = gql`
query GetAllVendor {
  getAllVendor {
    id
    role
    fName
    lName
    contact
    email
    shopName
    shopContact
    shopEmail
    shopAdress
    shopCity
    shopState
    shopPincode
    gstNo
    shopImage
    userName
    password
    contactVerify
    emailVerify
    createDateTime
    status
    blockStatus
  }
}
`;
export const QUERY_VENDOR_BY_ID = gql`
query Query($vendorId: ID) {
  vendorById(vendorId: $vendorId) {
    id
    role
    fName
    lName
    contact
    email
    shopName
    shopContact
    shopEmail
    shopCode
    shopAdress
    shopCity
    shopState
    shopPincode
    gstNo
    shopImage
    villagerOccupation
    villagerAddress
    villagerVillageName
    villagerDistrict
    villagerState
    villagerPincode
    userName
    password
    contactVerify
    emailVerify
    createDateTime
    status
    blockStatus
  }
}
`;

export const QUERY_COSMETIC =gql`
query GetProductByIdCosmetic($vendorId: ID) {
  getProductByIdCosmetic(vendorId: $vendorId) {
    id
    productName
    productDescription
    productionSellingPrice
    productStockType
    productImages
    cosmeticType
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
    productStockAvailable
  }
}
`
export const QUERY_BAKERY =gql`
query GetProductByIdBakery($vendorId: ID) {
  getProductByIdBakery(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productExpirationType
    productImages
    productWeight
    productWeightType
    bakeryFlavour
    bakeryType
    bakeryVegNonVeg
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
    productExpirationDate
    productExpiration
  }
}
`
export const  QUERY_MEDICAL=gql`
query GetProductByIdMedicine($vendorId: ID) {
  getProductByIdMedicine(vendorId: $vendorId) {
    id
    productName
    productDescription
    productionSellingPrice
    productStockAvailable
    productStockType
    productExpiration
    productExpirationDate
    productExpirationType
    productCategory
    productImages
    medicineBrandName
    medicineManufacture
    medicineTaxNo
    medicineHsnCode
    medicineSku
    medicineTags
    medicineGst
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
  }
}
`
export const QUERY_TOYS=gql`
query GetProductByIdToy($vendorId: ID) {
  getProductByIdToy(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productImages
    toyAgeRequre
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
  }
}
`
export const QUERY_GARMENT=gql`
query Query($vendorId: ID) {
  getProductByIdGarment(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productImages
    garmentType
    garmentSize
    garmentSizeType
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
  }
}
`
export const QUERY_ELECTRONIC=gql`
query GetProductByIdElectronic($vendorId: ID) {
  getProductByIdElectronic(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    electronicType
    menuCategory
    vendorId
    vendorStatus
    status
    productImages
    medicineBrandName
  }
}
`

export const QUERY_CROCKERY=gql`
query GetProductByIdCrockery($vendorId: ID) {
  getProductByIdCrockery(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productWeight
    productWeightType
    productImages
    crockeryType
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
    produteCreatedDateTime
  }
}
`
export const QUERY_GROCERY =gql`
query GetProductByIdGrocery($vendorId: ID) {
  getProductByIdGrocery(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productWeight
    productWeightType
    productExpiration
    productExpirationDate
    productExpirationType
    productImages
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
  }
}
`
export const QUERY_PRODUCT_BY_ID =gql`
query GetProductById($productId: ID) {
  getProductById(productId: $productId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productWeight
    productWeightType
    productExpiration
    productExpirationDate
    productExpirationType
    productCategory
    productImages
    medicineBrandName
    medicineManufacture
    medicineTaxNo
    medicineHsnCode
    medicineSku
    medicineTags
    medicineGst
    bakeryFlavour
    bakeryType
    bakeryVegNonVeg
    garmentSize
    garmentType
    garmentSizeType
    toyAgeRequre
    crockeryType
    electronicType
    cosmeticType
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
  }
}
`
export const QUERY_GUARD_BY_ID =gql`
query Query($getGaurdByIdId: ID) {
  getGaurdById(id: $getGaurdByIdId) {
    id
    societyId
    societyUniqueId
    societyName
    guardUniqueId
    guardPassword
    firstName
    lastName
    contact
    alternateContact
    gender
    email
    guardImage
    address
    city
    addrpincode
    state
    previousPosition
    previousWorkAddress
    previousWorkUnder
    previousWorkPeriod
    salary
    createdDateTime
    status
  }
}
`
export const QUERY_SERVICE_BY_ID =gql`
query GetAllServiceById($serviceId: ID) {
  getAllServiceById(serviceId: $serviceId) {
    id
    fulName
    expert
    experience
    typeofService
    contact
    address
    productImages
    status
    createDateTime
    serviceId
  }
}
`

export const QUERY_ALL_ORDER =gql`
query GetAllOrderProduct {
  getAllOrderProduct {
    id
    userId
    paymentId
    orderId
    fullName
    contact
    email
    city
    pincode
    fullAddress
    totalPrice
    deliveryBoyId
    createdDateTime
    status
    productDetails {
      productId
      productName
      productPrice
      menuCategory
      totalAmoount
      quantity
      vendorId
    }
  }
}

`

export const QUERY_ORDER_BY_ID=gql`
query GetOrderById($orderId: ID) {
  getOrderById(orderId: $orderId) {
    id
    userId
    paymentId
    orderId
    fullName
    contact
    email
    city
    pincode
    fullAddress
    totalPrice
    deliveryBoyId
    createdDateTime
    status
    productDetails {
      productId
      productName
      productPrice
      menuCategory
      totalAmoount
      quantity
      vendorId
    }
  }
}
`
export const QUERY_ALL_URBAN =gql`
query GetAllVendor {
  getAllVendor {
    id
    role
    fName
    lName
    contact
    email
    shopName
    shopContact
    shopEmail
    shopCode
    shopAdress
    shopCity
    shopState
    shopPincode
    gstNo
    shopImage
    villagerOccupation
    villagerAddress
    villagerVillageName
    villagerDistrict
    villagerState
    villagerPincode
    userName
    password
    contactVerify
    emailVerify
    createDateTime
    status
    blockStatus
  }
}

`
export const QUERY_ALL_DELIVERY_BOY =gql`
query Query {
  getAllDeliveryBoy {
    id
    fName
    lName
    email
    contact
    alternativeContact
    idNo
    idType
    uniqueId
    image
    createDateTime
    emailVerify
    pincode
    city
    state
    address
    district
    contactVerify
    userName
    password
    status
  }
}
`

export const QUERY_DELIVERY_BOY_BY_ID =gql`
query Query($deliveryId: ID) {
  getDeliveryBoyById(deliveryId: $deliveryId) {
    id
    fName
    lName
    email
    contact
    alternativeContact
    idNo
    idType
    uniqueId
    image
    createDateTime
    emailVerify
    pincode
    city
    state
    address
    district
    contactVerify
    userName
    password
    status
  }
}

`
export const QUERY_GET_ALL_PRODUCT_VENDOR_BY_ID = gql`
query GetAllProductVendorById($vendorId: ID) {
  getAllProductVendorById(vendorId: $vendorId) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productWeight
    productWeightType
    productExpiration
    productExpirationDate
    productExpirationType
    productCategory
    productImages
    medicineBrandName
    medicineManufacture
    medicineTaxNo
    medicineHsnCode
    medicineSku
    medicineTags
    medicineGst
    bakeryFlavour
    bakeryType
    bakeryVegNonVeg
    garmentType
    garmentSize
    garmentSizeType
    toyAgeRequre
    crockeryType
    electronicType
    cosmeticType
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
  }
}


`

export const QUERY_PRODUCT_RURAL_BY_ID =gql`
query GetALLRuralById($ruralId: ID) {
  getALLRuralById(ruralId: $ruralId) {
    id
    productName
    productDescription
    categary
    productImages
    villageName
    productionSellingPrice
    district
    state
    sellType
    productStockAvailable
    status
    createDateTime
    ruralId
  }
}



`

export const QUERY_RURAL_PRODUCT =gql`
query GetRuralProductById($productId: ID) {
  getRuralProductById(productId: $productId) {
    id
    productName
    productDescription
    categary
    productImages
    villageName
    productionSellingPrice
    district
    state
    sellType
    productStockAvailable
    status
    createDateTime
    ruralId
  }
}
`





//++++++++++++++++++++++++++++++++++++++++++++++ Mutations +++++++++++++++++++++++++++++++++++++++++++++++++++++

export const MUTATION_SIGNUP_VENDOR = gql`
mutation Mutation($vendorInput: vendorInput) {
  vendorRegister(VendorInput: $vendorInput) {
    id
  }
}
`;
export const MUTATION_SIGNUP_SERVICE_PROVIDER = gql`
mutation Mutation($serviceProviderInput: serviceProviderInput) {
  registerServiceProvider(ServiceProviderInput: $serviceProviderInput) {
    id
  }
}
`;

export const MUTATION_VENDOR_LOGIN = gql`
mutation VendorLogin($contact: String, $password: String) {
  vendorLogin(contact: $contact, password: $password) {
    vendorToken
    vendorId
  }
}
`;

export const MUTATION_SERVICE_PROVIDER_LOGIN = gql`
mutation LoginServiceProvider($contact: String, $password: String) {
  loginServiceProvider(contact: $contact, password: $password) {
    serviceProvidertoken
    serviceProviderId
  }
}
`;

export const MUTATION_ADD_PRODUCT = gql`
mutation Mutation($productInput: productInput) {
  createProduct(ProductInput: $productInput) {
    id
  }
}
`;

export const MUTATION_DELETE_PRODUCT =gql`
mutation Mutation($userId: ID) {
  deleteProduct(userId: $userId) {
    id
  }
}
`
export const MUTATION_EDIT_PRODUCT =gql`
mutation EditProduct($editProductInput: editProductInput) {
  editProduct(EditProductInput: $editProductInput) {
    id
    productName
    productDescription
    productBuyingPrice
    productionSellingPrice
    productStockAvailable
    productStockType
    productWeight
    productWeightType
    productExpiration
    productExpirationDate
    productExpirationType
    productCategory
    productImages
    medicineBrandName
    medicineManufacture
    medicineTaxNo
    medicineHsnCode
    medicineSku
    medicineTags
    medicineGst
    bakeryFlavour
    bakeryType
    bakeryVegNonVeg
    garmentType
    toyAgeRequre
    crockeryType
    electronicType
    cosmeticType
    produteCreatedDateTime
    productUploader
    menuCategory
    vendorId
    vendorStatus
    status
    garmentSizeType
    garmentSize
  }
}
`
export const MUTATION_ADD_DOCTOR_SERVICE =gql`
mutation Mutation($doctorInput: doctorInput) {
  createDoctor(DoctorInput: $doctorInput) {
    id
    
  }
}

`
export const MUTATION_ADD_SERVICE =gql`
mutation Mutation($serviceInput: serviceInput) {
  createService(ServiceInput: $serviceInput) {
    id
    
  }
}

`

export const MUTATION_LOGIN_DELIVERY_BOY =gql`
mutation LoginDeliveryBoy($userName: String, $password: String) {
  loginDeliveryBoy(userName: $userName, password: $password) {
    deliveryBoyToken
    deliveryBoyId
  }
}
`

export const MUTATION_ADMIN_LOGIN =gql`
mutation AdminLogin($userName: String, $password: String) {
  adminLogin(userName: $userName, password: $password) {
    adminToken
    adminId
  }
}
`

export const MUTATION_ADD_DELIVERY=gql`
mutation Mutation($deliveryBoyInput: deliveryBoyInput) {
  createdeliveryBoy(DeliveryBoyInput: $deliveryBoyInput) {
    id
   

  }
}

`

export const MUTATION_EDIT_DELIVERY_BOY =gql`
mutation Mutation($deliveryEditInput: deliveryEditInput) {
  deliveryBoyEdit(DeliveryEditInput: $deliveryEditInput) {
    id
   
  }
}

`

export const MUTATION_DELETE_DELIVERY_BOY =gql`
mutation DeliveryDelete($deliveryId: ID) {
  deliveryDelete(deliveryId: $deliveryId) {
    id
   
  }
}

`