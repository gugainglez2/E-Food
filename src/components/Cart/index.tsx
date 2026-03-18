import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import type { RootState } from '../../store'
import { closeCart, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import * as S from './styles'

const Cart = () => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>('cart')
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { data, isLoading }] = usePurchaseMutation()
  const getTotalPrice = () => items.reduce((total, item) => total + item.preco, 0)

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .matches(/^\d{8}$/, 'CEP inválido (deve ter 8 números)')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .matches(/^\d+$/, 'Apenas números')
        .required('O campo é obrigatório'),
      cardName: Yup.string().when('checkoutStep', {
        is: () => checkoutStep === 'payment',
        then: (schema) => schema.required('O campo é obrigatório')
      }),
      cardNumber: Yup.string().when('checkoutStep', {
        is: () => checkoutStep === 'payment',
        then: (schema) => schema
          .matches(/^\d+$/, 'Apenas números')
          .min(13, 'Número inválido')
          .required('O campo é obrigatório')
      }),
      cardCode: Yup.string().when('checkoutStep', {
        is: () => checkoutStep === 'payment',
        then: (schema) => schema
          .matches(/^\d{3,4}$/, 'CVV inválido')
          .required('O campo é obrigatório')
      }),
      expiresMonth: Yup.string().when('checkoutStep', {
        is: () => checkoutStep === 'payment',
        then: (schema) => schema
          .matches(/^(0?[1-9]|1[012])$/, 'Mês inválido (1-12)')
          .required('O campo é obrigatório')
      }),
      expiresYear: Yup.string().when('checkoutStep', {
        is: () => checkoutStep === 'payment',
        then: (schema) => schema
          .matches(/^\d{4}$/, 'Ano inválido')
          .required('O campo é obrigatório')
      })
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((i) => ({ id: i.id, price: i.preco })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      }).then((res) => {
        if ('data' in res) {
          setCheckoutStep('success')
          dispatch(clear())
        }
      })
    }
  })

  const getErrorMessage = (fieldName: keyof typeof form.values) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) return form.errors[fieldName]
    return ''
  }

  const checkDeliveryStep = async () => {
    const errors = await form.validateForm()
    const deliveryFields = ['receiver', 'address', 'city', 'zipCode', 'number']
    const hasErrors = deliveryFields.some((field) => !!errors[field as keyof typeof errors])

    if (!hasErrors) {
      setCheckoutStep('payment')
    } else {
      deliveryFields.forEach((field) => form.setFieldTouched(field, true))
    }
  }

  if (!isOpen) return null

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.CartContainer onClick={(e) => e.stopPropagation()}>
        {checkoutStep === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </div>
                  <button onClick={() => dispatch(remove(item.id))} />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalContainer>
              <p>Valor total</p>
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </S.TotalContainer>
            <S.ButtonCheckout disabled={items.length === 0} onClick={() => setCheckoutStep('delivery')}>
              Continuar com a entrega
            </S.ButtonCheckout>
          </>
        )}

        {checkoutStep === 'delivery' && (
          <S.FormContainer>
            <h3>Entrega</h3>
            <label htmlFor="receiver">Quem irá receber</label>
            <input id="receiver" type="text" {...form.getFieldProps('receiver')} className={getErrorMessage('receiver') ? 'error' : ''} />
            <small>{getErrorMessage('receiver')}</small>

            <label htmlFor="address">Endereço</label>
            <input id="address" type="text" {...form.getFieldProps('address')} className={getErrorMessage('address') ? 'error' : ''} />
            <small>{getErrorMessage('address')}</small>

            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" {...form.getFieldProps('city')} className={getErrorMessage('city') ? 'error' : ''} />
            <small>{getErrorMessage('city')}</small>

            <div style={{ display: 'flex', gap: '8px' }}>
              <div>
                <label htmlFor="zipCode">CEP</label>
                <input id="zipCode" type="text" {...form.getFieldProps('zipCode')} className={getErrorMessage('zipCode') ? 'error' : ''} />
                <small>{getErrorMessage('zipCode')}</small>
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input id="number" type="text" {...form.getFieldProps('number')} className={getErrorMessage('number') ? 'error' : ''} />
                <small>{getErrorMessage('number')}</small>
              </div>
            </div>

            <label htmlFor="complement">Complemento (opcional)</label>
            <input id="complement" type="text" {...form.getFieldProps('complement')} />

            <S.ButtonCheckout className="next" onClick={checkDeliveryStep}>Continuar com o pagamento</S.ButtonCheckout>
            <S.ButtonCheckout className="back" onClick={() => setCheckoutStep('cart')}>Voltar para o carrinho</S.ButtonCheckout>
          </S.FormContainer>
        )}

        {checkoutStep === 'payment' && (
          <S.FormContainer>
            <h3>Pagamento - Valor R$ {getTotalPrice().toFixed(2)}</h3>
            <label htmlFor="cardName">Nome no cartão</label>
            <input id="cardName" type="text" {...form.getFieldProps('cardName')} className={getErrorMessage('cardName') ? 'error' : ''} />
            <small>{getErrorMessage('cardName')}</small>

            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ flex: 2 }}>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input id="cardNumber" type="text" {...form.getFieldProps('cardNumber')} className={getErrorMessage('cardNumber') ? 'error' : ''} />
                <small>{getErrorMessage('cardNumber')}</small>
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="cardCode">CVV</label>
                <input id="cardCode" type="text" {...form.getFieldProps('cardCode')} className={getErrorMessage('cardCode') ? 'error' : ''} />
                <small>{getErrorMessage('cardCode')}</small>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <div>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input id="expiresMonth" type="text" {...form.getFieldProps('expiresMonth')} className={getErrorMessage('expiresMonth') ? 'error' : ''} />
                <small>{getErrorMessage('expiresMonth')}</small>
              </div>
              <div>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input id="expiresYear" type="text" {...form.getFieldProps('expiresYear')} className={getErrorMessage('expiresYear') ? 'error' : ''} />
                <small>{getErrorMessage('expiresYear')}</small>
              </div>
            </div>

            <S.ButtonCheckout disabled={isLoading} onClick={() => form.handleSubmit()}>
              {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
            </S.ButtonCheckout>
            <S.ButtonCheckout className="back" onClick={() => setCheckoutStep('delivery')}>Voltar para a entrega</S.ButtonCheckout>
          </S.FormContainer>
        )}

        {checkoutStep === 'success' && data && (
          <S.FormContainer>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de preparação e em breve será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar.
            </p>
            <p>
              Esperamos que desfrute de uma experiência gastronômica prazerosa.
            </p>
            <S.ButtonCheckout
              onClick={() => {
                dispatch(closeCart());
                setCheckoutStep('cart');
              }}
            >
              Concluir
            </S.ButtonCheckout>
          </S.FormContainer>
        )}
      </S.CartContainer>
    </S.Overlay>
  )
}

export default Cart
