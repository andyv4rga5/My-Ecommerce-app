import { FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLoading } from 'expo-font'

const OrdersScreen = () => {

  const localId = useSelector(state => state.authReducer.localId)
  const { data, isLoading } = useGetOrdersQuery(localId)
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    if (data) {
      const orderData = Object.values(data)
      setOrderData(orderData)
    }
  }, [data, isLoading])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} />
    )
  }

  return (
    <FlatList
      data={orderData}
      renderItem={renderOrderItem}
    />
  )
}

export default OrdersScreen