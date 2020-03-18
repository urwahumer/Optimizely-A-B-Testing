// //   return <div>{allDataArray}</div>;
// // };
// import React, { useContext, useState } from "react";
// import { Cart_context } from "../../Pages/CartContext";

// import "../../Style/Cart_Checkout.scss";
// const Cart_product_list = props => {
//   const [CartItem, setCartItem] = useContext(Cart_context);

//   const itemsDelete = () => {};

//   const allDataArray = CartItem.map((Items, index) => {
//     return (
//       <tr>
//         <td data-th="Product">
//           <div className="row">
//             <div className="col-sm-2 hidden-xs item">
//               <img src={Items.imageUrl} alt="..." className="img-cart" />
//             </div>
//             <div className="col-sm-10">
//               <h4 className="nomargin">{Items.name}</h4>
//               <p>{Items.content}</p>
//             </div>
//           </div>
//         </td>
//         <td data-th="Price">${Items.price}</td>
//         <td data-th="Quantity">
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             min="1"
//             value={props.quantity}
//             className="form-control text-center"
//             value="1"
//             onChange={props.onChange}
//           />
//         </td>
//         <td data-th="Subtotal" className="text-center">
//           {Items.price}
//         </td>
//         <td className="actions" data-th="">
//           <button className="btn btn-danger btn-sm" onClick={itemsDelete}>
//             <i className="fa fa-trash"></i>
//           </button>
//         </td>
//       </tr>
//     );
//   });
//   return <div>{allDataArray}</div>;
// };
// export default Cart_product_list;
