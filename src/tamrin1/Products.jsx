import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
        const[count,setCount]=useState(0); // 👈 اینجا useState فعال شد
        const navigate=useNavigate();

    const ProductList=[
        {id:1,name:"coffee",price:200000},
        {id:2,name:"tea",price:250000},
        {id:3,name:"cake",price:300000},
        {id:4,name:"candy",price:150000},
    ]
    return (
        <div style={{ padding: "20px", fontFamily: "tahoma"}}>
            <h1>our shop</h1>
            <p>تعدا آیتم های سبد خرید:{count}</p>
            <hr />


            {/* ۲. بخش نمایش لیست محصولات */}
            <div>
                {ProductList.map((product) =>(
                    <div key={product.id}>
                        <div>
                            <h3>{product.name}</h3>
                            <p>price:{product.price.toLocaleString()}</p>
                        </div>

                        <button onClick={() => navigate(`/product/${product.id}`)}>detail</button>


                       {/* ۳. دکمه اضافه کردن به سبد */}
                       <button onClick={()=>setCount(count+1)}> افزودن+</button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;




/*
count: مقدار فعلی (عدد ۰ برای شروع)
setCount: تابعی که مقدار رو عوض میکنه
هر بار دکمه زده بشه → setCount(count + 1) → عدد ۱ واحد زیاد میشه → کامپوننت دوباره رندر میشه → عدد جدید روی صفحه میاد
این یعنی React هوشمنده: هر چیزی که داخل {} بذاری و به state وابسته باشه، خودکار به‌روز میشه.



در مرحله قبل، ما یک آرایه به نام products داشتیم، اما فقط داشتیم آن 
را در حافظه نگه می‌داشتیم.
 حالا می‌خواهیم با استفاده
 از یکی از قدرتمندترین ابزارهای JavaScript یعنی تابع .map()، 
 هر محصول را به یک المان HTML تبدیل کنیم.



*/