import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { decrAction,incrAction } from '../Redux/Product/product.action'
const Product = () => {
    // let pro = {
    //     name : "iphone 8",
    //     price : 100000,
    //     qty : 1,
    // }
    let dispatch = useDispatch()
    let product = useSelector((state)=>{
        return state
    })
    let decrHandler = () =>{ dispatch(decrAction() )}
    let incrHandler = () =>{ dispatch(incrAction() )}
  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col">
                <table className='table table-hover'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.p_name}</td>
                            <td>{product.price * product.qty}</td>
                            <td><i className="fa fa-minus-circle" aria-hidden="true" onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler} aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Product