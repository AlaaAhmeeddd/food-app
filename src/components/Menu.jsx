import useFetch from "../hooks/useFetch";
import Container from "./Container";
import MainTitle from "./MainTitle";
import Product from "./Product";
import * as motion from "motion/react-client"

const dotVariants = {
    pulse: {
        scale: [1, 1.5, 1],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

export default function Menu() {
    const { data: products, loading, error } = useFetch('https://free-food-menus-api-two.vercel.app/burgers')
    return (
        <div className="bg-[#F9F9F7]">
            <Container>
                <MainTitle title="Our Menu" description="Explore our delicious menu" />
                {error && <p className="text-red-500 text-center text-2xl font-semibold h-screen">{error.message}</p>}
                {loading &&
                    <motion.div 
                        animate="pulse"
                        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                        className="flex justify-center  gap-5 h-screen"
                    >
                        <motion.div className="w-4 h-4 rounded-full bg-pink-900" variants={dotVariants} />
                        <motion.div className="w-4 h-4 rounded-full bg-pink-900" variants={dotVariants} />
                        <motion.div className="w-4 h-4 rounded-full bg-pink-900" variants={dotVariants} />
                    </motion.div>
                }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                    {products.length > 0 && (
                        products.map((product)=>(
                            <Product 
                                key={product.id} 
                                name={product.name} 
                                price={product.price} 
                                image={product.img} 
                                dsc={product.dsc}
                            />
                        ))
                    )}
                </div>
            </Container>
        </div>
    )
}
