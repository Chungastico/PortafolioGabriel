import { motion } from 'framer-motion';

const HeroHome = () => {
    return (
        <motion.section
        className="bg-blue-500 text-white p-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi Portafolio!</h1>
        <p className="text-lg">Soy Gabriel, desarrollador apasionado por crear experiencias únicas en la web.</p>
        </motion.section>
    );
};

export default HeroHome;

