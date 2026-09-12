import {useParams} from "react-router-dom"

const ProductDetails = () => {

    const {id}=useParams();

    const Products =[
    { id: 1, name: "coffee", price: 200000 },
    { id: 2, name: "tea", price: 250000 },
    { id: 3, name: "cake", price: 300000 },
    { id: 4, name: "candy", price: 150000 },
    ];

    const Product=Products.find((p) => p.id === parseInt(id));



    return (
        <div>
        <h1>جزیات محصول</h1>
        <hr />


        {Product ? (
            <div>
                <h2>نام محصول:{Product.name}</h2>
                <p>قیمت:{Product.price.toLocaleString()} tooman</p>
                <p>شناسه محصول:{id}</p>
            </div>
         ) : (
            <h2>محصول پیدا نشد!</h2>
         )}

        <br />
        <button onClick={() => window.history.back()}>بازگشت به لیست</button>
        </div>
    );
};

export default ProductDetails;

/*
۱. const { id } = useParams();:

این خط مثل یک کارآگاه عمل می‌کند. می‌رود آدرس مرورگر را نگاه می‌کند، می‌بیند بعد از /product/ چه عددی آمده و آن را در متغیری به نام id می‌ریزد.

۲. parseInt(id):

این یک نکته بسیار حرفه‌ای است. وقتی آدرس از مرورگر می‌آید، عدد 2 به صورت متن یا همان String است ("2"). اما در لیست محصولات ما، آی‌دی‌ها عدد هستند (2). در جاوااسکریپت "2" === 2 غلط است! پس ما با parseInt آن را به عدد واقعی تبدیل کردیم تا بتوانیم مقایسه کنیم.

۳. productsList.find(...):

این متد در آرایه می‌گردد تا دقیقاً همان محصولی را که ID اش با آدرس یکی است، پیدا کند و در متغیر product قرار دهد.

*/

//------------------------------------------------
//مال فایل اپپ هست اوردمش اینجا
//tamrin 1
/*
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Products from "./tamrin1/Products";
import ProductDetails from "./tamrin1/ProductDetails";


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Products/>} />

            <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        </BrowserRouter>
    );
};

export default App;
*/