import React from 'react'
import styles from './ShoppingCart.module.css'
import { BiCart } from 'react-icons/bi'
import { appContext } from '../AppState'
interface Props {
}

interface State {
  isOpen: boolean // 下拉菜单是否打开
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // 点击 span 时才改变 state
    if((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }
  render() {
    return (
      <appContext.Consumer>
        {
          (value) => {
            return <div className={styles.cartContainer}>
          <button className={styles.button} onClick={this.handleClick}>
          <BiCart />
          <span>购物车 {value.shoppingCart.items.length} (件)</span>
          </button>
          <div className={styles.cartDropDown}
            style = {{
              display: this.state.isOpen ? "block" : "none"
            }}
          >
            <ul>
              {
                value.shoppingCart.items.map(i => <li key={i.id}>{i.name}</li>)
              }
            </ul>
        </div>
      </div>
          }
        }
        
      </appContext.Consumer>
    )
  }
}

export default ShoppingCart
