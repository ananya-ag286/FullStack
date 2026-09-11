import Items from './Items'
import "./Items.css"
const ItemStore = () => {
  const itemData = [
    {title:"Novel", Price:"300", image:"https://www.shutterstock.com/image-photo/book-open-pages-close-up-260nw-2561196717.jpg"},
    {title:"Heels", Price:"300", image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzWCxKDjj8WTCOZMRxpOsG0ISXuvkpjrlo86M5k2Mp4SQLuw3NCnU5X0fC8GyQCOK5gNiOfb5xsDHD8UPaw_ht3gYsKzB9f90_KKSG_6iIH70C8PT9NVCV9BM"},
    {title:"Headphones", Price:"300", image:"https://media-ik.croma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png"},
    {title:"Kettle", Price:"300", image:"https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-whistling-kettle-png-image_13323204.png"},
    {title:"Clothes", Price:"300", image:"https://www.aniclothing.in/cdn/shop/files/ANILB13-03-2647374.jpg?v=1781850470&width=1080"},
  ]
  return(
      <div className='itemss'>
          {itemData.map((book,i)=> {
            return <Items key={i} props={book} />;
        })}
      </div>
  )
}
export default ItemStore;