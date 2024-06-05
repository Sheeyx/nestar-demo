import { useRouter } from 'next/router';
import {useState} from 'react'

const ProductDetail = () => {
    const router = useRouter();
    const { productId } = router.query;
    
  return (
    <div>
        PROPERTY DETAIL
    </div>
  )
}

export default ProductDetail;
