import heart from "../Images/heart.png"
import shopping_bag from "../Images/shopping-bag.png"
export const Navbar = () => { 
    return(
        <div class="nav">
            <div class="nav-main-logo">
               <img  src="" width="40px" />
            </div>
            <div class="nav-heading">
                <p>WEAR CLASSY</p>
            </div>
            <div class="nav-logos">
               <div><img src="https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/profileicon.jpg"  alt="login"/></div>
               <div> <img src={shopping_bag}  alt="cart"/></div>
               <div><img src={heart}  alt="wishlist"/>
               </div>
               <div> <img src="https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/searchicon.jpg"  alt="search"/></div>
                
               
                
                
            </div>
        </div>
    )
}