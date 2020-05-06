import React from 'react';
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartHidden, quantity}) =>{
return(
    <div className='cart-icon' onClick={toggleCartHidden}> 
        <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>
                {quantity}
            </span>
        
    </div>

);

}

const mapStateToProps = (state) => ({
    quantity: selectCartItemsCount(state) 
})

const mapDispatchToProps= dispatch => {
    return{
        toggleCartHidden: ()=>dispatch(toggleCartHidden)
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);