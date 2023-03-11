import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useSelector, useDispatch } from 'react-redux'
import { GetProduct } from '@/redux/productStore'

import Header from '@/components/header'
import Story from '@/components/storySection'
import Slider from '@/components/slider'
import Servises from '@/components/servises'
import Product from '@/components/product'

const index = () => {
    const dispatch = useDispatch()
    const { product } = useSelector((state: any) => state.product)

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    return (
        <>
            <Header />
            <Story />
            <Slider />
            <Servises />
            <Product data={product} sdfd={'sdfdsf'} test={"dfdf"} />
        </>
    )
}

export default index
