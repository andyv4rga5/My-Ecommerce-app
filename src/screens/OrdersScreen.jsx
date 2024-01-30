import { FlatList, Modal, StyleSheet, View, Pressable, Text } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { colors } from '../global/colors'

const OrdersScreen = () => {

  const localId = useSelector(state => state.authReducer.localId)
  const { data, isLoading } = useGetOrdersQuery(localId)
  const [orderData, setOrderData] = useState([])
  const [orderIdSelected, setOrderIdSelected] = useState()
  const [orderSelected, setOrderSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (data) {
      const orderData = Object.values(data)
      setOrderData(orderData)
    }
  }, [data, isLoading])

  useEffect(() => {
    const orderSelected = orderData.find(order => order.orderId === orderIdSelected)
    setOrderSelected(orderSelected)
  }, [orderIdSelected, orderData])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} setOrderId={setOrderIdSelected} setModalVisible={setModalVisible} />
    )
  }

  return (
    <>
      <FlatList
        data={orderData}
        renderItem={renderOrderItem}
      />
      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Order: {orderSelected?.orderId}</Text>
            <Text style={styles.modalText}>Item: {orderSelected?.cartItems[0]?.title}</Text> 
            <Text style={styles.modalText}>Brand: {orderSelected?.cartItems[0]?.brand}</Text>
            <Text style={styles.modalText}>Category: {orderSelected?.cartItems[0]?.category}</Text>
            <Text style={styles.modalText}>Total: ${orderSelected?.total}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default OrdersScreen
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 17,
  },
});